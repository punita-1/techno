import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./DarkModeGallery.css";

const DarkModeGallery = () => {
  const navigate = useNavigate();

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open("https://facebook");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

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
    <div className="dark-mode-gallery">
      <div className="gallery3">
        <div className="group-gallery-pics">
          <img
            className="save-20240213-174723-1-icon"
            alt=""
            src="/save-20240213-174723-1@2x.png"
          />
          <img
            className="save-20240213-174745-1-icon"
            alt=""
            src="/save-20240213-174745-1@2x.png"
          />
          <img
            className="save-20240213-174737-1-icon"
            alt=""
            src="/save-20240213-174737-1@2x.png"
          />
          <img
            className="save-20240213-174814-1-icon"
            alt=""
            src="/save-20240213-174814-1@2x.png"
          />
          <img
            className="save-20240213-174821-2-icon"
            alt=""
            src="/save-20240213-174821-2@2x.png"
          />
          <img
            className="save-20240213-174838-1-icon"
            alt=""
            src="/save-20240213-174838-1@2x.png"
          />
          <img
            className="save-20240213-174844-1-icon"
            alt=""
            src="/save-20240213-174844-1@2x.png"
          />
          <img
            className="save-20240213-174855-1-icon"
            alt=""
            src="/save-20240213-174855-1@2x.png"
          />
          <img
            className="save-20240213-174930-1-icon"
            alt=""
            src="/save-20240213-174930-1@2x.png"
          />
          <img
            className="save-20240213-174936-2-icon"
            alt=""
            src="/save-20240213-174936-2@2x.png"
          />
          <img
            className="save-20240213-175013-1-icon"
            alt=""
            src="/save-20240213-175013-1@2x.png"
          />
          <img
            className="save-20240213-175013-2-icon"
            alt=""
            src="/save-20240213-175013-2@2x.png"
          />
          <img
            className="save-20240213-174943-2-icon"
            alt=""
            src="/save-20240213-174943-2@2x.png"
          />
          <img
            className="save-20240213-175033-1-icon"
            alt=""
            src="/save-20240213-175033-1@2x.png"
          />
          <img
            className="library-clouds-image-icon"
            alt=""
            src="/library-clouds-image@2x.png"
          />
          <img
            className="save-20240213-174849-1-icon"
            alt=""
            src="/save-20240213-174849-1@2x.png"
          />
          <img
            className="save-20240213-175023-1-icon"
            alt=""
            src="/save-20240213-175023-1@2x.png"
          />
          <img className="mv-block-icon" alt="" src="/mv-block@2x.png" />
          <img
            className="save-20240213-174808-1-icon"
            alt=""
            src="/save-20240213-174808-1@2x.png"
          />
          <img
            className="save-20240213-175002-1-icon"
            alt=""
            src="/save-20240213-175002-1@2x.png"
          />
          <img
            className="save-20240213-174800-1-icon"
            alt=""
            src="/save-20240213-174800-1@2x.png"
          />
          <img
            className="save-20240213-174700-1-icon"
            alt=""
            src="/save-20240213-174700-1@2x.png"
          />
          <img
            className="save-20240213-174902-1-icon"
            alt=""
            src="/save-20240213-174902-1@2x.png"
          />
          <img
            className="save-20240213-174918-1-icon"
            alt=""
            src="/save-20240213-174918-1@2x.png"
          />
          <img
            className="save-20240213-174925-1-icon"
            alt=""
            src="/save-20240213-174925-1@2x.png"
          />
          <img
            className="save-20240213-175007-1-icon"
            alt=""
            src="/save-20240213-175007-1@2x.png"
          />
          <img
            className="wide-view-cool-icon"
            alt=""
            src="/wide-view-cool@2x.png"
            data-animate-on-scroll
          />
          <img
            className="save-20240213-175040-1-icon"
            alt=""
            src="/save-20240213-175040-1@2x.png"
          />
          <img
            className="save-20240213-174910-1-icon"
            alt=""
            src="/save-20240213-174910-1@2x.png"
          />
          <img
            className="save-20240213-174752-1-icon"
            alt=""
            src="/save-20240213-174752-1@2x.png"
          />
          <img
            className="save-20240213-174831-1-icon"
            alt=""
            src="/save-20240213-174831-1@2x.png"
          />
          <img
            className="day-cloud-image-library-wide-v-icon"
            alt=""
            src="/day-cloud-image-library-wide-view@2x.png"
            data-animate-on-scroll
          />
          <img
            className="audi-mv-night-icon"
            alt=""
            src="/audi-mv-night@2x.png"
          />
          <img
            className="auditorium-night-icon"
            alt=""
            src="/auditorium-night@2x.png"
            data-animate-on-scroll
          />
          <img
            className="night-saraswati-library-icon"
            alt=""
            src="/night-saraswati-library@2x.png"
            data-animate-on-scroll
          />
          <img
            className="mv-block-2-icon"
            alt=""
            src="/mv-block-2@2x.png"
            data-animate-on-scroll
          />
        </div>
        <div className="gallery4">Gallery</div>
        <nav className="nav3">
          <div className="nav-inner" />
          <nav className="nav-elements3">
            <Link className="home3" to="/">
              Home
            </Link>
            <Link
              className="events1"
              to="/dark-mode-see-more-events"
              onClick={onEventsClick}
            >
              Events
            </Link>
            <Link className="contact3" to="/dark-mode-contact-us-redirect-page">
              Contact
            </Link>
          </nav>
          <div className="group-parent1">
            <a className="group-a" onClick={onGroupLinkClick}>
              <img className="rectangle-icon" alt="" src="/rectangle-12.svg" />
              <div className="sign-up7">Sign up</div>
            </a>
            <a className="sign-in5" onClick={onSignInClick}>
              Sign in
            </a>
          </div>
          <img
            className="dcrust-logo-1-icon3"
            alt=""
            src="/dcrust-logo-1@2x.png"
          />
          <div className="toggle-button1">
            <div className="toggle-button-inner" />
            <div className="ellipse-div" />
          </div>
        </nav>
        <Footer
          dimensionsText="/linkedin@2x.png"
          titleTop="5564px"
          onTwitterXImageClick={onTwitterXImageClick}
          onFacebookImageClick={onFacebookImageClick}
        />
      </div>
    </div>
  );
};

export default DarkModeGallery;
