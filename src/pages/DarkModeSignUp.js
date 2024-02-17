import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DarkModeSignUp.css";

const DarkModeSignUp = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/dark-mode-signin-page");
  }, [navigate]);

  return (
    <div className="dark-mode-sign-up">
      <div className="signup-dark-mode">
        <div className="sign-up-parent">
          <div className="sign-up2">
            <div className="sign-up-inner">
              <div className="instance-child" />
            </div>
            <div className="sign-up3">{`Sign Up `}</div>
            <a
              className="already-have-an-container"
              onClick={onAlreadyHaveAnClick}
            >
              <span>{`Already have an account? `}</span>
              <span className="log-in">Log In</span>
            </a>
            <b className="create-account">Create Account</b>
            <div className="signup-with-google">
              <a className="signup-with-google-child" />
              <img
                className="google-g-logo-2-icon"
                alt=""
                src="/google--g--logo-2@2x.png"
              />
              <b className="sign-up-with">Sign up with Google</b>
            </div>
            <div className="or-">- OR -</div>
            <form className="form1">
              <div className="line-parent">
                <div className="group-inner" />
                <div className="full-name">Full Name</div>
              </div>
              <div className="line-group">
                <div className="group-inner" />
                <div className="email-address">Email Address</div>
              </div>
              <div className="line-container">
                <div className="group-inner" />
                <div className="full-name">Password</div>
              </div>
            </form>
            <button className="create-account-button">
              <div className="create-account-rectangle" />
              <b className="create-account1">Create Account</b>
            </button>
          </div>
          <img
            className="c251888f38c78d18b5548c75e24f2-icon"
            alt=""
            src="/146c251888f38c78d18b5548c75e24f2removebgpreview-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DarkModeSignUp;
