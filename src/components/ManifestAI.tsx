import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ManifestAI.css";

gsap.registerPlugin(ScrollTrigger);

const screenshots = [
  { src: "appscreenshots/splash.png", label: "Begin your Journey within" },
  { src: "appscreenshots/manifest-home.png", label: "Bring your Goals to life" },
  { src: "appscreenshots/goals.png", label: "Personalized ai Manifest" },
  { src: "appscreenshots/whispers.png", label: "Gentle daily Whispers" },
  { src: "appscreenshots/affirmations.png", label: "Speak your Manifestations" },
  { src: "appscreenshots/journal.png", label: "Your daily Journal space" },
  { src: "appscreenshots/new-entry.png", label: "Let your Thoughts flow" },
  { src: "appscreenshots/gratitude-entry.png", label: "Journal your emotions" },
  { src: "appscreenshots/dream-life.png", label: "Create your Vision Board" },
  { src: "appscreenshots/calendar.png", label: "Track every Moment of Growth" },
  { src: "appscreenshots/home.png", label: "Your daily Manifest ritual" },
];

const features = [
  { title: "Goal Creation", desc: "Set goals across career, exams, business, health, relationships and personal growth, each with a target date." },
  { title: "Private Journaling", desc: "Write your thoughts, challenges and gratitude. Your journal stays on-device for added privacy." },
  { title: "AI-Generated Scripts", desc: "Unique manifestation scripts written in first person, generated from your goals and journal." },
  { title: "Personalized Affirmations", desc: "Affirmations shaped by your own journal context, not generic templates." },
  { title: "Audio Sessions", desc: "Every script becomes a calming, guided-meditation-style audio you can listen to anywhere." },
  { title: "Script History & Progress", desc: "Revisit past manifestations and track how your goals evolve over time." },
  { title: "Daily Whispers & Streaks", desc: "Gentle reminders and streak tracking that fit into a real daily routine." },
  { title: "Vision Boards", desc: "Visualize your goals with tiles, quotes and imagery in your own Dream Life board." },
  { title: "Calm, Distraction-Free Design", desc: "No noisy feeds, no endless scrolling — just a clean, wellness-inspired experience." },
];

const philosophy = [
  "No noisy social feeds",
  "No endless scrolling",
  "No unrealistic promises",
  "Clarity over chaos",
  "Gratitude & confidence",
  "Built for daily ritual",
];

const ManifestAI = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    const track = trackRef.current;
    if (!section || !gallery || !track || ScrollTrigger.isTouch === 1) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - gallery.clientWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          id: "manifest-gallery",
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="manifest-section" id="manifest-ai" ref={sectionRef}>
      <div className="manifest-intro section-container">
        <img className="manifest-icon" src="images/app-icon.png" alt="Manifest AI app icon" />
        <span className="manifest-eyebrow">Flagship Project</span>
        <h2>
          Manifest <span>AI</span>
        </h2>
        <p className="manifest-tagline">
          Vision into Life — make your vision feel real, in your own words.
        </p>
        <p className="manifest-description">
          Manifest AI transforms your goals and private journal entries into personalized manifestation
          scripts you can listen to like calming guided meditations. Whether you're a busy professional, a
          student preparing for exams, or someone building a healthier daily routine, it helps you gain
          clarity, stay motivated, and take consistent action toward the life you want.
        </p>
        <div className="manifest-status-row">
          <span className="manifest-pill">App Store · In Review</span>
          <span className="manifest-pill">Google Play · Closed Testing</span>
        </div>
        <p className="manifest-credit">
          I led product design and direction from the ground up, and partnered with a developer to bring it
          to the App Store and Google Play.
        </p>
      </div>

      <div className="manifest-gallery section-container" ref={galleryRef}>
        <div className="manifest-track" ref={trackRef}>
          {screenshots.map((shot, i) => (
            <div className="manifest-slide" key={i}>
              <img src={shot.src} alt={shot.label} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="manifest-features section-container">
        <h3>Key Features</h3>
        <div className="manifest-features-grid">
          {features.map((f, i) => (
            <div className="manifest-feature-card" key={i}>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="manifest-philosophy">
        <div className="section-container">
          <p className="manifest-philosophy-title">Designed for real life</p>
          <div className="manifest-tags">
            {philosophy.map((tag, i) => (
              <span className="manifest-tag" key={i}>{tag}</span>
            ))}
          </div>

          <div className="manifest-cta">
            <div className="manifest-cta-buttons">
              <a
                href="https://ashwinbadhiye.github.io/manifest/index.html"
                target="_blank"
                rel="noreferrer"
                className="manifest-btn manifest-btn-primary"
              >
                Visit App Website
              </a>
              <a href="#contact" className="manifest-btn manifest-btn-secondary">
                Request a Test Build
              </a>
            </div>
            <a
              href="https://ashwinbadhiye.github.io/manifest/privacy.html"
              target="_blank"
              rel="noreferrer"
              className="manifest-link"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestAI;
