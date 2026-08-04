import { RefObject, useEffect, useId, useState } from "react";
import "./AnimatedBeam.css";

type AnimatedBeamProps = {
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  gradientStart?: string;
  gradientStop?: string;
};

/**
 * Ported from Magic UI's Animated Beam. Draws an SVG path between two elements
 * inside a shared container and animates a bright gradient dash travelling along
 * it. Recomputes geometry on resize. No framer-motion.
 */
const AnimatedBeam = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  gradientStart = "#5eead4",
  gradientStop = "#22d3ee",
}: AnimatedBeamProps) => {
  const id = useId().replace(/:/g, "");
  const [d, setD] = useState("");
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;
      if (!container || !from || !to) return;

      const cRect = container.getBoundingClientRect();
      const fRect = from.getBoundingClientRect();
      const tRect = to.getBoundingClientRect();

      setBox({ w: cRect.width, h: cRect.height });

      const startX = fRect.left - cRect.left + fRect.width / 2;
      const startY = fRect.top - cRect.top + fRect.height / 2;
      const endX = tRect.left - cRect.left + tRect.width / 2;
      const endY = tRect.top - cRect.top + tRect.height / 2;

      const controlX = (startX + endX) / 2;
      const controlY = (startY + endY) / 2 - curvature;

      setD(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
    };

    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    // recompute shortly after mount in case fonts/layout shift
    const t = setTimeout(update, 300);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg
      className="animated-beam"
      width={box.w}
      height={box.h}
      viewBox={`0 0 ${box.w} ${box.h}`}
      fill="none"
      aria-hidden="true"
    >
      {/* faint static rail */}
      <path d={d} stroke="rgba(94,234,212,0.14)" strokeWidth={1.5} strokeLinecap="round" />
      {/* animated travelling gradient */}
      <path
        d={d}
        stroke={`url(#beam-${id})`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="60 240"
        className="animated-beam-flow"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      />
      <defs>
        <linearGradient id={`beam-${id}`} gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStart} stopOpacity="0" />
          <stop offset="0.4" stopColor={gradientStart} />
          <stop offset="0.6" stopColor={gradientStop} />
          <stop offset="1" stopColor={gradientStop} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AnimatedBeam;
