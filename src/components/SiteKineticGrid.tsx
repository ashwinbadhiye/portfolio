import KineticGrid from "./effects/KineticGrid";
import "./styles/SiteParticles.css";

/**
 * Experimental replacement for SiteParticles: a full-viewport dot grid that
 * warps toward the cursor and ripples on click. Uses window-level pointer
 * listeners (not canvas listeners), so pointer-events can stay "none" and
 * it never blocks clicks on real page content.
 */
const SiteKineticGrid = () => {
  return (
    <div className="site-particles" aria-hidden="true">
      <KineticGrid color="94, 234, 212" />
    </div>
  );
};

export default SiteKineticGrid;
