import { useEffect, useRef } from "react";

interface KineticGridProps {
  color?: string; // dot color, e.g. "94, 234, 212" (RGB triplet) or hex
  dotSpacing?: number;
  dotRadius?: number;
  warpRadius?: number;
  warpStrength?: number;
  lineAlpha?: number; // opacity of the connecting lines between neighbor dots
}

interface Ripple {
  x: number;
  y: number;
  start: number;
}

/**
 * Full-viewport canvas background: a dot grid that warps toward the cursor
 * and ripples outward on click. Self-contained (no deps beyond React).
 */
const KineticGrid = ({
  color = "94, 234, 212", // matches --accentColor #5eead4
  dotSpacing = 34,
  dotRadius = 1.4,
  warpRadius = 160,
  warpStrength = 18,
  lineAlpha = 0.06,
}: KineticGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const ripples = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    const onClick = (e: PointerEvent) => {
      ripples.current.push({ x: e.clientX, y: e.clientY, start: performance.now() });
      // cap concurrent ripples so it never piles up
      if (ripples.current.length > 6) ripples.current.shift();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onClick);

    const RIPPLE_DURATION = 1000; // ms
    const RIPPLE_MAX_RADIUS = 260;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      // drop expired ripples
      ripples.current = ripples.current.filter((r) => now - r.start < RIPPLE_DURATION);

      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;

      // Pass 1: compute each dot's final position/scale/alpha (warp + ripple).
      const grid: { x: number; y: number; scale: number; alpha: number }[][] = [];
      for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
          const baseX = i * dotSpacing;
          const baseY = j * dotSpacing;

          let x = baseX;
          let y = baseY;
          let scale = 1;
          let alpha = 0.35;

          // warp toward cursor
          const dx = baseX - mouse.current.x;
          const dy = baseY - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < warpRadius) {
            const force = (1 - dist / warpRadius) * warpStrength;
            const angle = Math.atan2(dy, dx);
            x -= Math.cos(angle) * force;
            y -= Math.sin(angle) * force;
            scale = 1 + (1 - dist / warpRadius) * 0.9;
            alpha = 0.35 + (1 - dist / warpRadius) * 0.45;
          }

          // ripple displacement from clicks
          for (const r of ripples.current) {
            const age = (now - r.start) / RIPPLE_DURATION;
            const ringRadius = age * RIPPLE_MAX_RADIUS;
            const rdx = baseX - r.x;
            const rdy = baseY - r.y;
            const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
            const band = Math.abs(rdist - ringRadius);
            if (band < 28) {
              const ringForce = (1 - band / 28) * (1 - age) * 14;
              const angle = Math.atan2(rdy, rdx);
              x += Math.cos(angle) * ringForce;
              y += Math.sin(angle) * ringForce;
              alpha = Math.min(1, alpha + (1 - band / 28) * (1 - age) * 0.6);
              scale = Math.max(scale, 1 + (1 - band / 28) * (1 - age) * 1.2);
            }
          }

          grid[i][j] = { x, y, scale, alpha };
        }
      }

      // Pass 2: faint connecting lines to each dot's right and bottom neighbor,
      // drawn first so the dots render on top of them.
      if (lineAlpha > 0) {
        ctx.lineWidth = 1;
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const p = grid[i][j];
            const lineStrength = Math.min(1, (p.alpha - 0.35) * 1.6); // brighter near warp/ripple
            const a = lineAlpha + lineStrength * 0.16;

            const right = grid[i + 1]?.[j];
            if (right) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${color}, ${a})`;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(right.x, right.y);
              ctx.stroke();
            }
            const below = grid[i][j + 1];
            if (below) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${color}, ${a})`;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(below.x, below.y);
              ctx.stroke();
            }
          }
        }
      }

      // Pass 3: dots on top.
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const p = grid[i][j];
          ctx.beginPath();
          ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
          ctx.arc(p.x, p.y, dotRadius * p.scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [color, dotSpacing, dotRadius, warpRadius, warpStrength, lineAlpha]);

  return <canvas ref={canvasRef} />;
};

export default KineticGrid;
