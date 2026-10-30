import { createContext, useContext } from "react";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية", rtl: true },
];

// English pages have no prefix: /privacy-policy, /fr/privacy-policy.
export const DEFAULT_LANGUAGE = "en";

export const STORAGE_KEY = "lang";

const CODES = LANGUAGES.map((l) => l.code);

/// [pathname] as the site writes it: lowercase, without a final slash.
/// /FR/Privacy-Policy/ is /fr/privacy-policy.
export const normalizePath = (pathname) =>
  pathname.toLowerCase().replace(/(.)\/+$/, "$1");

/// The language of [pathname], from its first segment (/fr/...).
export const langFromPath = (pathname) => {
  const first = normalizePath(pathname).split("/")[1];
  return CODES.includes(first) ? first : DEFAULT_LANGUAGE;
};

/// [pathname] normalized and without its language: /fr/privacy-policy is
/// /privacy-policy.
export const stripLang = (pathname) => {
  const path = normalizePath(pathname);
  const lang = langFromPath(path);
  if (lang === DEFAULT_LANGUAGE) return path;
  return path.slice(lang.length + 1) || "/";
};

/// The address of the page [path] in [lang].
export const localizedPath = (path, lang) => {
  if (lang === DEFAULT_LANGUAGE) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
};

/// The language the visitor chose before, else the browser's, else English.
export const preferredLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (CODES.includes(saved)) return saved;
  } catch {
    // Storage can be blocked: fall back to the browser's language.
  }
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return CODES.includes(browser) ? browser : DEFAULT_LANGUAGE;
};

export const LanguageContext = createContext({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
});

export const useLang = () => useContext(LanguageContext).lang;

/// The texts of [content] in the current language, English when missing.
export const useContent = (content) => ({ ...content.en, ...content[useLang()] });
