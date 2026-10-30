import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DeleteAccount from "./pages/DeleteAccount";
import PrayerTimes from "./pages/PrayerTimes";
import { LanguageProvider } from "./i18n/LanguageProvider";
import ScrollToTop from "./components/ScrollToTop";

// The pages, also rendered ahead of time by src/prerender.jsx.
export const AppRoutes = () => (
  <LanguageProvider>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
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
