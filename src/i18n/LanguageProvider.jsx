import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  LanguageContext,
  STORAGE_KEY,
  langFromPath,
  localizedPath,
  normalizePath,
  preferredLanguage,
  stripLang,
  useContent,
  useLang,
} from "./context";
import { COMMON } from "../content/common";

/// The language comes from the address, so that search engines find each
/// language at its own URL.
export const LanguageProvider = ({ children }) => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(pathname);

  useEffect(() => {
    const rtl = LANGUAGES.find((l) => l.code === lang)?.rtl;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang]);

  // On arrival, normalize the address and apply the saved or browser language
  // preference to default-language URLs. Later navigation follows the user's
  // explicit language choices.
  useEffect(() => {
    const preferred = preferredLanguage();
    let target = normalizePath(pathname);
    if (lang === DEFAULT_LANGUAGE && preferred !== DEFAULT_LANGUAGE) {
      target = localizedPath(target, preferred);
    }
    if (target !== pathname) {
      navigate(target + search + hash, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (code) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // The choice then lasts for this visit only.
    }
    // The visitor stays where they are reading: see ScrollToTop.
    navigate(localizedPath(stripLang(pathname), code) + search + hash, {
      state: { keepScroll: true },
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

/// A link to the page [to] of the site, in the current language.
export const LangLink = ({ to, ...props }) => (
  <Link to={localizedPath(to, useLang())} {...props} />
);

export const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useContext(LanguageContext);
  const c = useContent(COMMON);
  return (
    <select
      className={`language-switcher ${className}`}
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      aria-label={c.language}
    >
      {LANGUAGES.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
};
