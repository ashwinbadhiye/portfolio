import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IconCloud from "./effects/IconCloud";
import SkillRings from "./effects/SkillRings";
import ShineBorder from "./effects/ShineBorder";
import Particles from "./effects/Particles";
import { allSkills, skillCategories } from "./skillsData";
import "./styles/TechStackCloud.css";

gsap.registerPlugin(ScrollTrigger);

const TechStackCloud = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Scroll reveal is desktop-only. On mobile/touch the ScrollTrigger can fail
    // to fire (ScrollSmoother behaves differently there), which would leave the
    // "from" opacity:0 stuck and blank the section. Skipping it keeps content
    // fully visible on mobile.
    if (window.innerWidth <= 1024) return;
    const ctx = gsap.context(() => {
      gsap.from(".tsc-reveal", {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="tsc-section" id="stack-cloud" ref={sectionRef}>
      <Particles quantity={70} color="#5eead4" className="tsc-particles" />

      <div className="tsc-inner section-container">
        <h2 className="u-title tsc-title tsc-reveal">
          My <span>Tech Stack</span>
        </h2>
        <p className="u-desc tsc-sub tsc-reveal">
          Drag to spin the sphere and explore the tools and skills I build with.
        </p>

        {/* Four category skill bars — titles and centered scrolling bars only */}
        <div className="tsc-bars tsc-reveal">
          {skillCategories.map((cat, i) => {
            const items = [...cat.skills, ...cat.skills, ...cat.skills];
            return (
              <div
                className={`tsc-bar ${i % 2 === 1 ? "tsc-bar--reverse" : ""}`}
                key={cat.name}
                style={{ ["--tsc-bar-duration" as string]: `${16 + cat.skills.length * 1.4}s` }}
              >
                <span className="tsc-bar-cat" style={{ color: cat.color }}>
                  {cat.name}
                </span>
                <div className="tsc-bar-wrap">
                  <div className="tsc-bar-track">
                    {items.map((s, j) => (
                      <span className="tsc-chip" key={j}>
                        <img src={s.src} alt={s.label} loading="lazy" draggable={false} />
                        {s.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tsc-stage tsc-reveal">
          <ShineBorder
            className="tsc-card"
            radius={360}
            borderWidth={1.5}
            duration={10}
            color={["#5eead4", "#22d3ee", "#a78bfa"]}
          >
            <SkillRings mode="four" baseRadius={218} ringGap={30} />
            <div className="tsc-cloud">
              <IconCloud icons={allSkills} radius={150} monochrome />
            </div>
          </ShineBorder>
        </div>
      </div>
    </section>
  );
};

export default TechStackCloud;
