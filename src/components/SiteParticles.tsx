import Particles from "./effects/Particles";
import "./styles/SiteParticles.css";

/**
 * A single fixed, full-viewport particle field that sits behind all content for
 * the whole page. One canvas (good for performance) at low opacity — it unifies
 * the color feel across sections without competing with the 3D scenes.
 */
const SiteParticles = () => {
  return (
    <div className="site-particles" aria-hidden="true">
      <Particles quantity={90} color="#5eead4" ease={70} staticity={60} />
    </div>
  );
};

export default SiteParticles;
