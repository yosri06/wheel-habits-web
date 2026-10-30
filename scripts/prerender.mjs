// Writes dist/<page>/index.html for each page in each language, with the
// page's text, title, description and language links already in the HTML.
// Vercel serves these files directly, so search engines and Google Play's
// policy check read them without running JavaScript. Also writes
// dist/404.html, for any other address, and dist/sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

try {
  const { render } = await vite.ssrLoadModule("/src/prerender.jsx");
  const { PAGE_PATHS, pageLinks, pageMeta } = await vite.ssrLoadModule("/src/seo.js");
  const { LANGUAGES, langFromPath, localizedPath } = await vite.ssrLoadModule(
    "/src/i18n/context.js"
  );
  const template = fs.readFileSync("dist/index.html", "utf8");

  // The HTML of the page at [url], with [headTags] added to its <head>.
  const pageHtml = (url, headTags) => {
    const lang = langFromPath(url);
    const rtl = LANGUAGES.find((l) => l.code === lang).rtl;
    const { title, description } = pageMeta(url);
    return template
      .replace('<html lang="en">', `<html lang="${lang}" dir="${rtl ? "rtl" : "ltr"}">`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${escape(description)}" />`
      )
      .replace("</head>", `  ${headTags.join("\n  ")}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  };

  for (const page of PAGE_PATHS) {
    for (const { code } of LANGUAGES) {
      const url = localizedPath(page, code);
      const { canonical, alternates } = pageLinks(url);
      const html = pageHtml(url, [
        `<link rel="canonical" href="${canonical}" />`,
        ...alternates.map(
          ({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`
        ),
      ]);

      if (url === "/") {
        fs.writeFileSync(path.join("dist", "index.html"), html);
      } else {
        // page.html for Vercel's clean URLs (/page), page/index.html for /page/.
        fs.writeFileSync(path.join("dist", `${url}.html`), html);
        const file = path.join("dist", url, "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
      console.log(`prerendered ${url}`);
    }
  }

  // In the browser, the app then shows the page not found in the language
  // of the address.
  fs.writeFileSync(
    path.join("dist", "404.html"),
    pageHtml("/404", ['<meta name="robots" content="noindex" />'])
  );
  console.log("prerendered 404.html");

  const entries = PAGE_PATHS.flatMap((page) =>
    LANGUAGES.map(({ code }) => {
      const { canonical, alternates } = pageLinks(localizedPath(page, code));
      const links = alternates
        .map(
          ({ hreflang, href }) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`
        )
        .join("\n");
      return `  <url>\n    <loc>${canonical}</loc>\n${links}\n  </url>`;
    })
  );
  fs.writeFileSync(
    path.join("dist", "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`
  );
  console.log("wrote sitemap.xml");
} finally {
  await vite.close();
}
