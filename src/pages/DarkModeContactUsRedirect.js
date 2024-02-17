import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DarkModeContactUsRedirect.css";

const DarkModeContactUsRedirect = () => {
  const navigate = useNavigate();

  const onGetInTouchClick = useCallback(() => {
    navigate("/error-page-dark-mode");
  }, [navigate]);

  const onGalleryClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onEventsClick = useCallback(() => {
    navigate("/dark-mode-see-more-events");
  }, [navigate]);

  const onGroupLinkClick = useCallback(() => {
    navigate("/dark-mode-sign-up");
  }, [navigate]);

  const onSignInClick = useCallback(() => {
    navigate("/dark-mode-signin-page");
  }, [navigate]);

  return (
    <div className="dark-mode-contact-us-redirect">
      <div className="contact-us-redirect-page">
        <div className="contact-us-redirect-page-child" />
        <div className="contact-us-redirect-page-item" />
        <div className="contact-us-redirect-page-inner" />
        <div className="get-in-touch-container" onClick={onGetInTouchClick}>
          <p className="get-in-touch">Get in Touch</p>
          <p className="want-to-get">{`Want to get in touch? We’d love to here from you. `}</p>
          <p className="want-to-get">Here is how you can reach us.</p>
        </div>
        <div className="call-us">
          <div className="contact-us1">Contact Us</div>
          <img
            className="ringer-volume-icon"
            alt=""
            src="/ringer-volume@2x.png"
          />
        </div>
        <div className="mail-us">
          <div className="mail-us1">Mail us</div>
          <img className="gmail-logo-icon" alt="" src="/gmail-logo@2x.png" />
        </div>
        <img
          className="pencil-robot-icon6"
          alt=""
          src="/146c251888f38c78d18b5548c75e24f2removebgpreview-1@2x.png"
        />
        <div className="copyright-technova1">@Copyright - Technova 2024</div>
        <nav className="nav4">
          <nav className="nav-elements4">
            <div className="nav-elements-item" />
            <Link className="home4" to="/">
              Home
            </Link>
            <a className="gallery5" onClick={onGalleryClick}>
              Gallery
            </a>
            <Link
              className="events2"
              to="/dark-mode-see-more-events"
              onClick={onEventsClick}
            >
              Events
            </Link>
          </nav>
          <div className="group-parent2">
            <a className="vector-parent1" onClick={onGroupLinkClick}>
              <img className="group-child4" alt="" src="/rectangle-12.svg" />
              <div className="sign-up8">Sign up</div>
            </a>
            <a className="sign-in6" onClick={onSignInClick}>
              Sign in
            </a>
          </div>
          <img
            className="dcrust-logo-1-icon4"
            alt=""
            src="/dcrust-logo-1@2x.png"
          />
          <div className="toggle-button2">
            <div className="toggle-button-child1" />
            <div className="toggle-button-child2" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DarkModeContactUsRedirect;
