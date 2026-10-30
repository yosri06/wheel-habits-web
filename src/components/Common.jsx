import { LangLink, LanguageSwitcher } from "../i18n/LanguageProvider";
import { useContent } from "../i18n/context";
import { COMMON } from "../content/common";
import ThemeSwitcher from "./ThemeSwitcher";

export const WheelIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#FFB300" strokeWidth="4" strokeLinecap="round" fill="none">
      <line x1="8" y1="72" x2="32" y2="72" />
      <line x1="12" y1="64" x2="36" y2="64" />
      <line x1="16" y1="56" x2="34" y2="56" />
    </g>

    <g className="wheel-rotating-part">
      <circle
        cx="62"
        cy="50"
        r="32"
        fill="none"
        stroke="#11375F"
        strokeWidth="8"
      />

      <circle
        cx="62"
        cy="50"
        r="20"
        fill="none"
        stroke="#FFB300"
        strokeWidth="6"
      />

      <circle cx="62" cy="50" r="5" fill="#FFB300" />

      <g stroke="#FFB300" strokeWidth="4" strokeLinecap="round">
        <line x1="62" y1="30" x2="62" y2="45" />
        <line x1="62" y1="55" x2="62" y2="70" />
        <line x1="42" y1="50" x2="57" y2="50" />
        <line x1="67" y1="50" x2="82" y2="50" />
        <line x1="48" y1="36" x2="57" y2="45" />
        <line x1="67" y1="55" x2="76" y2="64" />
        <line x1="48" y1="64" x2="57" y2="55" />
        <line x1="67" y1="45" x2="76" y2="36" />
      </g>
    </g>
  </svg>
);

export const Footer = () => {
  const c = useContent(COMMON);
  return (
    <footer>
      <div className="footer-links">
        <LangLink to="/privacy-policy">{c.privacy}</LangLink>
        <LangLink to="/terms-of-service">{c.terms}</LangLink>
        <LangLink to="/delete-account">{c.deleteAccount}</LangLink>
        <a href="mailto:pactence@tutamail.com">{c.contact}</a>
      </div>
      <LanguageSwitcher className="footer-language" />
      <p className="copyright">© 2026 Wheel Habits.</p>
    </footer>
  );
};

export const LegalHeader = () => {
  const c = useContent(COMMON);
  return (
    <header className="legal-header">
      <div className="legal-header-content">
        <LangLink to="/" className="logo-link">
          <WheelIcon />
          Wheel Habits
        </LangLink>
        <div className="legal-header-actions">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <LangLink to="/" className="back-link">
            {c.back}
          </LangLink>
        </div>
      </div>
    </header>
  );
};

export const LegalFooter = () => {
  const c = useContent(COMMON);
  return (
    <footer>
      <div className="footer-links">
        <LangLink to="/">{c.home}</LangLink>
        <LangLink to="/privacy-policy">{c.privacy}</LangLink>
        <LangLink to="/terms-of-service">{c.terms}</LangLink>
        <LangLink to="/delete-account">{c.deleteAccount}</LangLink>
        <a href="mailto:pactence@tutamail.com">{c.contact}</a>
      </div>
      <p className="copyright">© 2026 Wheel Habits. {c.rights}</p>
    </footer>
  );
};
