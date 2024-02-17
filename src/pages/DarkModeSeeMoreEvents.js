import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./DarkModeSeeMoreEvents.css";

const DarkModeSeeMoreEvents = () => {
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

  const onEventsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='centralizedEventsText']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignInClick = useCallback(() => {
    navigate("/dark-mode-signin-page");
  }, [navigate]);

  const onKnowMoreClick = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore1Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRegisterNowButtonClick = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore2Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore3Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore4Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore5Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore6Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore7Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore8Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore9Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore10Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore11Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore12Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore13Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore14Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore15Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore16Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore18Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore19Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore20Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink19Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore21Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink20Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore22Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore23Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink22Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore24Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore25Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore26Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink25Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore27Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink26Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore28Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore29Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink28Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore30Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore31Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore32Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink31Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore33Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore34Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore35Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore36Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore37Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore38Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore39Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore40Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore41Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink41Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore42Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink42Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore43Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink43Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore44Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onKnowMore45Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink44Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore46Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink45Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore47Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink46Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore48Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink47Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore49Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink48Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore50Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink49Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore51Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink50Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore52Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink51Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMoreTextClick = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink52Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  const onKnowMore53Click = useCallback(() => {
    navigate("/dark-mode-event-rules");
  }, [navigate]);

  const onRectangleLink53Click = useCallback(() => {
    navigate("/registration-form-dark-mode");
  }, [navigate]);

  return (
    <div className="dark-mode-see-more-events">
      <div className="see-more">
        <div className="background-parent">
          <div className="background" />
          <div className="copyright-technova-2024-parent">
            <div className="copyright-technova">@Copyright - Technova 2024</div>
            <div className="frame-parent">
              <div className="e-cell-sunshine-dcrust-odc-gds-parent">
                <div className="e-cell-sunshine-dcrust-container">
                  <ol className="e-cell-sunshine-dcrust-odc-gds">
                    <li className="e-cell">E-cell</li>
                    <li className="e-cell">Sunshine</li>
                    <li className="e-cell">DCRUST ODC</li>
                    <li className="e-cell">GDSC</li>
                    <li>ThinkBots</li>
                  </ol>
                </div>
                <div className="societal-events">Societal Events</div>
              </div>
              <div className="cse-electrical-ece-mechanical-parent">
                <div className="cse-electrical-ece-container">
                  <ol className="e-cell-sunshine-dcrust-odc-gds">
                    <li className="e-cell">CSE</li>
                    <li className="e-cell">Electrical</li>
                    <li className="e-cell">ECE</li>
                    <li className="e-cell">Mechanical</li>
                    <li className="e-cell">BME</li>
                  </ol>
                </div>
                <div className="departmental-events">Departmental Events</div>
              </div>
              <div className="hobby-expo-project-expo-poster-parent">
                <div className="hobby-expo-project-container">
                  <ol className="e-cell-sunshine-dcrust-odc-gds">
                    <li className="e-cell">Hobby EXPO</li>
                    <li className="e-cell">Project EXPO</li>
                    <li>Poster Presentation</li>
                  </ol>
                </div>
                <div className="centralized-events">Centralized Events</div>
              </div>
            </div>
            <div className="credits">
              <div className="website-team-designer-container">
                <p className="website-team">{`Website Team `}</p>
                <p className="website-team">designer and developer: name</p>
                <p className="website-team">designer and developer: name</p>
              </div>
              <img className="linkedin-icon" alt="" src="/linkedin@2x.png" />
              <img className="linkedin-icon1" alt="" src="/linkedin@2x.png" />
              <img className="linkedin-icon2" alt="" src="/linkedin@2x.png" />
            </div>
            <div className="row-parent">
              <div className="row">
                <div className="btn">
                  <div className="title">Send request</div>
                </div>
                <div className="input7">
                  <div className="placeholder">Type your query here</div>
                </div>
              </div>
              <div className="title1">Do you have any questions?</div>
            </div>
            <div className="contact-us-parent">
              <div className="contact-us">Contact Us</div>
              <div className="instagram-parent">
                <img
                  className="instagram-icon"
                  alt=""
                  src="/instagram@2x.png"
                />
                <img className="linkedin-icon3" alt="" src="/linkedin@2x.png" />
                <img
                  className="twitterx-icon"
                  alt=""
                  src="/twitterx@2x.png"
                  onClick={onTwitterXImageClick}
                />
                <img
                  className="facebook-icon"
                  alt=""
                  src="/facebook@2x.png"
                  onClick={onFacebookImageClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame14">
          <div className="frame15">
            <div className="category-drop-down">
              <div className="organizer-parent">
                <div className="organizer">Category</div>
                <img className="frame-child" alt="" src="/polygon-2.svg" />
              </div>
              <div className="frame-group">
                <div className="centralized-wrapper">
                  <div className="centralized">Centralized</div>
                </div>
                <div className="centralized-wrapper">
                  <div className="centralized">Society</div>
                </div>
                <div className="centralized-wrapper">
                  <div className="centralized">Department</div>
                </div>
              </div>
            </div>
            <div className="search-bar">
              <div className="search-bar-child" />
              <div className="search-here">Search here</div>
              <img className="search-icon" alt="" src="/search@2x.png" />
            </div>
            <nav className="nav2">
              <div className="nav-item" />
              <nav className="nav-elements2">
                <div className="home2">Home</div>
                <a className="gallery2" onClick={onGalleryClick}>
                  Gallery
                </a>
                <div className="events" onClick={onEventsTextClick}>
                  Events
                </div>
                <Link
                  className="contact2"
                  to="/dark-mode-contact-us-redirect-page"
                >
                  Contact
                </Link>
              </nav>
              <div className="frame-container">
                <a className="vector-container">
                  <img className="frame-item" alt="" src="/rectangle-12.svg" />
                  <div className="sign-up6">Sign up</div>
                </a>
                <a className="sign-in4" onClick={onSignInClick}>
                  Sign in
                </a>
              </div>
              <img
                className="dcrust-logo-1-icon2"
                alt=""
                src="/dcrust-logo-1@2x.png"
              />
              <button className="toggle-button">
                <div className="toggle-button-child" />
                <div className="toggle-button-item" />
              </button>
            </nav>
          </div>
          <div className="frame16">
            <img
              className="pencil-robot-icon3"
              alt=""
              src="/pencil-robot@2x.png"
            />
            <img
              className="pencil-robot-icon4"
              alt=""
              src="/pencil-robot@2x.png"
            />
            <img
              className="pencil-robot-icon5"
              alt=""
              src="/pencil-robot@2x.png"
            />
            <div className="department-events">
              <div className="dep-events-1st-gp">
                <div className="gp2">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent">
                      <Link
                        className="know-more"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMoreClick}
                      >
                        Know more
                      </Link>
                      <div className="department-civil-engineering-container">
                        <p className="website-team">{`Department: Civil Engineering `}</p>
                        <p className="website-team">#NIRMAN</p>
                        <p className="website-team">
                          <span>{`Event: `}</span>
                          <span className="projectile-precision-challange">
                            Projectile Precision Challange
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-button">
                    <a className="registernow-button-child" />
                    <b className="register-now">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/1-4oh1ndnujawoaqzwsxntmw-1@2x.png"
                  />
                </div>
                <div className="gp3">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-group">
                      <Link
                        className="know-more1"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore1Click}
                      >
                        Know more
                      </Link>
                      <div className="department-civil-engineering-container1">
                        <p className="website-team">
                          Department: Civil Engineering
                        </p>
                        <p className="website-team">{` #NIRMAN `}</p>
                        <p className="website-team">Event: Scale Seekers</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="register-now-button3"
                    to="/registration-form-dark-mode"
                    onClick={onRegisterNowButtonClick}
                  >
                    <a className="rectangle-a" />
                    <b className="register-now1">REGISTER NOW</b>
                  </Link>
                  <img
                    className="most-important-skills-for-a-ci-icon"
                    alt=""
                    src="/5mostimportantskillsforacivilengineertosucceedinthe21stcenturyworld-1@2x.png"
                  />
                </div>
                <div className="gp1">
                  <div className="rectangle-container">
                    <div className="frame-child1" />
                    <div className="know-more-container">
                      <Link
                        className="know-more2"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore2Click}
                      >
                        Know more
                      </Link>
                      <div className="department-civil-engineering-container2">
                        <p className="website-team">
                          Department: Civil Engineering
                        </p>
                        <p className="website-team">#NIRMAN</p>
                        <p className="website-team">{` Event: Design and Sustain `}</p>
                      </div>
                    </div>
                  </div>
                  <div className="registernow-button1">
                    <a className="registernow-button-item" />
                    <b className="register-now1">REGISTER NOW</b>
                  </div>
                  <img
                    className="what-is-civil-engineering-1-icon"
                    alt=""
                    src="/whatiscivilengineering-1@2x.png"
                  />
                </div>
                <div className="gp5">
                  <div className="frame-div">
                    <div className="gp3-child" />
                    <div className="know-more-parent1">
                      <Link
                        className="know-more3"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore3Click}
                      >
                        Know more
                      </Link>
                      <div className="department-biotech-engineerin-container">
                        <p className="website-team">
                          Department: Biotech Engineering
                        </p>
                        <p className="website-team">#ENGENISIS</p>
                        <p className="website-team">Event: Neuron Navigator</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/download-1-1@2x.png"
                    />
                  </div>
                  <div className="register-now-button4">
                    <a className="register-now-child" />
                    <b className="register-now3">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp6">
                  <div className="rectangle-parent1">
                    <div className="gp3-child" />
                    <div className="know-more-parent2">
                      <Link
                        className="know-more4"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore4Click}
                      >
                        Know more
                      </Link>
                      <div className="department-biotech-engineerin-container1">
                        <p className="website-team">
                          Department: Biotech Engineering
                        </p>
                        <p className="website-team">#ENGENISIS</p>
                        <p className="website-team">
                          Event: Bio Decode Adventure
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now-button5">
                    <a className="register-now-button-child2" />
                    <b className="register-now4">REGISTER NOW</b>
                  </div>
                  <img
                    className="most-important-skills-for-a-ci-icon"
                    alt=""
                    src="/dna35393091-1@2x.png"
                  />
                </div>
                <div className="gp4">
                  <div className="rectangle-parent2">
                    <div className="frame-child4" />
                    <div className="know-more-parent3">
                      <Link
                        className="know-more5"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore5Click}
                      >
                        Know more
                      </Link>
                      <div className="department-biotech-engineerin-container2">
                        <p className="website-team">
                          Department: Biotech Engineering
                        </p>
                        <p className="website-team">{`#ENGENISIS `}</p>
                        <p className="website-team">
                          Event: Mind Buzz Carnival
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now-button6">
                    <a className="register-now-child" />
                    <b className="register-now5">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/depositphotos-41197145stockphotoquiz-1@2x.png"
                  />
                </div>
              </div>
              <div className="dep-events-2nd-gp">
                <div className="gp21">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent4">
                      <Link
                        className="know-more6"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore6Click}
                      >
                        Know more
                      </Link>
                      <div className="department-chemical-departmen-container">
                        <p className="website-team">
                          Department: Chemical Department
                        </p>
                        <p className="website-team">#MANTHAN</p>
                        <p className="website-team">Event: GRYP</p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now-button7">
                    <a className="register-now-child" />
                    <b className="register-now6">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/syn-thesis-med-chem-cover-1@2x.png"
                  />
                </div>
                <div className="gp31">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent5">
                      <Link
                        className="know-more7"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore7Click}
                      >
                        Know more
                      </Link>
                      <div className="department-chemical-departmen-container1">
                        <p className="website-team">
                          Department: Chemical Department
                        </p>
                        <p className="website-team">#MANTHAN</p>
                        <p className="website-team">Event: Creative Canvas</p>
                      </div>
                    </div>
                    <img
                      className="the-creative-canvas-showcasing-icon"
                      alt=""
                      src="/thecreativecanvasshowcasingartistsandtheirinspirations-1@2x.png"
                    />
                  </div>
                  <div className="register-now-button8">
                    <a className="register-now-button-child5" />
                    <b className="register-now1">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp11">
                  <div className="rectangle-parent5">
                    <div className="frame-child1" />
                    <div className="know-more-parent6">
                      <Link
                        className="know-more8"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore8Click}
                      >
                        Know more
                      </Link>
                      <div className="department-chemical-departmen-container2">
                        <p className="website-team">{`Department: Chemical Department  `}</p>
                        <p className="website-team">#MANTHAN</p>
                        <p className="website-team">
                          {" "}
                          Event: Knowledge Knockout Quiz
                        </p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/quizimage0101-1@2x.png"
                    />
                  </div>
                  <div className="register-now-button9">
                    <a className="register-now-child" />
                    <b className="register-now8">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp51">
                  <div className="frame-div">
                    <div className="gp3-child" />
                    <div className="know-more-parent7">
                      <Link
                        className="know-more9"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore9Click}
                      >
                        Know more
                      </Link>
                      <div className="department-ece-intec-container">
                        <p className="website-team">Department: ECE</p>
                        <p className="website-team">#INTEC</p>
                        <p className="website-team">Event: Circuithon</p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now-button10">
                    <a className="register-now-child" />
                    <b className="register-now9">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/adobestock-4381957-1@2x.png"
                  />
                </div>
                <div className="gp61">
                  <div className="rectangle-parent7">
                    <div className="gp3-child" />
                    <div className="know-more-parent8">
                      <Link
                        className="know-more10"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore10Click}
                      >
                        Know more
                      </Link>
                      <div className="department-ece-intec-container1">
                        <p className="website-team">Department: ECE</p>
                        <p className="website-team">#INTEC</p>
                        <p className="website-team">{`Event: Embedded System Workshop `}</p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now-button11">
                    <a className="register-now-child" />
                    <b className="register-now10">REGISTER NOW</b>
                  </div>
                  <img
                    className="most-important-skills-for-a-ci-icon"
                    alt=""
                    src="/shutterstock-13717364781-1@2x.png"
                  />
                </div>
                <div className="gp41">
                  <div className="rectangle-parent2">
                    <div className="frame-child4" />
                    <div className="know-more-parent9">
                      <Link
                        className="know-more11"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore11Click}
                      >
                        Know more
                      </Link>
                      <div className="department-ece-intec-event-container">
                        <p className="website-team">Department: ECE</p>
                        <p className="website-team">#INTEC</p>
                        <p className="website-team">
                          Event: Escape Room Challange
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="register-now11">
                    <a className="register-now-child" />
                    <b className="register-now5">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/theescapegame-1@2x.png"
                  />
                </div>
              </div>
              <div className="dep-events-4th-gp">
                <div className="gp2">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent10">
                      <Link
                        className="know-more12"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore12Click}
                      >
                        Know more
                      </Link>
                      <div className="department-mathematics-mathe-container">
                        <p className="website-team">{`Department: Mathematics `}</p>
                        <p className="website-team">{`#MATHEMAGICIANS `}</p>
                        <p className="website-team">Event: Debate</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/deabatef-2@2x.png"
                    />
                  </div>
                  <div className="register-now-button7">
                    <a className="register-now-child" />
                    <b className="register-now13">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp1">
                  <div className="rectangle-parent11">
                    <div className="frame-child13" />
                    <div className="know-more-parent11">
                      <Link
                        className="know-more13"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore13Click}
                      >
                        Know more
                      </Link>
                      <div className="department-mathematics-mathe-container1">
                        <p className="website-team">Department: Mathematics</p>
                        <p className="website-team">#MATHEMAGICIANS</p>
                        <p className="website-team"> Event: Quiz</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/istockphoto1616906708612x612-1@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent12">
                    <a className="register-now-child" />
                    <b className="register-now14">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp5">
                  <div className="frame-div">
                    <div className="gp3-child" />
                    <div className="know-more-parent12">
                      <Link
                        className="know-more14"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore14Click}
                      >
                        Know more
                      </Link>
                      <div className="department-bio-med-container">
                        <p className="website-team">{`Department: Bio Med Engineering `}</p>
                        <p className="website-team">#MEDITRONICA</p>
                        <p className="website-team">Event: Dream Project PPT</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/vrheadset720x375-1@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent14">
                    <a className="register-now-child" />
                    <b className="register-now15">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp6">
                  <div className="rectangle-parent1">
                    <div className="gp3-child" />
                    <div className="know-more-parent13">
                      <Link
                        className="know-more15"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore15Click}
                      >
                        Know more
                      </Link>
                      <div className="department-management-studies-container">
                        <p className="website-team">
                          Department: Management Studies
                        </p>
                        <p className="website-team">#ZENITH</p>
                        <p className="website-team">{`Event:  Synergy Crew `}</p>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent16">
                    <a className="register-now-child" />
                    <b className="register-now1">REGISTER NOW</b>
                  </div>
                  <img
                    className="most-important-skills-for-a-ci-icon"
                    alt=""
                    src="/projectmanagementheader-1@2x.png"
                  />
                </div>
                <div className="gp4">
                  <div className="rectangle-parent2">
                    <div className="frame-child4" />
                    <div className="know-more-parent14">
                      <Link
                        className="know-more16"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore16Click}
                      >
                        Know more
                      </Link>
                      <div className="department-bio-med-container1">
                        <p className="website-team">
                          Department: Bio Med Engineering  #MEDITRONICA
                        </p>
                        <p className="website-team">Event: B-Quiz</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/360-f-231076694-rxaik9swict8wewhfyxu0nol7k8a382k-1@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent18">
                    <a className="register-now-child" />
                    <b className="register-now17">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp32">
                  <div className="gp3-child" />
                  <div className="know-more-wrapper">
                    <Link className="know-more17" to="/dark-mode-event-rules">
                      Know more
                    </Link>
                  </div>
                  <div className="department-mathematics-mathe-container2">
                    <p className="website-team">Department: Mathematics</p>
                    <p className="website-team">#MATHEMAGICIANS</p>
                    <p className="website-team">Event: Poster making</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/artposters-1@2x.png"
                  />
                  <div className="rectangle-parent19">
                    <div className="frame-child21" />
                    <b className="register-now18">REGISTER NOW</b>
                  </div>
                </div>
              </div>
              <div className="dep-events-5th-gp">
                <div className="gp13">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore18Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">
                      Department: Management Studies
                    </p>
                    <p className="website-team">#ZENITH</p>
                    <p className="website-team">Event: Biz/Entra</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="rectangle-parent">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore19Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">
                      Department: Bio Med Engineering
                    </p>
                    <p className="website-team">#MEDITRONICA</p>
                    <p className="website-team">Event: Poster making</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp43">
                  <div className="rectangle-parent20">
                    <div className="frame-child22" />
                    <div className="know-more-parent15">
                      <Link
                        className="know-more20"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore20Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container">
                        <p className="website-team">{`Department: Physics `}</p>
                        <p className="website-team">#RAMAN</p>
                        <p className="website-team">Event: Techno Trek</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp4-child" onClick={onRectangleLink19Click} />
                  <b className="register-now21">REGISTER NOW</b>
                  <img
                    className="download-1-icon"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
                <div className="gp53">
                  <div className="rectangle-parent21">
                    <div className="frame-child23" />
                    <div className="know-more-parent16">
                      <Link
                        className="know-more21"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore21Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container1">
                        <p className="website-team">{`Department: Physics `}</p>
                        <p className="website-team">{`#RAMAN `}</p>
                        <p className="website-team">Event: Aerovate</p>
                      </div>
                    </div>
                    <img
                      className="image-management-2-1-icon"
                      alt=""
                      src="/imagemanagement2-1@2x.png"
                    />
                  </div>
                  <a className="gp5-child" onClick={onRectangleLink20Click} />
                  <b className="register-now22">REGISTER NOW</b>
                </div>
                <div className="gp33">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore22Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">
                      Department: Management Studies
                    </p>
                    <p className="website-team">#ZENITH</p>
                    <p className="website-team">Event: Ad- Mad Show</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp63">
                  <div className="rectangle-parent22">
                    <div className="frame-child22" />
                    <div className="know-more-parent17">
                      <Link
                        className="know-more23"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore23Click}
                      >
                        know more
                      </Link>
                      <div className="department-physics-raman-container2">
                        <p className="website-team">{`Department: Physics `}</p>
                        <p className="website-team">#RAMAN</p>
                        <p className="website-team">Event: Electrocraft</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp6-child" onClick={onRectangleLink22Click} />
                  <b className="register-now24">REGISTER NOW</b>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/0j5679-1@2x.png"
                  />
                </div>
              </div>
              <div className="dep-events-6th-gp">
                <div className="gp13">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore24Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: MED</p>
                    <p className="website-team">#SOMEC</p>
                    <p className="website-team">
                      Event: Stick Structure Showdown
                    </p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="rectangle-parent">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore25Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: MED</p>
                    <p className="website-team">#SOMEC</p>
                    <p className="website-team">Event: Gearhead Odyssey</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp43">
                  <div className="rectangle-parent20">
                    <div className="frame-child22" />
                    <div className="know-more-parent15">
                      <Link
                        className="know-more20"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore26Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container">
                        <p className="website-team">Department: CSE</p>
                        <p className="website-team">#COSMOS</p>
                        <p className="website-team">Event: Think Future</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp4-child" onClick={onRectangleLink25Click} />
                  <b className="register-now21">REGISTER NOW</b>
                  <img
                    className="download-1-icon"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
                <div className="gp53">
                  <div className="rectangle-parent21">
                    <div className="frame-child23" />
                    <div className="know-more-parent16">
                      <Link
                        className="know-more21"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore27Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container1">
                        <p className="website-team">Department: CSE</p>
                        <p className="website-team">{`#COSMOS 
 `}</p>
                        <p className="website-team">Event: Web Master</p>
                      </div>
                    </div>
                    <img
                      className="image-management-2-1-icon"
                      alt=""
                      src="/imagemanagement2-1@2x.png"
                    />
                  </div>
                  <a className="gp5-child" onClick={onRectangleLink26Click} />
                  <b className="register-now28">REGISTER NOW</b>
                </div>
                <div className="gp33">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore28Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: MED</p>
                    <p className="website-team">#SOMEC</p>
                    <p className="website-team">Event: Behind the bars</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp63">
                  <div className="rectangle-parent22">
                    <div className="frame-child22" />
                    <div className="know-more-parent17">
                      <Link
                        className="know-more23"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore29Click}
                      >
                        know more
                      </Link>
                      <div className="department-physics-raman-container2">
                        <p className="website-team">Department: CSE</p>
                        <p className="website-team">#COSMOS</p>
                        <p className="website-team">
                          Event: Technical Treasure Hunt
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="gp6-child" onClick={onRectangleLink28Click} />
                  <b className="register-now30">REGISTER NOW</b>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/0j5679-1@2x.png"
                  />
                </div>
              </div>
              <div className="dep-events-7th-gp">
                <div className="gp13">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore30Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: Architecture</p>
                    <p className="website-team">Event: Dome Fiber Structure</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="rectangle-parent">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore31Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: Architecture</p>
                    <p className="website-team">Event: Jali Design</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp43">
                  <div className="rectangle-parent20">
                    <div className="frame-child22" />
                    <div className="know-more-parent15">
                      <Link
                        className="know-more20"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore32Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container">
                        <p className="website-team">Department: Chemistry</p>
                        <p className="website-team">#RASAYANAM</p>
                        <p className="website-team">Event: Rasayan Magic</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp4-child" onClick={onRectangleLink31Click} />
                  <b className="register-now21">REGISTER NOW</b>
                  <img
                    className="download-1-icon"
                    alt=""
                    src="/download-1@2x.png"
                  />
                </div>
                <div className="gp53">
                  <div className="rectangle-parent21">
                    <div className="frame-child23" />
                    <div className="know-more-parent16">
                      <Link
                        className="know-more21"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore33Click}
                      >
                        Know more
                      </Link>
                      <div className="department-physics-raman-container1">
                        <p className="website-team">Department: Chemistry</p>
                        <p className="website-team">{`#RASAYANAM 
 `}</p>
                        <p className="website-team">
                          Event: Mystical Chemistry
                        </p>
                      </div>
                    </div>
                    <img
                      className="image-management-2-1-icon"
                      alt=""
                      src="/imagemanagement2-1@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent28">
                    <a className="register-now-button-child5" />
                    <b className="register-now34">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp33">
                  <div className="frame-inner" />
                  <div className="reg-now-button">
                    <a className="reg-now-button-child" />
                    <b className="register-now19">REGISTER NOW</b>
                  </div>
                  <Link
                    className="know-more18"
                    to="/dark-mode-event-rules"
                    onClick={onKnowMore34Click}
                  >
                    Know more
                  </Link>
                  <div className="department-med-somec-container">
                    <p className="website-team">Department: Architecture</p>
                    <p className="website-team">Event: Mosaic Art</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/timeskippermanagement-1@2x.png"
                  />
                </div>
                <div className="gp63">
                  <div className="rectangle-parent22">
                    <div className="frame-child22" />
                    <div className="know-more-parent17">
                      <Link
                        className="know-more23"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore35Click}
                      >
                        know more
                      </Link>
                      <div className="department-physics-raman-container2">
                        <p className="website-team">Department: Chemistry</p>
                        <p className="website-team">#RASAYANAM</p>
                        <p className="website-team">Event: Science Quiz</p>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent30">
                    <a className="register-now-child" />
                    <b className="register-now36">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/0j5679-1@2x.png"
                  />
                </div>
              </div>
              <div className="dep-events-3rd-gp">
                <div className="gp21">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent24">
                      <Link
                        className="know-more36"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore36Click}
                      >
                        Know more
                      </Link>
                      <div className="department-electrical-enginee-container">
                        <p className="website-team">{`Department: Electrical Engineering  `}</p>
                        <p className="website-team">#SEE</p>
                        <p className="website-team">Event: Circuit Circus</p>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent32">
                    <a className="register-now-child" />
                    <b className="register-now">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/16793031847565aqucnh-1@2x.png"
                  />
                </div>
                <div className="gp31">
                  <div className="rectangle-parent">
                    <div className="frame-inner" />
                    <div className="know-more-parent25">
                      <Link
                        className="know-more37"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore37Click}
                      >
                        Know more
                      </Link>
                      <div className="department-electrical-enginee-container1">
                        <p className="website-team">{`Department: Electrical Engineering `}</p>
                        <p className="website-team">#SEE</p>
                        <p className="website-team">Event: Tech Zep</p>
                      </div>
                    </div>
                    <img
                      className="most-important-skills-for-a-ci-icon"
                      alt=""
                      src="/ee11-1@2x.png"
                    />
                  </div>
                  <div className="reg-now-button9">
                    <a className="register-now-button-child2" />
                    <b className="register-now4">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp11">
                  <div className="rectangle-parent5">
                    <div className="frame-child1" />
                    <div className="know-more-parent26">
                      <Link
                        className="know-more38"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore38Click}
                      >
                        Know more
                      </Link>
                      <div className="department-electrical-enginee-container2">
                        <p className="website-team">{`Department: Electrical Engineering  `}</p>
                        <p className="website-team">#SEE</p>
                        <p className="website-team">{`Event: Tech Marathon `}</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/personrunningvirtualrace1024x768-1@2x.png"
                    />
                  </div>
                  <div className="rectangle-parent35">
                    <a className="register-now-button-child2" />
                    <b className="register-now4">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp66">
                  <div className="rectangle-parent36">
                    <div className="frame-child38" />
                    <div className="know-more-parent27">
                      <Link
                        className="know-more39"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore39Click}
                      >
                        Know more
                      </Link>
                      <div className="department-bio-med-container3">
                        <p className="website-team">{`Department: Bio Med Engineering `}</p>
                        <p className="website-team">#CEEES</p>
                        <p className="website-team">Event: Green Canvas</p>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent37">
                    <a className="register-now-button-child2" />
                    <b className="register-now40">REGISTER NOW</b>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/futuretechnologiesflatflowchartpostervector-1@2x.png"
                  />
                </div>
                <div className="gp51">
                  <div className="frame-div">
                    <div className="gp3-child" />
                    <div className="know-more-parent28">
                      <Link
                        className="know-more40"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore40Click}
                      >
                        Know more
                      </Link>
                      <div className="department-agriculture-engine-container">
                        <p className="department-agriculture-engine">
                          <span className="department1">{`Department: `}</span>
                          <span>Agriculture Engineering</span>
                        </p>
                        <p className="website-team">#CEEES</p>
                        <p className="website-team">Event: Talent Mania</p>
                      </div>
                    </div>
                    <img
                      className="oh1ndnujawoaqzwsxntmw-1-icon"
                      alt=""
                      src="/pngtreeadvancedagriculturalsystem3dillustrationofharvestingtractorandcropsprayingimage-13554754-1@2x.png"
                    />
                  </div>
                  <div className="register-now-button10">
                    <a className="register-now-child" />
                    <b className="register-now41">REGISTER NOW</b>
                  </div>
                </div>
                <div className="gp46">
                  <div className="rectangle-parent40">
                    <div className="frame-child4" />
                    <div className="know-more-parent29">
                      <Link
                        className="know-more41"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore41Click}
                      >
                        Know more
                      </Link>
                      <div className="department-agriculture-engine-container1">
                        <p className="department-agriculture-engine">
                          <span className="department1">{`Department: `}</span>
                          <span>Agriculture Engineering</span>
                        </p>
                        <p className="website-team">#CEEES</p>
                        <p className="website-team">Event: Agritech Quiz</p>
                      </div>
                      <img
                        className="oh1ndnujawoaqzwsxntmw-1-icon"
                        alt=""
                        src="/agriculturetechnology-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="rectangle-parent41">
                    <a className="register-now-child" />
                    <b className="register-now42">REGISTER NOW</b>
                  </div>
                </div>
              </div>
              <div className="department-events1">Department Events</div>
            </div>
            <div className="centralized-events1">
              <div className="gp27">
                <div className="rectangle-parent42">
                  <div className="frame-child44" />
                  <div className="hobby-expo-exhibition-container">
                    <p className="website-team">
                      <span className="department1">{`Hobby Expo: `}</span>
                      <span>(Exhibition and craftsman)</span>
                    </p>
                    <p className="unveiling-student-passion">
                      Unveiling student passion projects.
                    </p>
                  </div>
                </div>
                <a className="gp2-child1" onClick={onRectangleLink41Click} />
                <b className="register-now43">REGISTER NOW</b>
                <Link
                  className="know-more42"
                  to="/dark-mode-event-rules"
                  onClick={onKnowMore42Click}
                >
                  Know More
                </Link>
                <img
                  className="pngtree-futuristic-mesh-of-dat-icon"
                  alt=""
                  src="/0j5679-1@2x.png"
                />
              </div>
              <div className="gp37">
                <div className="rectangle-parent43">
                  <div className="frame-child44" />
                  <div className="poster-presentation-explore-container">
                    <p className="website-team">{`Poster Presentation: `}</p>
                    <p className="website-team">
                      Explore student hobbies on display.
                    </p>
                  </div>
                </div>
                <a className="gp3-child2" onClick={onRectangleLink42Click} />
                <b className="register-now44">REGISTER NOW</b>
                <Link
                  className="know-more43"
                  to="/dark-mode-event-rules"
                  onClick={onKnowMore43Click}
                >
                  Know More
                </Link>
                <img
                  className="ai-generators-1200x750-1-icon"
                  alt=""
                  src="/aigenerators1200x750-1@2x.png"
                />
              </div>
              <div className="gp17">
                <div className="gp1-child1" />
                <Link
                  className="register-now-button12"
                  to="/registration-form-dark-mode"
                >
                  <a
                    className="register-now-button-child9"
                    onClick={onRectangleLink43Click}
                  />
                  <b className="register-now45">REGISTER NOW</b>
                </Link>
                <img
                  className="oh1ndnujawoaqzwsxntmw-1-icon"
                  alt=""
                  src="/poster-presrentation-1@2x.png"
                />
                <Link
                  className="know-more44"
                  to="/dark-mode-event-rules"
                  onClick={onKnowMore44Click}
                >
                  Know More
                </Link>
                <div className="project-expo-showcasing-container">
                  <p className="website-team">Project Expo:</p>
                  <p className="website-team">
                    Showcasing student innovation and creativity.
                  </p>
                </div>
              </div>
              <div
                className="centralized-events2"
                data-scroll-to="centralizedEventsText"
              >
                Centralized Events
              </div>
            </div>
            <div className="society-events">
              <div className="society-event-gp-2">
                <div className="gp28">
                  <div className="rectangle-parent44">
                    <div className="frame-child22" />
                    <div className="know-more-parent30">
                      <Link
                        className="know-more45"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore45Click}
                      >
                        Know more
                      </Link>
                      <div className="society-dcrustodc-event-container">
                        <p className="website-team">Society: DCRUSTODC</p>
                        <p className="website-team">Event: Tech Tri Wizardry</p>
                      </div>
                      <img
                        className="oh1ndnujawoaqzwsxntmw-1-icon"
                        alt=""
                        src="/download-2@2x.png"
                      />
                    </div>
                  </div>
                  <a className="gp2-child2" onClick={onRectangleLink44Click} />
                  <b className="register-now46">REGISTER NOW</b>
                </div>
                <div className="gp38">
                  <div className="rectangle-parent20">
                    <div className="frame-child22" />
                    <div className="know-more-parent31">
                      <Link
                        className="know-more46"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore46Click}
                      >
                        Know more
                      </Link>
                      <div className="society-dcrustodc-event-container1">
                        <p className="website-team">Society: DCRUSTODC</p>
                        <p className="website-team">Event: Haha Hash Hunt</p>
                      </div>
                    </div>
                    <img
                      className="depositphotos-8956444-stock-il-icon"
                      alt=""
                      src="/depositphotos-8956444stockillustrationdetective-1@2x.png"
                    />
                  </div>
                  <a className="gp3-child3" onClick={onRectangleLink45Click} />
                  <b className="register-now47">REGISTER NOW</b>
                </div>
                <div className="gp57">
                  <div className="rectangle-parent46">
                    <div className="frame-child48" />
                    <div className="know-more-parent32">
                      <Link
                        className="know-more47"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore47Click}
                      >
                        Know more
                      </Link>
                      <div className="society-savera-school-container">
                        <p className="website-team">"Society: Savera School</p>
                        <p className="website-team">
                          <span>Event:</span>
                          <span className="innovation-odyssey-challenge">
                            {" "}
                            Innovation odyssey challenge
                          </span>
                        </p>
                      </div>
                    </div>
                    <img
                      className="pngtree-futuristic-mesh-of-dat-icon"
                      alt=""
                      src="/pngtreefuturisticmeshofdatatransferanabstractneuralnetworktechnologybackgroundpictureimage-6299915-1@2x.png"
                    />
                  </div>
                  <a className="gp5-inner" onClick={onRectangleLink46Click} />
                  <b className="register-now48">REGISTER NOW</b>
                </div>
                <div className="gp67">
                  <div className="rectangle-parent47">
                    <div className="frame-child49" />
                    <div className="know-more-parent33">
                      <Link
                        className="know-more48"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore48Click}
                      >
                        Know more
                      </Link>
                      <div className="society-savera-school-container1">
                        <p className="website-team">Society: Savera School</p>
                        <p className="website-team">
                          Event: Tech Titans Trivia
                        </p>
                      </div>
                    </div>
                    <img
                      className="time-management-7258198-640-1-icon"
                      alt=""
                      src="/timemanagement7258198-640-1@2x.png"
                    />
                  </div>
                  <a className="gp6-inner" onClick={onRectangleLink47Click} />
                  <b className="register-now49">REGISTER NOW</b>
                </div>
              </div>
              <div className="socity-eve-gp1">
                <div className="gp29">
                  <div className="rectangle-parent48">
                    <div className="frame-child50" />
                    <div className="know-more-parent34">
                      <Link
                        className="know-more49"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore49Click}
                      >
                        Know more
                      </Link>
                      <div className="society-thinkbots-event-container">
                        <p className="website-team">Society: Thinkbots</p>
                        <p className="website-team">Event: Cosmo Race</p>
                        <p className="website-team">Location: MV Block</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp2-child3" onClick={onRectangleLink48Click} />
                  <b className="register-now50">REGISTER NOW</b>
                  <img
                    className="save-20240213-174943-1-icon"
                    alt=""
                    src="/save-20240213-174943-1@2x.png"
                  />
                </div>
                <div className="gp18">
                  <div className="rectangle-parent49">
                    <div className="frame-child51" />
                    <div className="know-more-parent35">
                      <Link
                        className="know-more50"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore50Click}
                      >
                        Know more
                      </Link>
                      <div className="society-thinkbots-event-container1">
                        <p className="website-team">{`Society: Thinkbots `}</p>
                        <p className="website-team">{` Event: Robo Soccer `}</p>
                        <p className="website-team">Location: Mv Block</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp1-child2" onClick={onRectangleLink49Click} />
                  <b className="register-now51">REGISTER NOW</b>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/save-20240213-174936-1@2x.png"
                  />
                </div>
                <div className="gp58">
                  <div className="rectangle-parent50">
                    <div className="frame-child52" />
                    <div className="know-more-parent36">
                      <Link
                        className="know-more51"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore51Click}
                      >
                        Know more
                      </Link>
                      <div className="society-lisoc-event-container">
                        <p className="website-team">Society: LISOC</p>
                        <p className="website-team">
                          Event: Student of the year
                        </p>
                      </div>
                    </div>
                  </div>
                  <a className="gp5-child1" onClick={onRectangleLink50Click} />
                  <b className="register-now52">REGISTER NOW</b>
                  <img
                    className="illustration-of-a-teenage-girl-icon"
                    alt=""
                    src="/illustrationofateenagegirlstudentlookingatherwatchcheckingtimewhilestudyingandreadingabookrje7jj-1@2x.png"
                  />
                </div>
                <div className="gp68">
                  <div className="rectangle-parent51">
                    <div className="frame-child52" />
                    <div className="know-more-parent37">
                      <Link
                        className="know-more52"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore52Click}
                      >
                        Know more
                      </Link>
                      <div className="society-e-cell-dcrustm-container">
                        <p className="website-team">Society: E-cell DCRUSTM</p>
                        <p className="website-team">Event: Chase the Bid</p>
                      </div>
                    </div>
                  </div>
                  <a className="gp6-child1" onClick={onRectangleLink51Click} />
                  <b className="register-now53">REGISTER NOW</b>
                  <img
                    className="istockphoto-1451097432-612x612-icon"
                    alt=""
                    src="/istockphoto1451097432612x612-1@2x.png"
                  />
                </div>
                <div className="gp47">
                  <div className="rectangle-parent52">
                    <div className="frame-child54" />
                    <Link
                      className="know-more-frame"
                      to="/dark-mode-event-rules"
                    >
                      <b className="know-more53" onClick={onKnowMoreTextClick}>
                        Know more
                      </b>
                    </Link>
                  </div>
                  <a className="gp4-child1" onClick={onRectangleLink52Click} />
                  <b className="register-now54">REGISTER NOW</b>
                  <div className="society-lisoc-event-container1">
                    <p className="website-team">Society: LISOC</p>
                    <p className="website-team">Event: Let’s Discuss</p>
                  </div>
                  <img
                    className="oh1ndnujawoaqzwsxntmw-1-icon"
                    alt=""
                    src="/letsdiscussonlineforum-1@2x.png"
                  />
                </div>
                <div className="gp39">
                  <div className="rectangle-parent53">
                    <div className="frame-child55" />
                    <div className="know-more-parent38">
                      <Link
                        className="know-more54"
                        to="/dark-mode-event-rules"
                        onClick={onKnowMore53Click}
                      >
                        Know more
                      </Link>
                      <div className="society-e-cell-dcrustm-container1">
                        <p className="website-team">Society: E-cell DCRUSTM</p>
                        <p className="website-team">Event: Innovent Sprint</p>
                      </div>
                      <img
                        className="download-1-icon"
                        alt=""
                        src="/istockphoto641260914612x612-1@2x.png"
                      />
                    </div>
                  </div>
                  <a className="gp3-child4" onClick={onRectangleLink53Click} />
                  <b className="register-now55">REGISTER NOW</b>
                </div>
              </div>
              <div className="society-events1">Society Events</div>
            </div>
            <DropdownButton
              className="society-drop-down"
              title="Society"
            >{` `}</DropdownButton>
            <DropdownButton
              className="department-drop-down"
              title="Department"
            >{` `}</DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSeeMoreEvents;
