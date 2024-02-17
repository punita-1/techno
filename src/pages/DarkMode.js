import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutCard from "../components/AboutCard";
import "./DarkMode.css";

const DarkMode = () => {
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

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open("https://facebook");
  }, []);

  const onTwitterXImage1Click = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImage1Click = useCallback(() => {
    window.open("https://facebook");
  }, []);

  return (
    <div className="dark-mode">
      <main className="landing-page">
        <div className="blur-01" />
        <div className="blur-02" />
        <div className="blur-03" />
        <AboutCard />
        <div className="background-image">
          <img
            className="pencil-robot-icon8"
            alt=""
            src="/pencil-robot@2x.png"
          />
          <img
            className="pencil-robot-icon9"
            alt=""
            src="/pencil-robot@2x.png"
          />
        </div>
        <div className="previously-section" data-animate-on-scroll>
          <div className="previously">Previously</div>
          <div className="explore-the-past">
            "Explore the past triumphs and memorable moments that have shaped
            the legacy of our university's innovative spirit."
          </div>
          <div className="request-early-access">
            Request Early Access to Get Started
          </div>
          <a className="visit-gallary-button">
            <div className="visit-gallary-button-child" />
            <b className="visit-gallery3">
              <p className="ignite-your-passion">Visit Gallery</p>
            </b>
          </a>
          <img
            className="istockphoto-1359585151-612x612-icon"
            alt=""
            src="/istockphoto1359585151612x612removebgpreview-1@2x.png"
          />
        </div>
        <h3 className="desc">
          <p className="ignite-your-passion">{`"Ignite Your Passion for Innovation: `}</p>
          <p className="ignite-your-passion">{`Join Us for a Spectacular Fusion of Technology and Talent!" `}</p>
        </h3>
        <h1 className="heading">TECHNOVA 2024</h1>
        <img
          className="robot-icon"
          alt=""
          src="/robot@2x.png"
          data-animate-on-scroll
        />
        <nav className="nav5">
          <div className="nav-child1" />
          <nav className="nav-elements5">
            <div className="home5">Home</div>
            <a className="gallery6">Gallery</a>
            <div className="about">About</div>
            <Link className="events3" to="/dark-mode-see-more-events">
              Events
            </Link>
          </nav>
          <div className="signupsignin">
            <a className="signup">
              <img className="signup-child" alt="" src="/rectangle-12.svg" />
              <b className="sign-up9">Sign up</b>
            </a>
            <a className="login2">Login</a>
          </div>
          <button className="toggle-button3">
            <div className="toggle-button-child3" />
            <div className="toggle-button-child4" />
          </button>
        </nav>
        <div className="social-media">
          <div className="dont-miss-out">
            Don’t Miss Out Any Update Of Technova. Get in Touch With Us
          </div>
        </div>
        <div className="venue">
          <div className="venue1">VENUE</div>
          <img className="map-image-icon" alt="" src="/map-image@2x.png" />
          <div className="how-to-reach-container">
            <p className="how-to-reach">HOW TO REACH?</p>
            <p className="ignite-your-passion">{`"Deenbandhu Chhotu Ram University of Science & Technology is conveniently located in Murthal, Sonepat, Haryana, with the address: Murthal, Sonepat, Haryana - 131039. You can easily reach us by road via well-connected highways, or by public transport options such as buses or trains. For more detailed directions, please refer to the map below or contact us for assistance."`}</p>
          </div>
        </div>
        <section className="dont-miss-opportunity">
          <div className="dont-miss-opportunity-child" />
          <div className="dont-miss-out1">
            "Don't Miss Out! Register Now and Be a Part of Something
            Extraordinary!"
          </div>
          <div className="set-your-timings">
            SET YOUR TIMINGS AND DONT FORGET TO CATCH US ON 10TH MARCH 2024.
          </div>
          <Link className="rectangle-parent54" to="/dark-mode-see-more-events">
            <div className="group-child5" />
            <div className="register-now56">REGISTER NOW</div>
          </Link>
        </section>
        <section className="events-and-attendee-card">
          <div className="events-and-attendee-card-child" />
          <div className="attendee-parent">
            <div className="attendee">ATTENDEE</div>
            <div className="events4">EVENTS</div>
          </div>
          <img
            className="fcsg5b-removebg-preview-1-icon"
            alt=""
            src="/5fcsg5bremovebgpreview-1@2x.png"
          />
          <img
            className="fcsg5b-removebg-preview-2-icon"
            alt=""
            src="/5fcsg5bremovebgpreview-2@2x.png"
          />
        </section>
        <div className="events-section">
          <Link className="see-more-button" to="/dark-mode-see-more-events">
            <a className="see-more-button-child" />
            <b className="see-more1">SEE MORE</b>
          </Link>
          <div className="events5">EVENTS</div>
          <div className="events6">
            <div className="gp210">
              <div className="rectangle-parent55">
                <div className="group-child6" />
                <div className="know-more-parent39">
                  <Link className="know-more55" to="/dark-mode-event-rules">
                    Know more
                  </Link>
                  <div className="society-thinkbots-event-container2">
                    <p className="ignite-your-passion">"Society: Thinkbots</p>
                    <p className="ignite-your-passion">Event: Cosmo Race</p>
                    <p className="ignite-your-passion">Location: MV Block"</p>
                  </div>
                </div>
              </div>
              <a className="gp2-child4" />
              <b className="register-now57">REGISTER NOW</b>
              <img
                className="save-20240213-174943-1-icon1"
                alt=""
                src="/save-20240213-174943-1@2x.png"
              />
            </div>
            <div className="gp19">
              <div className="rectangle-parent56">
                <div className="group-child7" />
                <div className="know-more-parent40">
                  <Link className="know-more56" to="/dark-mode-event-rules">
                    Know more
                  </Link>
                  <div className="society-thinkbots-event-container3">
                    <p className="ignite-your-passion">{`“Society: Thinkbots `}</p>
                    <p className="ignite-your-passion">{` Event: Robo Soccer `}</p>
                    <p className="ignite-your-passion">Location: Mv Block”</p>
                  </div>
                </div>
              </div>
              <a className="gp1-child3" />
              <b className="register-now58">REGISTER NOW</b>
              <img
                className="save-20240213-174936-1-icon1"
                alt=""
                src="/save-20240213-174936-1@2x.png"
              />
            </div>
            <div className="gp310">
              <div className="rectangle-parent57">
                <div className="group-child6" />
                <div className="know-more-parent41">
                  <Link className="know-more57" to="/dark-mode-event-rules">
                    Know more
                  </Link>
                  <div className="project-expo-showcasing-container1">
                    <p className="ignite-your-passion">"Project Expo:</p>
                    <p className="ignite-your-passion">
                      {" "}
                      Showcasing student innovation and creativity."
                    </p>
                  </div>
                </div>
              </div>
              <b className="register-now59">REGISTER NOW</b>
              <a className="gp3-child5" />
              <b className="register-now60">REGISTER NOW</b>
              <img
                className="poster-presrentation-11"
                alt=""
                src="/poster-presrentation-1@2x.png"
              />
            </div>
            <div className="gp59">
              <div className="rectangle-parent58">
                <div className="group-child9" />
                <div className="know-more-parent42">
                  <Link className="know-more58" to="/dark-mode-event-rules">
                    Know more
                  </Link>
                  <div className="poster-presentation-explore-container1">
                    <p className="ignite-your-passion">{`"Poster Presentation: `}</p>
                    <p className="ignite-your-passion">
                      Explore student hobbies on display."
                    </p>
                  </div>
                </div>
              </div>
              <a className="gp5-child2" />
              <b className="register-now61">REGISTER NOW</b>
              <img
                className="ai-generators-1200x750-1-icon1"
                alt=""
                src="/aigenerators1200x750-1@2x.png"
              />
            </div>
            <div className="gp69">
              <div className="rectangle-parent59">
                <div className="group-child9" />
                <div className="know-more-parent43">
                  <Link className="know-more59" to="/dark-mode-event-rules">
                    Know more
                  </Link>
                  <div className="society-e-cell-dcrustm-container2">
                    <p className="ignite-your-passion">
                      "Society: E-cell DCRUSTM
                    </p>
                    <p className="ignite-your-passion">Event: Chase the Bid</p>
                    <p className="ignite-your-passion">Location: Unknown"</p>
                  </div>
                </div>
              </div>
              <a className="gp6-child2" />
              <b className="register-now62">REGISTER NOW</b>
              <img
                className="istockphoto-1451097432-612x612-icon1"
                alt=""
                src="/istockphoto1451097432612x612-1@2x.png"
              />
            </div>
            <div className="gp48">
              <div className="gp4-child2" />
              <Link className="know-more60" to="/dark-mode-event-rules">
                Know more
              </Link>
              <div className="hobby-expo-unveiling-container">
                <p className="ignite-your-passion">{`"Hobby Expo: `}</p>
                <p className="ignite-your-passion">
                  Unveiling student passion projects."
                </p>
              </div>
              <a className="gp4-child3" />
              <b className="register-now63">REGISTER NOW</b>
              <img
                className="save-20240213-174936-1-icon1"
                alt=""
                src="/0j5679-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="instagram-group">
          <img className="instagram-icon1" alt="" src="/instagram@2x.png" />
          <img className="linkedin-icon4" alt="" src="/linkedin@2x.png" />
          <img
            className="twitterx-icon1"
            alt=""
            src="/twitterx@2x.png"
            onClick={onTwitterXImageClick}
          />
          <img
            className="facebook-icon1"
            alt=""
            src="/facebook@2x.png"
            onClick={onFacebookImageClick}
          />
        </div>
        <img
          className="dcrust-logo-1-icon5"
          alt=""
          src="/dcrust-logo-1@2x.png"
        />
        <Link className="contact4" to="/dark-mode-contact-us-redirect-page">
          Contact
        </Link>
      </main>
      <div className="footer">
        <div className="background-group">
          <div className="background1" />
          <div className="copyright-technova-2024-group">
            <div className="copyright-technova2">
              @Copyright - Technova 2024
            </div>
            <div className="group-parent3">
              <div className="e-cell-sunshine-dcrust-odc-gds-group">
                <div className="e-cell-sunshine-dcrust-container1">
                  <ol className="e-cell-sunshine-dcrust-odc-gds1">
                    <li className="e-cell1">E-cell</li>
                    <li className="e-cell1">Sunshine</li>
                    <li className="e-cell1">DCRUST ODC</li>
                    <li className="e-cell1">GDSC</li>
                    <li>ThinkBots</li>
                  </ol>
                </div>
                <div className="societal-events1">Societal Events</div>
              </div>
              <div className="cse-electrical-ece-mechanical-group">
                <div className="cse-electrical-ece-container1">
                  <ol className="e-cell-sunshine-dcrust-odc-gds1">
                    <li className="e-cell1">CSE</li>
                    <li className="e-cell1">Electrical</li>
                    <li className="e-cell1">ECE</li>
                    <li className="e-cell1">Mechanical</li>
                    <li className="e-cell1">BME</li>
                  </ol>
                </div>
                <div className="departmental-events1">Departmental Events</div>
              </div>
              <div className="hobby-expo-project-expo-poster-group">
                <div className="e-cell-sunshine-dcrust-container1">
                  <ol className="e-cell-sunshine-dcrust-odc-gds1">
                    <li className="e-cell1">Hobby EXPO</li>
                    <li className="e-cell1">Project EXPO</li>
                    <li>Poster Presentation</li>
                  </ol>
                </div>
                <div className="centralized-events3">Centralized Events</div>
              </div>
            </div>
            <div className="credits1">
              <div className="website-team-designer-container1">
                <p className="ignite-your-passion">{`Website Team `}</p>
                <p className="ignite-your-passion">
                  designer and developer: name
                </p>
                <p className="ignite-your-passion">
                  designer and developer: name
                </p>
              </div>
              <img className="linkedin-icon5" alt="" src="/linkedin@2x.png" />
              <img className="linkedin-icon6" alt="" src="/linkedin@2x.png" />
              <img className="linkedin-icon7" alt="" src="/linkedin@2x.png" />
            </div>
            <div className="row-group">
              <div className="row1">
                <button className="btn1">
                  <div className="title2">Send request</div>
                </button>
                <form className="input8">
                  <div className="placeholder1">Type your query here</div>
                </form>
              </div>
              <div className="title3">Do you have any questions?</div>
            </div>
            <div className="contact-us-group">
              <div className="contact-us2">Contact Us</div>
              <div className="instagram-container">
                <img
                  className="instagram-icon2"
                  alt=""
                  src="/instagram@2x.png"
                />
                <img className="linkedin-icon8" alt="" src="/linkedin@2x.png" />
                <img
                  className="twitterx-icon2"
                  alt=""
                  src="/twitterx@2x.png"
                  onClick={onTwitterXImage1Click}
                />
                <img
                  className="facebook-icon2"
                  alt=""
                  src="/facebook@2x.png"
                  onClick={onFacebookImage1Click}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-2nd">1ST - 2ND APRIL</div>
    </div>
  );
};

export default DarkMode;
