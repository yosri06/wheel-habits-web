import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageTitle } from "../pageTitles";

/// A new page opens at its top, with its own tab title. Pages are drawn
/// without reloading, so the browser would otherwise keep the scroll and
/// title of the previous page. Links to a section (/#data) are left to the
/// page.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
