import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DeleteAccount from "./pages/DeleteAccount";
import PrayerTimes from "./pages/PrayerTimes";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { LANGUAGES, localizedPath } from "./i18n/context";
import ScrollToTop from "./components/ScrollToTop";

const PAGES = [
  ["/", <Home />],
  ["/privacy-policy", <PrivacyPolicy />],
  ["/terms-of-service", <TermsOfService />],
  ["/delete-account", <DeleteAccount />],
  ["/prayer-times", <PrayerTimes />],
];

// Each page in each language (/privacy-policy, /fr/privacy-policy...), then
// a "not found" page for any other address. Also rendered ahead of time by
// src/prerender.jsx.
export const AppRoutes = () => (
  <LanguageProvider>
    <ScrollToTop />
    <Routes>
      {LANGUAGES.flatMap(({ code }) =>
        PAGES.map(([path, element]) => {
          const url = localizedPath(path, code);
          return <Route key={url} path={url} element={element} />;
        })
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LanguageProvider>
);

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
