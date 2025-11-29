import { Link } from "react-router-dom";

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

export const Footer = () => (
  <>
    <footer>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <a href="mailto:pactence@tutamail.com">Contact</a>
      </div>
      <p className="copyright">© 2025 Wheel Habits.</p>
    </footer>

    <a
      href="https://buymeacoffee.com/pactence"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-coffee"
    >
      ☕ Buy me a coffee
    </a>
  </>
);

export const LegalHeader = () => (
  <header className="legal-header">
    <div className="legal-header-content">
      <Link to="/" className="logo-link">
        <WheelIcon />
        Wheel Habits
      </Link>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  </header>
);

export const LegalFooter = () => (
  <footer>
    <div className="footer-links">
      <Link to="/">Home</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-of-service">Terms of Service</Link>
    </div>
    <p className="copyright">© 2025 Wheel Habits. All rights reserved.</p>
  </footer>
);
