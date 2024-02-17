import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DarkMode from "./pages/DarkMode";
import RegistrationFormDarkMode from "./pages/RegistrationFormDarkMode";
import DarkModeEventRules from "./pages/DarkModeEventRules";
import DarkModeSignUp from "./pages/DarkModeSignUp";
import DarkModeSigninPage from "./pages/DarkModeSigninPage";
import DarkModeSeeMoreEvents from "./pages/DarkModeSeeMoreEvents";
import DarkModeGallery from "./pages/DarkModeGallery";
import SplashScreenCommonForBoth from "./pages/SplashScreenCommonForBoth";
import DarkModeContactUsRedirect from "./pages/DarkModeContactUsRedirect";
import ErrorPageDarkMode from "./pages/ErrorPageDarkMode";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registration-form-dark-mode":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode-event-rules":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode-sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode-signin-page":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode-see-more-events":
        title = "";
        metaDescription = "";
        break;
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen-common-for-both-dark-and-light":
        title = "";
        metaDescription = "";
        break;
      case "/dark-mode-contact-us-redirect-page":
        title = "";
        metaDescription = "";
        break;
      case "/error-page-dark-mode":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DarkMode />} />
      <Route
        path="/registration-form-dark-mode"
        element={<RegistrationFormDarkMode />}
      />
      <Route path="/dark-mode-event-rules" element={<DarkModeEventRules />} />
      <Route path="/dark-mode-sign-up" element={<DarkModeSignUp />} />
      <Route path="/dark-mode-signin-page" element={<DarkModeSigninPage />} />
      <Route
        path="/dark-mode-see-more-events"
        element={<DarkModeSeeMoreEvents />}
      />
      <Route path="/gallery" element={<DarkModeGallery />} />
      <Route
        path="/splash-screen-common-for-both-dark-and-light"
        element={<SplashScreenCommonForBoth />}
      />
      <Route
        path="/dark-mode-contact-us-redirect-page"
        element={<DarkModeContactUsRedirect />}
      />
      <Route path="/error-page-dark-mode" element={<ErrorPageDarkMode />} />
    </Routes>
  );
}
export default App;
