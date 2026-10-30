import { rich } from "../i18n/rich";

/// The setup steps of prayer times, from PRAYER[lang]. [level] is the
/// heading level of the title, so that it follows the page's outline.
const PrayerSteps = ({ content, level = 3 }) => {
  const Title = `h${level}`;
  const StepTitle = `h${level + 1}`;
  return (
    <div className="prayer-setup">
      <Title className="setup-title">{content.setupTitle}</Title>
      <div className="setup-steps">
        {content.steps.map(([title, paragraphs], i) => (
          <div className="setup-step" key={title}>
            <div className="step-number">{i + 1}</div>
            <div className="step-content">
              <StepTitle className="step-title">{title}</StepTitle>
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
};

export default PrayerSteps;
