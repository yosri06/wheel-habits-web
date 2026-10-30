import { LegalHeader, LegalFooter } from "./Common";
import { rich } from "../i18n/rich";

/// A legal page from translated content. Each section holds blocks:
/// { h3 }, { p }, { ul: [...] } or { ol: [...] }. Texts accept **bold**
/// and [label](href).
const LegalPage = ({ content }) => (
  <>
    <LegalHeader />

    <main className="legal-content">
      <h1>{content.title}</h1>
      {content.updated && <p className="last-updated">{content.updated}</p>}

      {content.summary && (
        <div className="highlight-box">
          <p>{rich(content.summary)}</p>
        </div>
      )}

      {content.sections.map((section) => (
        <section key={section.h2}>
          <h2>{section.h2}</h2>
          {section.blocks.map((block, i) => {
            if (block.h3) return <h3 key={i}>{block.h3}</h3>;
            if (block.ul)
              return (
                <ul key={i}>
                  {block.ul.map((item) => (
                    <li key={item}>{rich(item)}</li>
                  ))}
                </ul>
              );
            if (block.ol)
              return (
                <ol key={i}>
                  {block.ol.map((item) => (
                    <li key={item}>{rich(item)}</li>
                  ))}
                </ol>
              );
            return <p key={i}>{rich(block.p)}</p>;
          })}
        </section>
      ))}
    </main>

    <LegalFooter />
  </>
);

export default LegalPage;
