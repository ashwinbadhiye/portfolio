import { CSSProperties, ReactNode } from "react";
import "./AuroraText.css";

type AuroraTextProps = {
  children: ReactNode;
  /** Gradient stop colors for the aurora sweep */
  colors?: string[];
  /** Seconds for one full color cycle */
  speed?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Ported from Magic UI's Aurora Text — an animated gradient clipped to the text.
 * Rewritten with a plain CSS background-clip animation (no framer-motion).
 * Defaults are tuned to the site's teal-on-dark palette.
 */
const AuroraText = ({
  children,
  colors = ["#5eead4", "#22d3ee", "#a78bfa", "#5eead4"],
  speed = 8,
  className = "",
  style,
}: AuroraTextProps) => {
  return (
    <span
      className={`aurora-text ${className}`}
      style={
        {
          "--aurora-gradient": `linear-gradient(120deg, ${colors.join(", ")})`,
          "--aurora-speed": `${speed}s`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </span>
  );
};

export default AuroraText;
