import { useContext, useEffect, useState } from "react";
import {
  LANGUAGES,
  LanguageContext,
  STORAGE_KEY,
  initialLanguage,
  useContent,
} from "./context";
import { COMMON } from "../content/common";

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(initialLanguage);

  useEffect(() => {
    const rtl = LANGUAGES.find((l) => l.code === lang)?.rtl;
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (code) => {
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // The choice then lasts for this visit only.
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

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
