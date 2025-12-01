import { useEffect } from "react";
import { WheelIcon, Footer } from "../components/Common";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <WheelIcon className="wheel-icon" />
          </div>
          <h1>Wheel Habits</h1>
          <p className="tagline">
            Daily essential habits you never skip.{" "}
            <span>Long-term activities.</span> One system.
          </p>

          <div className="cta-group">
            <a href="#download" className="btn btn-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15C4.34,1.9 4.96,1.94 5.41,2.27L21.41,11.27C21.79,11.55 22,11.96 22,12.5C22,13.04 21.79,13.45 21.41,13.73L5.41,22.73C5.13,22.91 4.82,23 4.5,23C4.21,23 3.93,22.92 3.68,22.77C3.26,22.5 3,22.03 3,21.5V20.5Z" />
              </svg>
              Get on Play Store
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-notch"></div>
              <div className="screen-content">
                <div className="mini-header">Core Habits</div>
                <div className="mini-progress">
                  <div className="mini-progress-bar"></div>
                </div>
                <div className="mini-habits">
                  <div className="mini-habit completed">
                    <div className="mini-checkbox checked">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="mini-habit-text">Morning hydration</span>
                  </div>
                  <div className="mini-habit completed">
                    <div className="mini-checkbox checked">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="mini-habit-text">Deep work</span>
                  </div>
                  <div className="mini-habit">
                    <div className="mini-checkbox"></div>
                    <span className="mini-habit-text">Workout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-header">
          <h2 className="section-title">Everything you need</h2>
          <p className="section-subtitle">
            Two systems working together: daily mandatory essential habits for
            consistency, and use-at-will weighted wheel activities for long-term
            projects and life management.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <h3>Core Habits</h3>
            <p>
              Your daily non-negotiables. Build discipline with streaks and
              progress tracking. Miss one day? Streak resets to zero. Keep them
              minimal. These are the core habits you never skip.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3>Wheel Activities</h3>
            <p>
              Non-daily habits, long-term projects, hobbies, and rewards — all
              in one wheel. Set weights based on your priorities and spin
              whenever you're ready. No streaks, no pressure, zero guilt — just
              balanced activities at your own pace.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3>Gentle Reminders</h3>
            <p>
              Set custom reminder times for any habit and receive gentle
              notifications.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
            </div>
            <h3>Daily Journal</h3>
            <p>
              A beautiful chalkboard-style journal records your accomplishments.
              Review your day at a glance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17.657 18.657A8 8 0 016.343 7.343" />
                <path d="M21 12h-4l-3-9-3 9H7" />
              </svg>
            </div>
            <h3>Streak Tracking</h3>
            <p>
              Build momentum with consecutive day tracking. Celebrate milestones
              with confetti animations!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v18M3 12h18" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Add, edit, reorder habits and activities. Adjust wheel weights
              based on your priorities and importance. Make it truly yours.
            </p>
          </div>
        </div>
      </section>

      {/* Wheel Demo Section */}
      <section className="wheel-section">
        <div className="wheel-container">
          <div className="wheel-demo">
            <svg className="wheel-svg" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="seg1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FFD740" }} />
                  <stop offset="100%" style={{ stopColor: "#FFC400" }} />
                </linearGradient>
                <linearGradient id="seg2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#40C4FF" }} />
                  <stop offset="100%" style={{ stopColor: "#00B0FF" }} />
                </linearGradient>
                <linearGradient id="seg3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF4081" }} />
                  <stop offset="100%" style={{ stopColor: "#F50057" }} />
                </linearGradient>
                <linearGradient id="seg4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#69F0AE" }} />
                  <stop offset="100%" style={{ stopColor: "#00E676" }} />
                </linearGradient>
                <linearGradient id="seg5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#E040FB" }} />
                  <stop offset="100%" style={{ stopColor: "#D500F9" }} />
                </linearGradient>
                <linearGradient id="seg6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#18FFFF" }} />
                  <stop offset="100%" style={{ stopColor: "#00E5FF" }} />
                </linearGradient>
              </defs>

              <path
                d="M100,100 L100,10 A90,90 0 0,1 177.94,55 Z"
                fill="url(#seg1)"
                opacity="0.9"
              />
              <path
                d="M100,100 L177.94,55 A90,90 0 0,1 177.94,145 Z"
                fill="url(#seg2)"
                opacity="0.9"
              />
              <path
                d="M100,100 L177.94,145 A90,90 0 0,1 100,190 Z"
                fill="url(#seg3)"
                opacity="0.9"
              />
              <path
                d="M100,100 L100,190 A90,90 0 0,1 22.06,145 Z"
                fill="url(#seg4)"
                opacity="0.9"
              />
              <path
                d="M100,100 L22.06,145 A90,90 0 0,1 22.06,55 Z"
                fill="url(#seg5)"
                opacity="0.9"
              />
              <path
                d="M100,100 L22.06,55 A90,90 0 0,1 100,10 Z"
                fill="url(#seg6)"
                opacity="0.9"
              />
              <circle cx="100" cy="100" r="30" fill="#FFB300" />
              <text
                x="100"
                y="105"
                textAnchor="middle"
                fill="#000"
                fontFamily="Outfit"
                fontWeight="700"
                fontSize="12"
              >
                SPIN
              </text>
              <polygon points="100,15 92,0 108,0" fill="#448AFF" />
            </svg>
          </div>

          <div className="wheel-info">
            <h2>One wheel, endless possibilities</h2>
            <p>
              The wheel is your{" "}
              <strong>versatile life management system</strong>. Use it for
              everything that doesn't fit into daily habits. Spin whenever you
              want, with no pressure or guilt. Let the wheel choose for you and
              avoid decision fatigue. Set weights to control your priorities:
              weight 3 means 3x more chances than weight 1. Creative randomness,
              surprising in the moment, but perfectly balanced over time.
            </p>
            <ul className="wheel-features">
              <li>
                <strong>Project management:</strong> Balance multiple long-term
                projects with weighted priorities.
              </li>
              <li className="or-separator">— or —</li>
              <li>
                <strong>Non-daily habits:</strong> Reading, calling friends,
                hobbies that shouldn't be mandatory.
              </li>
              <li className="or-separator">— or —</li>
              <li>
                <strong>Study planning:</strong> Prioritize subjects by
                importance — Math with coefficient 3 gets more spins than
                English with coefficient 1.
              </li>
              <li className="or-separator">— or —</li>
              <li>
                <strong>Reward system:</strong> Add treats and surprises to stay
                motivated, or make the wheel itself a reward — spin only after
                completing your core habits.
              </li>
              <li className="or-separator">— or —</li>
              <li>
                <strong>Mix of all the above:</strong> One versatile wheel that
                adapts to your balanced life!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Algorithm Section */}
      <section className="algorithm-section">
        <div className="section-header">
          <h2 className="section-title">Smart Algorithm</h2>
          <p className="section-subtitle">
            Our smart algorithm combines two factors to ensure fair selection.
          </p>
        </div>

        <div className="algorithm-content">
          <div className="algorithm-factors">
            <div className="algorithm-factor">
              <div className="factor-icon">⚖️</div>
              <h3>Base Weight</h3>
              <p>
                Set by you. Higher weight means higher chance of being picked.
                You control your priorities.
              </p>
            </div>
            <div className="algorithm-factor">
              <div className="factor-icon">⏳</div>
              <h3>Neglect Bonus</h3>
              <p>
                Activities that haven't been picked for a while automatically
                get a boost. Nothing stays forgotten for too long.
              </p>
            </div>
          </div>
          <div className="algorithm-result">
            <p>
              The result?{" "}
              <strong>
                Your priorities are respected, but nothing gets left behind.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="journal-section">
        <div className="section-header">
          <h2 className="section-title">Your Day, Beautifully Captured</h2>
          <p className="section-subtitle">
            A chalkboard-style journal that automatically records your
            accomplishments.
          </p>
        </div>

        <div className="journal-preview">
          <div className="journal-date">Friday, November 28, 2025</div>
          <div className="journal-entries">
            <div className="journal-entry">
              <span className="journal-icon habit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
              </span>
              <span className="journal-time">06:30</span>
              <span className="journal-divider">—</span>
              <span>Morning hydration</span>
            </div>
            <div className="journal-entry">
              <span className="journal-icon prayer-icon">
                <svg viewBox="0 -960 960 960" fill="currentColor">
                  <path d="m521-500 59-43 58 43-23-68 59-43h-72l-22-69-22 69h-73l59 43-23 68Zm-41 220q83 0 141.5-58T680-480q0-8-.5-16t-2.5-16q-11 47-49 77.5T539-404q-60 0-101-41t-41-101q0-46 26-82.5t68-51.5h-11q-84 0-142 58.5T280-480q0 84 58 142t142 58Zm0 252L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z" />
                </svg>
              </span>
              <span className="journal-time">07:15</span>
              <span className="journal-divider">—</span>
              <span>Fajr prayer</span>
            </div>
            <div className="journal-entry">
              <span className="journal-icon habit-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <polyline points="8 12 11 15 16 9" />
                </svg>
              </span>
              <span className="journal-time">09:00</span>
              <span className="journal-divider">—</span>
              <span>Deep work session</span>
            </div>
            <div className="journal-entry">
              <span className="journal-icon spin-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <line x1="12" y1="12" x2="15.5" y2="7" />
                </svg>
              </span>
              <span className="journal-time">14:30</span>
              <span className="journal-divider">—</span>
              <span>Reading (wheel spin)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="prayer-section">
        <div className="prayer-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V21h8v-6.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 16H9v-1h2v1zm4 0h-2v-1h2v1zm-5-3v-1h6v1H10zm5-3H9V9h6v3z" />
          </svg>
          <span>Muslim Prayer Support — Added as Core Habits</span>
        </div>
        <h2>Muslim Prayer Times (Optional Feature)</h2>
        <p>
          Automatically add the 5 daily prayers to your core habits with
          accurate times from your local mosque, and choose which ones you want
          notifications for.
        </p>

        <div className="prayer-setup">
          <h3>How to set up prayer times</h3>
          <div className="setup-steps">
            <div className="setup-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Find your mosque on Mawaqit</h4>
                <p>
                  Go to{" "}
                  <a
                    href="https://mawaqit.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mawaqit.net
                  </a>{" "}
                  and search for your mosque. Copy the mosque ID from the URL.
                </p>
                <div className="step-example">
                  <code>
                    mawaqit.net/en/<strong>grande-mosquee-de-paris</strong>
                  </code>
                  <span className="arrow">→</span>
                  <span>
                    Mosque ID: <strong>grande-mosquee-de-paris</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Open Prayer Settings</h4>
                <p>
                  In the app, tap the <strong>mosque icon</strong> (🕌) in the
                  Habits tab header.
                </p>
              </div>
            </div>
            <div className="setup-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Enter your Mosque ID</h4>
                <p>
                  Paste the mosque ID and enable "Add Muslim prayers". The 5
                  daily prayers will be added automatically with accurate times!
                </p>
              </div>
            </div>
          </div>
          <div className="prayer-features">
            <div className="prayer-feature">
              <span className="prayer-feature-icon">🔔</span>
              <span>Notifications at prayer times</span>
            </div>
            <div className="prayer-feature">
              <span className="prayer-feature-icon">🔄</span>
              <span>Auto-updates daily</span>
            </div>
            <div className="prayer-feature">
              <span className="prayer-feature-icon">🕌</span>
              <span>Accurate mosque times</span>
            </div>
          </div>
        </div>

        <p style={{ marginTop: "2rem", fontSize: "0.95rem" }}>
          Prayer times from
        </p>
        <a href="https://mawaqit.net" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.mawaqit.net/images/logos/mawaqit_logo_light_rounded.png"
            alt="Mawaqit"
            className="mawaqit-logo"
          />
        </a>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="download">
        <h2>Ready to transform your days?</h2>
        <p>
          Download Wheel Habits and start building better habits today. Free, no
          ads, just you and your goals.
        </p>

        <div className="store-badges">
          <a
            href="https://play.google.com/store/apps/details?id=com.pactence.wheel_habits"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="store-badge"
            />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
