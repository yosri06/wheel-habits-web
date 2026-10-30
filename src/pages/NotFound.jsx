import { LegalHeader, LegalFooter } from "../components/Common";
import { LangLink } from "../i18n/LanguageProvider";
import { useContent } from "../i18n/context";
import { COMMON } from "../content/common";

/// Shown for an address without a page, in the language of its prefix.
const NotFound = () => {
  const c = useContent(COMMON);
  return (
    <>
      <LegalHeader />

      <main className="legal-content not-found">
        <h1>{c.notFoundTitle}</h1>
        <p>{c.notFoundText}</p>
        <LangLink to="/" className="btn btn-primary">
          {c.home}
        </LangLink>
      </main>

      <LegalFooter />
    </>
  );
};

export default NotFound;
