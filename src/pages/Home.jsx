import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { WheelIcon, Footer } from "../components/Common";
import { LanguageSwitcher } from "../i18n/LanguageProvider";
import ThemeSwitcher from "../components/ThemeSwitcher";
import PrayerSteps from "../components/PrayerSteps";
import { useContent, useLang } from "../i18n/context";
import { rich } from "../i18n/rich";
import { HOME } from "../content/home";
import { PRAYER } from "../content/prayer";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Icon = ({ children }) => (
  <div className="feature-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </div>
);

// One icon per entry of HOME[lang].features, in the same order.
const FEATURE_ICONS = [
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </>,
  <>
    <path d="M12 8v4l3 3" />
    <circle cx="12" cy="12" r="10" />
  </>,
  <>
    <circle cx="13" cy="4" r="2" />
    <path d="M7 21l3-6 3 2 3 4" />
    <path d="M10 15l-2-4 5-3 3 4h3" />
  </>,
  <>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </>,
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </>,
];

const PRAYER_ICONS = ["🔔", "🌅", "🕌"];

// Prayer mockup: example times for Paris, and the alarms turned on.
const ARABIC_PRAYERS = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];
const PRAYER_TIMES = ["06:21", "12:48", "15:27", "17:47", "19:18"];
const PRAYER_ALARMS = [true, false, false, true, true];

// Icon colors of the Today mockup, as in the app.
const MOCKUP_COLORS = ["#0EA5E9", "#8B5CF6", "transparent", "#14B8A6", "#F97316"];

// Bottom bar icons of the app: Today, Builder, Journal, Partner.
const NAV_ICONS = [
  "M3 6h3l1.5 2L10 5M12 7h9M3 13h3l1.5 2L10 12M12 14h9M12 20h9",
  "M4 4h6v6H4zM14 14h6v6h-6zM7 10v7h7M14 4h6v6h-6z",
  "M6 3h12v18l-6-4-6 4z",
  "M3 12l4-4 4 3 3-3 7 6-5 5-3-3-2 2z",
];

// The Sport wheel of the example: Cardio has weight 2, so half the wheel,
// and sits under the pointer, as in the example's first spin. A label is
// centered on [x, y] and fits in [width].
const EXAMPLE_WHEEL = [
  { key: "cardio", colors: ["#FFD740", "#FFC400"], d: "M100,100 L10,100 A90,90 0 0,1 190,100 Z", label: { x: 100, y: 46, width: 110 } },
  { key: "strength", colors: ["#40C4FF", "#00B0FF"], d: "M100,100 L190,100 A90,90 0 0,1 100,190 Z", label: { x: 140, y: 140, width: 70 } },
  { key: "yoga", colors: ["#69F0AE", "#00E676"], d: "M100,100 L100,190 A90,90 0 0,1 10,100 Z", label: { x: 60, y: 140, width: 70 } },
];

const LABEL_SIZE = 13;

// A label of the example wheel, made smaller when its translation is too
// long for its segment. It is measured once the font is loaded.
const WheelLabel = ({ x, y, width, children }) => {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(LABEL_SIZE);

  useEffect(() => {
    let active = true;
    document.fonts.ready.then(() => {
      const text = ref.current;
      if (!active || !text) return;
      const size = Number(text.getAttribute("font-size"));
      const fitted = (size * width) / text.getComputedTextLength();
      setFontSize(Math.min(LABEL_SIZE, fitted));
    });
    return () => {
      active = false;
    };
  }, [children, width]);

  return (
    <text
      ref={ref}
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#1A1A1A"
      fontFamily="Roboto"
      fontWeight="700"
      fontSize={fontSize}
    >
      {children}
    </text>
  );
};

