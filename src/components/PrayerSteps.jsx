import { rich } from "../i18n/rich";

/// The setup steps of prayer times, from PRAYER[lang].
const PrayerSteps = ({ content }) => (
  <div className="prayer-setup">
    <h3>{content.setupTitle}</h3>
    <div className="setup-steps">
      {content.steps.map(([title, paragraphs], i) => (
        <div className="setup-step" key={title}>
          <div className="step-number">{i + 1}</div>
          <div className="step-content">
            <h4>{title}</h4>
            {paragraphs.map((text) => (
              <p key={text}>{rich(text)}</p>
            ))}
            {i === 1 && (
              <div className="step-example">
                <code>mawaqit.net/en/grande-mosquee-de-paris</code>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PrayerSteps;
