import { CSSProperties } from "react";
import "./BorderBeam.css";

type BorderBeamProps = {
  /** Corner radius in px — should match the host card's radius */
  radius?: number;
  /** Beam thickness in px */
  size?: number;
  /** Seconds for one full lap around the border */
  duration?: number;
  /** Start offset (0–1) so multiple cards aren't in lockstep */
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
};

/**
 * Ported from Magic UI's Border Beam — a small concentrated light that travels
 * around a card's border. Implemented as a masked, rotating conic gradient with
 * a tight bright stop (distinct from ShineBorder's wide sweep). Drop it inside a
 * position:relative parent.
 */
const BorderBeam = ({
  radius = 16,
  size = 1.5,
  duration = 6,
  delay = 0,
  colorFrom = "#5eead4",
  colorTo = "#a78bfa",
}: BorderBeamProps) => {
  return (
    <span
      className="border-beam"
      aria-hidden="true"
      style={
        {
          "--bb-radius": `${radius}px`,
          "--bb-size": `${size}px`,
          "--bb-duration": `${duration}s`,
          "--bb-delay": `${-delay * duration}s`,
          "--bb-from": colorFrom,
          "--bb-to": colorTo,
        } as CSSProperties
      }
    />
  );
};

export default BorderBeam;
