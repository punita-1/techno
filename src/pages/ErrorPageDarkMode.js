import "./ErrorPageDarkMode.css";

const ErrorPageDarkMode = () => {
  return (
    <div className="error-page-dark-mode">
      <div className="error-not-found-page-common-fo">
        <div className="page-not-found-container">
          <p className="page-not-found">PAGE NOT FOUND</p>
          <p className="blank-line">&nbsp;</p>
        </div>
        <div className="div6">404</div>
        <div className="page-you-are-container">
          <p className="page-you-are">
            PAGE YOU ARE LOOKING FOR COULD NOT BE FOUND.
          </p>
          <p className="welcome-to-the">
            "Welcome to the land of lost links! Don't worry, we're here to help
            you find your way back. Let's navigate this together!"
          </p>
        </div>
        <div className="go-home-button">
          <div className="go-home-button-child" />
          <div className="go-home">Go Home</div>
        </div>
        <img className="pencil-robot-icon7" alt="" src="/pencil-robot@2x.png" />
      </div>
    </div>
  );
};

export default ErrorPageDarkMode;
