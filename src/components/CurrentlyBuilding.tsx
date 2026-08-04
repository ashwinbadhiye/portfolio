import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AuroraText from "./effects/AuroraText";
import Terminal, { TerminalLine } from "./effects/Terminal";
import AnimatedList from "./effects/AnimatedList";
import AnimatedBeam from "./effects/AnimatedBeam";
import ShineBorder from "./effects/ShineBorder";
import "./styles/CurrentlyBuilding.css";

gsap.registerPlugin(ScrollTrigger);

const bootLines: TerminalLine[] = [
  { text: "npm run dev", type: "cmd" },
  { text: "› hr-connect@1.0.0 dev", type: "muted" },
  { text: "[db] backend: Postgres (Neon)", type: "out" },
  { text: "✓ Express server on :3000", type: "ok" },
  { text: "✓ Security: bcrypt · JWT · helmet · rate-limit", type: "ok" },
  { text: "✓ Trust checks: email · contact · website · linkedin", type: "ok" },
  { text: "✓ Verified job board for Nagpur is live", type: "ok" },
];

const jobs = [
  { role: "React Developer", company: "Orange City Tech", type: "Full-time" },
  { role: "HR Manager", company: "Nagpur Retail Co.", type: "On-site" },
  { role: "Backend Engineer", company: "Citrine Labs", type: "Remote" },
  { role: "UI/UX Designer", company: "Vidarbha Studio", type: "Contract" },
];

const CurrentlyBuilding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // beam refs
  const beamContainer = useRef<HTMLDivElement>(null);
  const nodeCandidate = useRef<HTMLDivElement>(null);
  const nodeHub = useRef<HTMLDivElement>(null);
  const nodeHr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Desktop-only reveal — see note in TechStackCloud. Prevents the section
    // being left invisible on mobile if the ScrollTrigger doesn't fire.
    if (window.innerWidth <= 1024) return;
    const ctx = gsap.context(() => {
      gsap.from(".cb-reveal", {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="cb-section" id="currently-building" ref={sectionRef}>
      <div className="cb-inner section-container">
        <div className="cb-head cb-reveal">
          <span className="cb-badge">
            <span className="cb-badge-dot" /> Currently Building
          </span>
          <h2 className="cb-title">
            <AuroraText>HR Connect</AuroraText>
          </h2>
          <p className="cb-sub">
            A verified, direct-contact job board for Nagpur. Every employer passes
            four trust checks before going live, so candidates reach the HR
            directly instead of sending applications into a black hole.
          </p>
        </div>

        <div className="cb-grid">
          {/* Terminal */}
          <div className="cb-reveal cb-terminal-wrap">
            <Terminal lines={bootLines} />
          </div>

          {/* Flow diagram with animated beams */}
          <div className="cb-reveal cb-flow" ref={beamContainer}>
            <AnimatedBeam
              containerRef={beamContainer}
              fromRef={nodeCandidate}
              toRef={nodeHub}
              curvature={-40}
            />
            <AnimatedBeam
              containerRef={beamContainer}
              fromRef={nodeHub}
              toRef={nodeHr}
              curvature={-40}
              delay={0.6}
            />
            <div className="cb-node" ref={nodeCandidate}>
              <span className="cb-node-emoji">🧑‍💻</span>
              <span className="cb-node-label">Candidate</span>
            </div>
            <div className="cb-node cb-node--hub" ref={nodeHub}>
              <span className="cb-node-emoji">🍊</span>
              <span className="cb-node-label">HR Connect</span>
            </div>
            <div className="cb-node" ref={nodeHr}>
              <span className="cb-node-emoji">💬</span>
              <span className="cb-node-label">HR · WhatsApp</span>
            </div>
          </div>

          {/* Verified listings */}
          <div className="cb-reveal cb-listings">
            <p className="cb-listings-title">Verified listings</p>
            <AnimatedList delay={800}>
              {jobs.map((job, i) => (
                <ShineBorder key={i} radius={12} borderWidth={1} duration={8} className="cb-job">
                  <div className="cb-job-inner">
                    <div className="cb-job-main">
                      <span className="cb-job-role">{job.role}</span>
                      <span className="cb-job-company">{job.company} · Nagpur</span>
                    </div>
                    <div className="cb-job-side">
                      <span className="cb-job-type">{job.type}</span>
                      <span className="cb-verified">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Verified
                      </span>
                    </div>
                  </div>
                </ShineBorder>
              ))}
            </AnimatedList>
          </div>
        </div>

        <div className="cb-cta cb-reveal">
          <span className="cb-cta-note">Soft-launch in progress · Node · Express · Postgres</span>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
