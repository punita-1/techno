import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DarkModeSigninPage.css";

const DarkModeSigninPage = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/dark-mode-sign-up");
  }, [navigate]);

  return (
    <div className="dark-mode-signin-page">
      <div className="signin">
        <div className="signin">
          <div className="sign-up-wrapper">
            <div className="sign-up4">
              <div className="sign-up-child">
                <div className="instance-item" />
              </div>
              <div className="sign-in3">Sign in</div>
              <a className="dont-have-an-container" onClick={onDontHaveAnClick}>
                {`Don’t have an account? `}
                <span className="sign-up5">Sign up</span>
              </a>
              <b className="login"> Login</b>
              <form className="form2">
                <div className="group-div">
                  <div className="group-child2" />
                  <div className="email-address1">Email Address</div>
                </div>
                <div className="line-parent1">
                  <div className="group-child2" />
                  <div className="password1">Password</div>
                </div>
              </form>
              <button className="login-button">
                <div className="create-account-rectangle1" />
                <b className="login1">Login</b>
              </button>
              <img
                className="pencil-robot-icon2"
                alt=""
                src="/146c251888f38c78d18b5548c75e24f2removebgpreview-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSigninPage;
