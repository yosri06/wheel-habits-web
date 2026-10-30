// Browser tab titles, shared by the app and the build-time prerender.
export const HOME_TITLE = "Wheel Habits — Spin Your Way to Better Days";

export const PAGE_TITLES = {
  "/privacy-policy": "Privacy Policy",
  "/delete-account": "Delete Your Account",
  "/terms-of-service": "Terms of Service",
  "/prayer-times": "Prayer Times",
};

/// The tab title for [pathname].
/// A final slash is ignored: /privacy-policy/ is /privacy-policy.
export const pageTitle = (pathname) => {
  const page = PAGE_TITLES[pathname.replace(/(.)\/+$/, "$1")];
  return page ? `${page} · Wheel Habits` : HOME_TITLE;
};
