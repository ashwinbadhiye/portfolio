import { CSSProperties, PropsWithChildren } from "react";
import "./ShineBorder.css";

type ShineBorderProps = PropsWithChildren<{
  /** Border thickness in px */
  borderWidth?: number;
  /** Corner radius in px */
  radius?: number;
  /** Seconds for one full sweep */
  duration?: number;
  /** One or more colors for the moving shine gradient */
  color?: string | string[];
  className?: string;
  style?: CSSProperties;
}>;

/**
 * Ported from Magic UI's Shine Border, rewritten in plain CSS (no Tailwind /
 * framer-motion). An animated conic-gradient border sweeps around the box while
 * a mask keeps the fill transparent so only the border edge glows.
 */
const ShineBorder = ({
  borderWidth = 1.5,
  radius = 18,
  duration = 12,
  color = "#5eead4",
  className = "",
  style,
  children,
}: ShineBorderProps) => {
  const colors = Array.isArray(color) ? color.join(",") : color;

  return (
    <div
      className={`shine-border ${className}`}
      style={
        {
          "--sb-border": `${borderWidth}px`,
          "--sb-radius": `${radius}px`,
          "--sb-duration": `${duration}s`,
          "--sb-colors": colors,
          ...style,
        } as CSSProperties
      }
    >
      <span className="shine-border-glow" aria-hidden="true" />
      {children}
    </div>
  );
};

export default ShineBorder;
