import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaAppStore, FaGooglePlay, FaBullseye, FaLock, FaVolumeHigh, FaPenFancy } from "react-icons/fa6";
import "./styles/ManifestAI.css";

interface TabDetail {
  id: string;
  title: string;
  icon: any;
  description: string;
  screenshot: string;
  color: string;
}

const ManifestAI = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(30);

  const tabs: TabDetail[] = [
    {
      id: "home",
      title: "Daily Ritual",
      icon: FaVolumeHigh,
      description: "Build a daily wellness habit with streaks, reminders, and daily check-ins tailored to your real life.",
      screenshot: "appscreenshots/manifest-home.png",
      color: "rgba(94, 234, 212, 0.15)" // Teal glow
    },
    {
      id: "goals",
      title: "Goal Creation",
      icon: FaBullseye,
      description: "Set meaningful target dates and clear visual success metrics for career, studies, health, and personal growth.",
      screenshot: "appscreenshots/goals.png",
      color: "rgba(251, 191, 36, 0.15)" // Amber glow
    },
    {
      id: "journal",
      title: "Private Journaling",
      icon: FaPenFancy,
      description: "Express your raw thoughts, gratitude, and daily hurdles. Your writing stays securely on-device for total privacy.",
      screenshot: "appscreenshots/journal.png",
      color: "rgba(168, 85, 247, 0.15)" // Purple glow
    },
    {
      id: "audio",
      title: "AI Audio Scripts",
      icon: FaPlay,
      description: "Manifest AI synthesizes your journal context and goals into unique, relaxing first-person audio meditations.",
      screenshot: "appscreenshots/whispers.png",
      color: "rgba(236, 72, 153, 0.15)" // Pink glow
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="manifest-section" id="manifest-ai">
      <div className="manifest-glow-backdrop" style={{ background: `radial-gradient(circle at 70% 50%, ${currentTab.color} 0%, transparent 60%)` }} />
      
      <div className="manifest-container section-container">
        
        {/* Section Header */}
        <div className="manifest-header text-center">
          <div className="badge-flagship">FLAGSHIP PROJECT</div>
          <h2>Manifest AI <span>Vision into Life</span></h2>
          <p className="manifest-subtitle">
            Turn your inner goals and journals into personalized guided meditations.
          </p>
        </div>

        {/* Dynamic Display Layout */}
        <div className="manifest-showcase-grid">
          
          {/* Left Column: Phone Mockup */}
          <div className="phone-mockup-wrapper">
            <div className="phone-aura" style={{ boxShadow: `0 0 100px 10px ${currentTab.color.replace('0.15', '0.3')}` }} />
            <div className="phone-frame">
              <div className="phone-screen-glare" />
              <div className="phone-notch" />
              <div className="phone-screen-content">
                <img 
                  src={currentTab.screenshot} 
                  alt={`${currentTab.title} screen mockup`} 
                  className="phone-screenshot-img"
                  key={currentTab.id} // Forces re-render animation on tab switch
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content & Interactivity */}
          <div className="manifest-details-panel">
            
            {/* Interactive Tabs */}
            <div className="manifest-tabs-list">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    className={`manifest-tab-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                    data-cursor="disable"
                  >
                    <div className="tab-icon-box">
                      <IconComponent />
                    </div>
                    <div className="tab-text-box">
                      <h4>{tab.title}</h4>
                      <p>{isActive ? tab.description : "Click to view screen"}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Interactive Audio Player */}
            <div className="manifest-audio-player">
              <div className="player-header">
                <div className="player-meta">
                  <span className="live-pill">AUDIO SESSION</span>
                  <h5>Manifestation Guide</h5>
                  <p>Ambient Calm Mix</p>
                </div>
                <button 
                  className={`player-control-btn ${isPlaying ? "playing" : ""}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause audio preview" : "Play audio preview"}
                  data-cursor="disable"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>

              {/* Animated Waveform */}
              <div className="player-waveform-container">
                <div className="waveform-bar-list">
                  {[...Array(24)].map((_, i) => {
                    // Random-looking but deterministic height multipliers
                    const heights = [30, 60, 45, 80, 50, 70, 40, 90, 65, 35, 75, 55, 45, 80, 60, 30, 70, 50, 85, 40, 65, 50, 45, 30];
                    const heightVal = heights[i % heights.length];
                    const animationDelay = `${i * 0.08}s`;
                    return (
                      <div 
                        key={i} 
                        className={`waveform-bar ${isPlaying ? "animated" : ""}`} 
                        style={{ 
                          height: `${heightVal}%`,
                          animationDelay: isPlaying ? animationDelay : "0s"
                        }}
                      />
                    );
                  })}
                </div>
                <div className="waveform-progress" style={{ width: `${audioProgress}%` }} />
              </div>
            </div>

            {/* Privacy Shield Info */}
            <div className="manifest-privacy-badge">
              <div className="privacy-icon-box">
                <FaLock />
              </div>
              <div className="privacy-badge-text">
                <strong>100% Secure &amp; Private</strong>
                <p>All journal entries remain encrypted on-device. No tracking, no noisy social feeds.</p>
              </div>
            </div>

            {/* Download Links / Action Buttons */}
            <div className="manifest-actions">
              <a 
                href="https://ashwinbadhiye.github.io/manifest/index.html" 
                target="_blank" 
                rel="noreferrer" 
                className="manifest-web-btn"
                data-cursor="disable"
              >
                Visit Landing Page
              </a>
              <div className="store-badge-group">
                <a 
                  href="https://ashwinbadhiye.github.io/manifest/index.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="store-badge-btn"
                  title="Available on the iOS App Store"
                  data-cursor="disable"
                >
                  <FaAppStore /> App Store
                </a>
                <a 
                  href="https://ashwinbadhiye.github.io/manifest/index.html" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="store-badge-btn"
                  title="Available on Google Play Store"
                  data-cursor="disable"
                >
                  <FaGooglePlay /> Play Store
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ManifestAI;
