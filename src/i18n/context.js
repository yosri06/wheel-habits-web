import { createContext, useContext } from "react";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية", rtl: true },
];

export const STORAGE_KEY = "lang";

// The saved choice, else the browser's language, else English.
export const initialLanguage = () => {
  // Pages built ahead of time are in English.
  if (typeof window === "undefined") return "en";
  const codes = LANGUAGES.map((l) => l.code);
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (codes.includes(saved)) return saved;
  } catch {
    // Storage can be blocked: fall back to the browser's language.
  }
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return codes.includes(browser) ? browser : "en";
};

export const LanguageContext = createContext({ lang: "en", setLang: () => {} });

export const useLang = () => useContext(LanguageContext).lang;

/// The texts of [content] in the current language, English when missing.
export const useContent = (content) => ({ ...content.en, ...content[useLang()] });
