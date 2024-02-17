import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./RegistrationFormDarkMode.css";

const RegistrationFormDarkMode = () => {
  const navigate = useNavigate();

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open("https://facebook");
  }, []);

  const onVisitGalleryTextClick = useCallback(() => {
    navigate("/dark-mode-see-more-events");
  }, [navigate]);

  const onGalleryClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  return (
    <div className="registration-form-dark-mode">
      <div className="registernowfinal-phase">
        <div className="register-form">
          <form className="form">
            <div className="input">
              <div className="label">
                <div className="label1">First Name</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input1">
              <div className="label">
                <div className="label1">Last Name</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="label">
                <div className="label1">Roll No</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="label">
                <div className="label1">Department</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="labelno">
                <div className="label1">Year</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="label">
                <div className="label1">Team name</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame1">
                  <div className="enter-text">Enter text</div>
                </div>
              </div>
            </div>
            <div className="input2">
              <div className="label11">
                <div className="label12">{`2  Name `}</div>
                <div className="div">*</div>
              </div>
              <div className="frame">
                <div className="frame13">
                  <div className="enter-text">Select country</div>
                  <div className="iconscaret-down">
                    <div className="icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <b className="register-here">
            <p className="register-here1">REGISTER HERE</p>
          </b>
          <div className="register-now-button">
            <div className="register-now-button-child" />
            <b className="visit-gallery">Submit</b>
          </div>
          <div className="register-now-button1">
            <div className="register-now-button-child" />
            <b className="visit-gallery1" onClick={onVisitGalleryTextClick}>
              Back
            </b>
          </div>
        </div>
        <img className="pencil-robot-icon" alt="" src="/pencil-robot@2x.png" />
        <nav className="nav">
          <div className="nav-child" />
          <nav className="nav-elements">
            <div className="home">Home</div>
            <a className="gallery" onClick={onGalleryClick}>
              Gallery
            </a>
            <div className="contact">Contact</div>
          </nav>
          <div className="group-parent">
            <a className="vector-parent">
              <img className="group-child" alt="" src="/rectangle-12.svg" />
              <div className="sign-up">Sign up</div>
            </a>
            <a className="sign-in">Sign in</a>
          </div>
          <img
            className="dcrust-logo-1-icon"
            alt=""
            src="/dcrust-logo-1@2x.png"
          />
        </nav>
        <Footer
          dimensionsText="/linkedin@2x.png"
          onTwitterXImageClick={onTwitterXImageClick}
          onFacebookImageClick={onFacebookImageClick}
        />
      </div>
    </div>
  );
};

export default RegistrationFormDarkMode;
