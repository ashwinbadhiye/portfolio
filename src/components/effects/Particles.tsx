import { CSSProperties, useEffect, useRef } from "react";
import "./Particles.css";

type ParticlesProps = {
  /** Number of particles */
  quantity?: number;
  /** Particle color (hex) */
  color?: string;
  /** How far particles drift toward/away from the cursor */
  ease?: number;
  /** Cursor influence radius in px */
  staticity?: number;
  className?: string;
  style?: CSSProperties;
};

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean.split("").map((c) => c + c).join("")
      : clean;
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

/**
 * Ported from Magic UI's Particles — a canvas field of drifting dots that gently
 * react to the cursor. Rewritten without framer-motion; uses requestAnimationFrame.
 */
const Particles = ({
  quantity = 60,
  color = "#5eead4",
  ease = 50,
  staticity = 50,
  className = "",
  style,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const size = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;
  const rgb = hexToRgb(color);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const resize = () => {
      size.current.w = container.offsetWidth;
      size.current.h = container.offsetHeight;
      canvas.width = size.current.w * dpr;
      canvas.height = size.current.h * dpr;
      canvas.style.width = `${size.current.w}px`;
      canvas.style.height = `${size.current.h}px`;
      ctx.scale(dpr, dpr);
    };

    const newCircle = (): Circle => ({
      x: Math.random() * size.current.w,
      y: Math.random() * size.current.h,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 1.6 + 0.6,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.5 + 0.15).toFixed(2)),
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      magnetism: 0.1 + Math.random() * 4,
    });

    const seed = () => {
      circles.current = [];
      for (let i = 0; i < quantity; i++) circles.current.push(newCircle());
    };

    const draw = (c: Circle) => {
      ctx.translate(c.translateX, c.translateY);
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${c.alpha})`;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = () => {
      ctx.clearRect(0, 0, size.current.w, size.current.h);
      circles.current.forEach((c) => {
        // fade in toward target alpha
        if (c.alpha < c.targetAlpha) c.alpha += 0.02;

        c.x += c.dx;
        c.y += c.dy;

        // cursor influence
        c.translateX +=
          (mouse.current.x / (staticity / c.magnetism) - c.translateX) / ease;
        c.translateY +=
          (mouse.current.y / (staticity / c.magnetism) - c.translateY) / ease;

        // wrap around edges
        if (c.x < -20) c.x = size.current.w + 20;
        if (c.x > size.current.w + 20) c.x = -20;
        if (c.y < -20) c.y = size.current.h + 20;
        if (c.y > size.current.h + 20) c.y = -20;

        draw(c);
      });
      raf = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left - size.current.w / 2;
      mouse.current.y = e.clientY - rect.top - size.current.h / 2;
    };

    resize();
    seed();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, color, ease, staticity]);

  return (
    <div ref={containerRef} className={`particles ${className}`} style={style} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Particles;
