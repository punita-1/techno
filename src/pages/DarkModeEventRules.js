import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./DarkModeEventRules.css";

const DarkModeEventRules = () => {
  const navigate = useNavigate();

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open("https://facebook");
  }, []);

  const onGalleryClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/dark-mode-sign-up");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/dark-mode-signin-page");
  }, [navigate]);

  const onRegisterNowButtonClick = useCallback(() => {
    navigate("/dark-mode-see-more-events");
  }, [navigate]);

  return (
    <div className="dark-mode-event-rules">
      <div className="registernow-phase1-rules">
        <img className="pencil-robot-icon1" alt="" src="/pencil-robot@2x.png" />
        <div className="coordinator">Coordinator</div>
        <div className="co-cordinator">Co-cordinator</div>
        <b className="event">Event:</b>
        <b className="rules">Rules:</b>
        <nav className="nav1">
          <nav className="nav-elements1">
            <div className="nav-elements-child" />
            <Link className="home1" to="/">
              Home
            </Link>
            <a className="gallery1" onClick={onGalleryClick}>
              Gallery
            </a>
            <Link className="contact1" to="/dark-mode-contact-us-redirect-page">
              Contact
            </Link>
          </nav>
          <div className="group-container">
            <a className="vector-group" onClick={onGroupLinkClick}>
              <img className="group-item" alt="" src="/rectangle-12.svg" />
              <Link className="sign-up1" to="/dark-mode-sign-up">
                Sign up
              </Link>
            </a>
            <a className="sign-in1" onClick={onSignInClick}>
              Sign in
            </a>
          </div>
          <img
            className="dcrust-logo-1-icon1"
            alt=""
            src="/dcrust-logo-1@2x.png"
          />
          <Link
            className="register-now-button2"
            to="/dark-mode-see-more-events"
            onClick={onRegisterNowButtonClick}
          >
            <div className="register-now-button-inner" />
            <b className="visit-gallery2">Back</b>
          </Link>
        </nav>
        <Footer
          dimensionsText="/linkedin@2x.png"
          titleTop="2058px"
          onTwitterXImageClick={onTwitterXImageClick}
          onFacebookImageClick={onFacebookImageClick}
        />
      </div>
    </div>
  );
};

export default DarkModeEventRules;
