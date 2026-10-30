// Writes dist/<page>/index.html with the page's text already in the HTML.
// Vercel serves these files before the rewrite to index.html, so Google
// Play's policy check sees the text without running JavaScript. In the
// browser, React then draws the page in the visitor's language.
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import { PAGE_TITLES, pageTitle } from "../src/pageTitles.js";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});
try {
  const { render } = await vite.ssrLoadModule("/src/prerender.jsx");
  const template = fs.readFileSync("dist/index.html", "utf8");
  for (const url of Object.keys(PAGE_TITLES)) {
    const html = template
      .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${pageTitle(url)}</title>`);
    // page.html for Vercel's clean URLs (/page), page/index.html for /page/.
    fs.writeFileSync(path.join("dist", `${url}.html`), html);
    const file = path.join("dist", url, "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`prerendered ${url}`);
  }
  // The home page last: the other pages are built from the empty index.html.
  const home = template.replace('<div id="root"></div>', `<div id="root">${render("/")}</div>`);
  fs.writeFileSync(path.join("dist", "index.html"), home);
  console.log("prerendered /");
} finally {
  await vite.close();
}
