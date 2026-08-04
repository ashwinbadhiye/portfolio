import { useEffect, useMemo, useRef, useState } from "react";
import "./IconCloud.css";

export type CloudIcon = {
  src: string;
  label: string;
};

type IconCloudProps = {
  icons: CloudIcon[];
  /** Sphere radius in px */
  radius?: number;
  /** Auto-rotation speed */
  speed?: number;
  /** Render all icons in a single uniform tint instead of their brand colors */
  monochrome?: boolean;
};

type Placed = CloudIcon & {
  // position on the unit sphere
  ux: number;
  uy: number;
  uz: number;
};

/**
 * Ported from Magic UI's Icon Cloud. Distributes icons evenly on a sphere
 * (Fibonacci lattice), auto-rotates, and supports drag-to-spin with momentum.
 * Rendered with CSS 3D transforms — no Three.js, no framer-motion.
 */
const IconCloud = ({ icons, radius = 150, speed = 0.0025, monochrome = false }: IconCloudProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);

  // rotation state (radians) + angular velocity for momentum
  const rot = useRef({ x: -0.2, y: 0 });
  const vel = useRef({ x: 0, y: speed });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  const placed: Placed[] = useMemo(() => {
    const n = icons.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return icons.map((icon, i) => {
      const y = 1 - (i / Math.max(n - 1, 1)) * 2; // 1 → -1
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return {
        ...icon,
        ux: Math.cos(theta) * r,
        uy: y,
        uz: Math.sin(theta) * r,
      };
    });
  }, [icons]);

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      if (!dragging.current) {
        // ease toward the idle auto-spin speed (a touch faster on hover)
        const target = hovering.current ? speed * 2.2 : speed;
        vel.current.y += (target - vel.current.y) * 0.03;
        vel.current.x *= 0.94; // dampen vertical momentum back to level
      }
      rot.current.x += vel.current.x;
      rot.current.y += vel.current.y;
      // clamp vertical tilt so it never flips fully over
      rot.current.x = Math.max(-1.0, Math.min(1.0, rot.current.x));
      setTick((t) => (t + 1) % 1000000);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      dragging.current = true;
      last.current = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;
      last.current = { x: e.clientX, y: e.clientY };
      vel.current.y = dx * 0.005;
      vel.current.x = -dy * 0.005;
      rot.current.y += dx * 0.005;
      rot.current.x += -dy * 0.005;
    };
    const onUp = () => {
      dragging.current = false;
    };
    const onEnter = () => (hovering.current = true);
    const onLeave = () => (hovering.current = false);

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // rotate each unit vector by the current x/y rotation and project
  const { x: rx, y: ry } = rot.current;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);

  return (
    <div
      ref={ref}
      className={`icon-cloud ${monochrome ? "icon-cloud--mono" : ""}`}
      style={{ width: radius * 2, height: radius * 2 }}
      // tick is referenced so React re-renders each frame
      data-tick={tick}
    >
      {placed.map((p, i) => {
        // rotate around Y then X
        let x = p.ux * cosY - p.uz * sinY;
        let z = p.ux * sinY + p.uz * cosY;
        let y = p.uy * cosX - z * sinX;
        z = p.uy * sinX + z * cosX;

        const depth = (z + 1) / 2; // 0 (back) → 1 (front)
        const scale = 0.55 + depth * 0.65;
        const opacity = 0.35 + depth * 0.65;

        return (
          <div
            key={i}
            className="icon-cloud-item"
            title={p.label}
            style={{
              transform: `translate(-50%, -50%) translate3d(${x * radius}px, ${y * radius}px, 0) scale(${scale})`,
              opacity,
              zIndex: Math.round(depth * 100),
            }}
          >
            <img src={p.src} alt={p.label} draggable={false} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
};

export default IconCloud;
