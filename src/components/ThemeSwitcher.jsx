import { useEffect, useState } from "react";
import { useContent } from "../i18n/context";
import { COMMON } from "../content/common";

const STORAGE_KEY = "theme";

const systemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";

const savedTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

/// Switches between the light and dark themes. Without a choice, the page
/// follows the system; index.html applies a saved choice before drawing.
const ThemeSwitcher = () => {
  const c = useContent(COMMON);
  const [theme, setTheme] = useState(() => savedTheme() ?? systemTheme());

  // Without a saved choice, the page follows system changes: so does the
  // button, so that one click always switches the theme shown.
  useEffect(() => {
    const query = window.matchMedia?.("(prefers-color-scheme: light)");
    if (!query) return undefined;
    const follow = (event) => {
      if (!savedTheme()) setTheme(event.matches ? "light" : "dark");
    };
    query.addEventListener("change", follow);
    return () => query.removeEventListener("change", follow);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice then lasts for this visit only.
    }
  };

  return (
    <button
      type="button"
      className="theme-switcher"
      onClick={toggle}
      aria-label={theme === "dark" ? c.lightTheme : c.darkTheme}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
