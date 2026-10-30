import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { pageLinks, pageMeta } from "../seo";

const addLink = (attributes) => {
  const link = document.createElement("link");
  Object.entries(attributes).forEach(([name, value]) => link.setAttribute(name, value));
  document.head.append(link);
};

// Runs [scroll] once fonts and translated texts give the page its final
// height. Returns a function that cancels it.
const afterLayout = (scroll) => {
  let active = true;
  document.fonts.ready.then(() =>
    requestAnimationFrame(() => {
      if (active) scroll();
    })
  );
  return () => {
    active = false;
  };
};

// An entry of the history. A page opened directly has no key of its own
// ("default"), so it gets an id kept in its history state, which survives a
// reload and back or forward.
const ENTRY_ID = "scrollEntry";

const historyEntry = ({ key }) => {
  if (key !== "default") return key;
  const state = window.history.state ?? {};
  if (!state[ENTRY_ID]) {
    const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
    window.history.replaceState({ ...state, [ENTRY_ID]: id }, "");
  }
  return window.history.state[ENTRY_ID];
};

// Scroll position of each visited entry of the history: in memory, and kept
// for the tab when storage is allowed, so that it survives a reload.
const STORAGE_PREFIX = "scroll:";
const positions = new Map();

const savePosition = (entry, top) => {
  positions.set(entry, top);
  try {
    sessionStorage.setItem(STORAGE_PREFIX + entry, String(top));
  } catch {
    // Then kept in memory only, until a reload.
  }
};

const savedPosition = (entry) => {
  if (positions.has(entry)) return positions.get(entry);
  try {
    return Number(sessionStorage.getItem(STORAGE_PREFIX + entry)) || 0;
  } catch {
    return 0;
  }
};

// Whether the browser reloaded this document or reached it with back or
// forward, rather than opening it.
const documentRestored = () => {
  const type = performance.getEntriesByType?.("navigation")[0]?.type;
  return type === "reload" || type === "back_forward";
};

/// Updates the page after each navigation. Pages are drawn without
/// reloading, so the browser would otherwise keep the title, description,
/// links for search engines and scroll of the previous page.
const ScrollToTop = () => {
  const location = useLocation();
  const { pathname, hash, state } = location;
  const navigationType = useNavigationType();
  const previousLocation = useRef(null);
  const currentEntry = useRef(null);

  useEffect(() => {
    const { title, description } = pageMeta(pathname);
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);

    document.head
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]')
      .forEach((link) => link.remove());
    // A missing page asks search engines not to index it, as 404.html does.
    document.head.querySelector('meta[name="robots"]')?.remove();
    const links = pageLinks(pathname);
    if (links) {
      addLink({ rel: "canonical", href: links.canonical });
      links.alternates.forEach(({ hreflang, href }) =>
        addLink({ rel: "alternate", hreflang, href })
      );
    } else {
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex";
      document.head.append(robots);
    }
  }, [pathname]);

  // The browser would restore the scroll before the page is drawn, so too
  // early: the app does it instead.
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const save = () => {
      if (currentEntry.current) savePosition(currentEntry.current, window.scrollY);
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, []);

  // Before the browser reports any scroll of the new page.
  useLayoutEffect(() => {
    currentEntry.current = historyEntry(location);
  }, [location]);

  useEffect(() => {
    // Back, forward, or a reload. The page loaded first also counts as a
    // return in the router, so the browser tells how it was reached. The
    // effect can run twice for it in development, hence the same location.
    const first =
      previousLocation.current === null || previousLocation.current === location;
    const returning = navigationType === "POP" && (!first || documentRestored());
    previousLocation.current = location;

    if (returning) {
      const top = savedPosition(currentEntry.current);
      return afterLayout(() => window.scrollTo({ top, behavior: "instant" }));
    }
    // A change of language: the visitor stays where they are reading.
    if (state?.keepScroll) return undefined;
    // A link such as /#data opens on its section.
    if (hash) {
      return afterLayout(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    return undefined;
  }, [location, hash, state, navigationType]);

  return null;
};

export default ScrollToTop;
