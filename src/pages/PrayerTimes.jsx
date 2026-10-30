import { LegalHeader, LegalFooter } from "../components/Common";
import { useContent } from "../i18n/context";
import PrayerSteps from "../components/PrayerSteps";
import { PRAYER } from "../content/prayer";

const FEATURE_ICONS = ["🔔", "🌅", "🕌"];

const PrayerTimes = () => {
  const c = useContent(PRAYER);
  return (
    <>
      <LegalHeader />

      <main className="prayer-section prayer-page">
        <div className="prayer-badge">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V21h8v-6.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 16H9v-1h2v1zm4 0h-2v-1h2v1zm-5-3v-1h6v1H10zm5-3H9V9h6v3z" />
          </svg>
          <span>{c.badge}</span>
        </div>
        <h1>{c.title}</h1>
        <p>{c.intro}</p>

        <PrayerSteps content={c} level={2} />

        <div className="prayer-setup">
          <div className="prayer-features">
            {c.features.map((feature, i) => (
              <div className="prayer-feature" key={feature}>
                <span className="prayer-feature-icon">{FEATURE_ICONS[i]}</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: "2rem", fontSize: "0.95rem" }}>{c.sourceLabel}</p>
        <a href="https://mawaqit.net" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.mawaqit.net/images/logos/mawaqit_logo_light_rounded.png"
            alt="Mawaqit"
            className="mawaqit-logo"
          />
        </a>
      </main>

      <LegalFooter />
    </>
  );
};

export default PrayerTimes;
