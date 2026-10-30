import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./App";

/// The HTML of the page at [url], in English. Used at build time so that
/// robots that do not run JavaScript, such as Google Play's policy check,
/// still read the page.
export const render = (url) =>
  renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
