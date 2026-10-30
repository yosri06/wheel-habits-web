import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageLinks, pageMeta } from "../seo";

const addLink = (attributes) => {
  const link = document.createElement("link");
  Object.entries(attributes).forEach(([name, value]) => link.setAttribute(name, value));
  document.head.append(link);
};

/// A new page opens at its top, with its own title, description and links
/// for search engines. Pages are drawn without reloading, so the browser
/// would otherwise keep those of the previous page. Links to a section
/// (/#data) are left to the page.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

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

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
