import { useRef, useEffect } from "react";
import AuroraText from "./effects/AuroraText";
import BorderBeam from "./effects/BorderBeam";
import "./styles/ManifestAI.css";

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
  { title: "Calm, Distraction-Free Design", desc: "No noisy feeds and no endless scrolling, just a clean, wellness-inspired experience." },
];

const philosophy = [
  "No noisy social feeds",
  "No endless scrolling",
  "No unrealistic promises",
  "Clarity over chaos",
  "Gratitude & confidence",
  "Built for daily ritual",
];

const builtWith = [
  {
    name: "Firebase",
    icon: "https://cdn.simpleicons.org/firebase/FFCA28",
    desc: "Auth & real-time data",
  },
  {
    name: "RevenueCat",
    icon: "https://cdn.simpleicons.org/revenuecat/F26522",
    desc: "Subscriptions & IAP",
  },
  {
    name: "AdMob",
    icon: "https://cdn.simpleicons.org/googleadmob/EA4335",
    desc: "Monetization",
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.simpleicons.org/googlecloud/4285F4",
    desc: "AI & backend APIs",
  },
];

const ManifestAI = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Click-and-drag horizontal scrolling for the screenshot gallery. The
  // screenshots stay fully visible in their box and the user drags (holds) to
  // move through them — on desktop via pointer drag, on mobile via native swipe.
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = gallery.scrollLeft;
      gallery.classList.add("dragging");
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 3) moved = true;
      gallery.scrollLeft = startScroll - delta;
    };
    const onPointerUp = () => {
      isDown = false;
      gallery.classList.remove("dragging");
    };
    // Prevent an accidental drag from triggering link/image clicks.
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    gallery.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    gallery.addEventListener("click", onClickCapture, true);

    return () => {
      gallery.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      gallery.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div className="manifest-section" id="manifest-ai" ref={sectionRef}>
      <div className="manifest-intro section-container">
        <img className="manifest-icon" src="images/app-icon.png" alt="Manifest AI app icon" />
        <span className="manifest-eyebrow">Flagship Project</span>
        <h2>
          Manifest <span><AuroraText>AI</AuroraText></span>
        </h2>
        <p className="manifest-tagline">
          Vision into Life. Make your vision feel real, in your own words.
        </p>
        <p className="manifest-description">
          Manifest AI turns your goals and private journal entries into personalized manifestation
          scripts you can listen to like calming guided meditations. Whether you're a busy professional, a
          student preparing for exams, or someone building a healthier daily routine, it helps you gain
          clarity, stay motivated, and take consistent action toward the life you want.
        </p>

        <div className="manifest-store-badges">
          <a
            href="https://apps.apple.com/us/app/manifest-ai-vision-into-life/id6775246699"
            target="_blank"
            rel="noreferrer"
            className="manifest-store-badge"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="manifest-badge-img manifest-badge-img--apple"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.aristaai.manifestai"
            target="_blank"
            rel="noreferrer"
            className="manifest-store-badge"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="manifest-badge-img manifest-badge-img--play"
            />
          </a>
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
              <img src={shot.src} alt={shot.label} loading="lazy" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      <div className="manifest-features section-container">
        <h3>Key Features</h3>
        <div className="manifest-features-grid">
          {features.map((f, i) => (
            <div className="manifest-feature-card" key={i}>
              <BorderBeam radius={16} duration={7} delay={i / features.length} />
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="manifest-built-with-strip">
        <div className="section-container">
          <p className="manifest-built-with-title">Powered by</p>
          <div className="manifest-tech-row">
            {builtWith.map((tech, i) => (
              <div className="manifest-tech-item" key={i}>
                <img src={tech.icon} alt={tech.name} className="manifest-tech-icon" />
                <div className="manifest-tech-info">
                  <span className="manifest-tech-name">{tech.name}</span>
                  <span className="manifest-tech-desc">{tech.desc}</span>
                </div>
              </div>
            ))}
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestAI;