const Home = () => {
  const lang = useLang();
  const c = useContent(HOME);
  const prayer = useContent(PRAYER);
  const { hash } = useLocation();
  const [prayerOpen, setPrayerOpen] = useState(false);

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

    // Changing the language draws new cards: they are watched again.
    document.querySelectorAll(".feature-card").forEach((card) => {
      card.classList.add("reveal");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [lang]);

  useEffect(() => {
    // A link such as /#data opens on its section. Fonts and translated texts
    // change the height of the page, so the scroll waits for them, and is
    // done again when the language changes.
    const target = hash.slice(1);
    if (!target) return undefined;
    let active = true;
    document.fonts.ready.then(() =>
      requestAnimationFrame(() => {
        if (active) document.getElementById(target)?.scrollIntoView();
      })
    );
    return () => {
      active = false;
    };
  }, [hash, lang]);

  return (
    <>
      <header className="floating-controls">
        <ThemeSwitcher />
        <LanguageSwitcher className="floating-language" />
      </header>

      <main className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="logo-container">
              <WheelIcon className="wheel-icon" />
            </div>
            <h1>Wheel Habits</h1>
            <p className="headline">{c.headline}</p>
            <p className="tagline">{c.subtitle}</p>

            <div className="cta-group">
              <a
                href="https://play.google.com/store/apps/details?id=com.pactence.wheel_habits"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15C4.34,1.9 4.96,1.94 5.41,2.27L21.41,11.27C21.79,11.55 22,11.96 22,12.5C22,13.04 21.79,13.45 21.41,13.73L5.41,22.73C5.13,22.91 4.82,23 4.5,23C4.21,23 3.93,22.92 3.68,22.77C3.26,22.5 3,22.03 3,21.5V20.5Z" />
                </svg>
                {c.playStore}
              </a>
              <a href="#example" className="btn btn-secondary">
                {c.learnMore}
              </a>
            </div>
          </div>

          <div className="phone-mockup" aria-hidden="true">
            <div className="phone-frame">
              <div className="phone-screen app-screen">
                <div className="app-head">
                  <div>
                    <div className="app-title">{c.mockup.title}</div>
                    <div className="app-date">{c.mockup.date}</div>
                  </div>
                  <div className="app-gear">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7 7 0 00-1.63-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54a7 7 0 00-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.65 8.84a.5.5 0 00.12.64l2.03 1.58a7.07 7.07 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.64l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.39 1.05.7 1.63.94l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54a7 7 0 001.63-.94l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.64zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                    </svg>
                  </div>
                </div>

                <div className="app-tabs">
                  <span>{c.mockup.tabs[0]}</span>
                  <span>{c.mockup.tabs[1]}</span>
                  <span className="on">{c.mockup.tabs[2]}</span>
                </div>

                <div className="app-count">
                  <span>
                    <i /> {c.mockup.tabs[2]}
                  </span>
                  <span>{c.mockup.done}</span>
                </div>

                <div className="app-items">
                  {c.mockup.items.map((name, i) => (
                    <div className="app-item" key={name}>
                      <span
                        className={`app-icon${i === 2 ? " wheel" : ""}`}
                        style={{ background: MOCKUP_COLORS[i] }}
                      >
                        {i === 2 ? <WheelIcon /> : <Check />}
                      </span>
                      <span className="app-name">
                        {name}
                        {i === 2 && <small>{c.mockup.wheel}</small>}
                      </span>
                      <span className={`app-check${i < 2 ? " on" : ""}`}>
                        {i < 2 && <Check />}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="app-nav">
                  {c.mockup.nav.map((label, i) => (
                    <div className={`app-nav-item${i === 0 ? " on" : ""}`} key={label}>
                      <span className="app-nav-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={NAV_ICONS[i]} />
                        </svg>
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>{c.scroll}</span>
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

        {/* How It Works Section */}
        <section className="algorithm-section" id="how">
          <div className="section-header">
            <h2 className="section-title">{c.howTitle}</h2>
          </div>

          <div className="setup-steps home-steps">
            {c.howSteps.map(([title, text], i) => (
              <div className="setup-step" key={title}>
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rhythm Section */}
        <section className="algorithm-section" id="rhythm">
          <div className="section-header">
            <h2 className="section-title">{c.rhythmTitle}</h2>
            <p className="section-subtitle">{c.rhythmIntro}</p>
          </div>

          <div className="algorithm-content">
            <div className="algorithm-factors">
              <div className="algorithm-factor">
                <div className="factor-icon">📅</div>
                <h3>{c.fixedTitle}</h3>
                <p>{c.fixedText}</p>
              </div>
              <div className="algorithm-factor">
                <div className="factor-icon">🔄</div>
                <h3>{c.flexTitle}</h3>
                <p>{c.flexText}</p>
              </div>
            </div>
            <div className="algorithm-result">
              <p>{rich(c.rhythmResult)}</p>
            </div>
          </div>
        </section>

        {/* Habit Or Wheel Section */}
        <section className="algorithm-section" id="kind">
          <div className="section-header">
            <h2 className="section-title">{c.kindTitle}</h2>
          </div>

          <div className="algorithm-content">
            <div className="algorithm-factors">
              <div className="algorithm-factor">
                <div className="factor-icon">✅</div>
                <h3>{c.habitTitle}</h3>
                <p>{c.habitText}</p>
              </div>
              <div className="algorithm-factor">
                <div className="factor-icon">🎡</div>
                <h3>{c.wheelTitle}</h3>
                <p>{c.wheelText}</p>
              </div>
            </div>
            <div className="algorithm-result">
              <p>{rich(c.kindResult)}</p>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="wheel-section" id="example">
          <div className="wheel-container">
            <div className="wheel-demo">
              <svg className="wheel-svg" viewBox="0 0 200 200">
                <defs>
                  {EXAMPLE_WHEEL.map(({ colors: [from, to] }, i) => (
                    <linearGradient
                      key={i}
                      id={`seg${i + 1}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: from }} />
                      <stop offset="100%" style={{ stopColor: to }} />
                    </linearGradient>
                  ))}
                </defs>
                {EXAMPLE_WHEEL.map(({ key, d }, i) => (
                  <path key={key} d={d} fill={`url(#seg${i + 1})`} opacity="0.9" />
                ))}
                {EXAMPLE_WHEEL.map(({ key, label }) => (
                  <WheelLabel key={key} {...label}>
                    {c.tree[key]}
                  </WheelLabel>
                ))}
                <circle cx="100" cy="100" r="30" fill="#FFB300" />
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  fill="#000"
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="12"
                >
                  {c.spin}
                </text>
                <polygon points="100,15 92,0 108,0" fill="#6153F5" />
              </svg>
            </div>

            <div className="wheel-info">
              <h2>{c.exampleTitle}</h2>
              <p>{rich(c.exampleText)}</p>
              <p className="example-note">{c.exampleNote}</p>
            </div>
          </div>
        </section>

        {/* Wheel Uses Section */}
        <section className="features" id="uses">
          <div className="section-header">
            <h2 className="section-title">{c.usesTitle}</h2>
            <p className="section-subtitle">{c.usesIntro}</p>
          </div>

          <ul className="wheel-features uses-list">
            {c.uses.map((use) => (
              <li key={use}>
                <span>{rich(use)}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Weights And Nested Wheels Section */}
        <section className="features nested-section" id="chance">
          <div className="section-header">
            <h2 className="section-title">{c.chanceTitle}</h2>
            <p className="section-subtitle">{c.chanceIntro}</p>
          </div>

          <h3 className="tree-title">{c.treeTitle}</h3>
          <div className="wheel-tree">
            <div className="tree-node tree-root">🎡 {c.tree.root}</div>
            <ul>
              <li>
                <div className="tree-node">
                  🎡 {c.tree.cardio} <span className="tree-weight">×2</span>
                </div>
                <ul>
                  {c.tree.cardioItems.map((item) => (
                    <li key={item}>
                      <div className="tree-node tree-leaf">{item}</div>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="tree-node">
                  🎡 {c.tree.strength} <span className="tree-weight">×1</span>
                </div>
                <ul>
                  {c.tree.strengthItems.map((item) => (
                    <li key={item}>
                      <div className="tree-node tree-leaf">{item}</div>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="tree-node tree-leaf">
                  {c.tree.yoga} <span className="tree-weight">×1</span>
                </div>
              </li>
            </ul>
          </div>

          <p className="section-subtitle tree-caption">{c.chanceCaption}</p>
        </section>

        {/* Commitment Section */}
        <section className="algorithm-section" id="commit">
          <div className="section-header">
            <h2 className="section-title">{c.commitTitle}</h2>
            <p className="section-subtitle">{c.commitIntro}</p>
          </div>

          <div className="algorithm-content">
            <div className="algorithm-factors">
              <div className="algorithm-factor">
                <div className="factor-icon">🎯</div>
                <h3>{c.keepTitle}</h3>
                <p>{c.keepText}</p>
              </div>
              <div className="algorithm-factor">
                <div className="factor-icon">⚡</div>
                <h3>{c.skipsTitle}</h3>
                <p>{c.skipsText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="section-header">
            <h2 className="section-title">{c.supportTitle}</h2>
          </div>

          <div className="features-grid">
            {c.features.map(([title, text], i) => (
              <div className="feature-card" key={title}>
                <Icon>{FEATURE_ICONS[i]}</Icon>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prayer Section */}
        <section className="prayer-section" id="prayer">
          <div className="prayer-summary">
            <div className="prayer-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V21h8v-6.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 16H9v-1h2v1zm4 0h-2v-1h2v1zm-5-3v-1h6v1H10zm5-3H9V9h6v3z" />
              </svg>
              <span>{prayer.badge}</span>
            </div>
            <h2>{prayer.title}</h2>
            <p>{prayer.intro}</p>

            <div className="prayer-features">
              {prayer.features.map((feature, i) => (
                <div className="prayer-feature" key={feature}>
                  <span className="prayer-feature-icon">{PRAYER_ICONS[i]}</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-secondary prayer-link"
              aria-expanded={prayerOpen}
              aria-controls="prayer-details"
              onClick={() => setPrayerOpen((open) => !open)}
            >
              {prayerOpen ? c.prayerLess : c.prayerMore}
              <svg className={`chevron${prayerOpen ? " open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {prayerOpen && (
            <div className="prayer-layout prayer-details" id="prayer-details">
              <PrayerSteps content={prayer} />

              <div className="phone-mockup prayer-phone" aria-hidden="true">
                <div className="phone-frame">
                  <div className="phone-screen app-screen">
                    <div className="app-bar">
                      <span className="app-back">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 12H5M11 18l-6-6 6-6" />
                        </svg>
                      </span>
                      <span className="app-bar-title">{prayer.mockup.title}</span>
                    </div>

                    <div className="app-label">{prayer.mockup.source}</div>
                    <div className="app-sources">
                      <div className="app-source on">
                        <span className="app-source-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                          </svg>
                        </span>
                        <strong>{prayer.mockup.geo}</strong>
                        <small>{prayer.mockup.geoSub}</small>
                      </div>
                      <div className="app-source">
                        <span className="app-source-icon">🕌</span>
                        <strong>{prayer.mockup.mawaqit}</strong>
                        <small>{prayer.mockup.mawaqitSub}</small>
                      </div>
                    </div>

                    <div className="app-label">{prayer.mockup.location}</div>
                    <div className="app-row">📍 {prayer.mockup.place}</div>

                    <div className="app-label">{prayer.mockup.alarms}</div>
                    <div className="app-alarms">
                      {prayer.mockup.names.map((name, i) => (
                        <div className="app-alarm" key={name}>
                          <span className="app-alarm-name">
                            {name}
                            {name !== ARABIC_PRAYERS[i] && <small>{ARABIC_PRAYERS[i]}</small>}
                          </span>
                          <span className="app-alarm-time">{PRAYER_TIMES[i]}</span>
                          <span className={`app-bell${PRAYER_ALARMS[i] ? " on" : ""}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" />
                              {!PRAYER_ALARMS[i] && <path d="M3 3l18 18" />}
                            </svg>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="app-save">{prayer.mockup.save}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Data Section */}
        <section className="algorithm-section" id="data">
          <div className="section-header">
            <h2 className="section-title">{c.dataTitle}</h2>
          </div>

          <div className="algorithm-content">
            <div className="algorithm-result">
              <p>{rich(c.dataText)}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="download">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaStart}</p>
          <p>{c.ctaText}</p>

          <div className="store-badges">
            <a
              href="https://play.google.com/store/apps/details?id=com.pactence.wheel_habits"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={c.badge} alt={c.badgeAlt} className="store-badge" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
