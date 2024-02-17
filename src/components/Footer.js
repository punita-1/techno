import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  dimensionsText,
  titleTop,
  onTwitterXImageClick,
  onFacebookImageClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: titleTop,
    };
  }, [titleTop]);

  return (
    <div className="footer1" style={footerStyle}>
      <div className="background-container">
        <div className="background2" />
        <div className="copyright-technova-2024-container">
          <div className="copyright-technova3">@Copyright - Technova 2024</div>
          <div className="group-parent4">
            <div className="e-cell-sunshine-dcrust-odc-gds-container">
              <div className="e-cell-sunshine-dcrust-container2">
                <ol className="e-cell-sunshine-dcrust-odc-gds2">
                  <li className="e-cell2">E-cell</li>
                  <li className="e-cell2">Sunshine</li>
                  <li className="e-cell2">DCRUST ODC</li>
                  <li className="e-cell2">GDSC</li>
                  <li>ThinkBots</li>
                </ol>
              </div>
              <div className="societal-events2">Societal Events</div>
            </div>
            <div className="cse-electrical-ece-mechanical-container">
              <div className="cse-electrical-ece-container2">
                <ol className="e-cell-sunshine-dcrust-odc-gds2">
                  <li className="e-cell2">CSE</li>
                  <li className="e-cell2">Electrical</li>
                  <li className="e-cell2">ECE</li>
                  <li className="e-cell2">Mechanical</li>
                  <li className="e-cell2">BME</li>
                </ol>
              </div>
              <div className="departmental-events2">Departmental Events</div>
            </div>
            <div className="hobby-expo-project-expo-poster-container">
              <div className="hobby-expo-project-container2">
                <ol className="e-cell-sunshine-dcrust-odc-gds2">
                  <li className="e-cell2">Hobby EXPO</li>
                  <li className="e-cell2">Project EXPO</li>
                  <li>Poster Presentation</li>
                </ol>
              </div>
              <div className="centralized-events4">Centralized Events</div>
            </div>
          </div>
          <div className="credits2">
            <div className="website-team-designer-container2">
              <p className="website-team2">{`Website Team `}</p>
              <p className="website-team2">designer and developer: name</p>
              <p className="website-team2">designer and developer: name</p>
            </div>
            <img className="linkedin-icon9" alt="" src="/linkedin@2x.png" />
            <img className="linkedin-icon10" alt="" src="/linkedin@2x.png" />
            <img className="linkedin-icon11" alt="" src="/linkedin@2x.png" />
          </div>
          <div className="row-container">
            <div className="row2">
              <div className="btn2">
                <div className="title4">Send request</div>
              </div>
              <div className="input9">
                <div className="placeholder2">Type your query here</div>
              </div>
            </div>
            <div className="title5">Do you have any questions?</div>
          </div>
          <div className="contact-us-container">
            <div className="contact-us3">Contact Us</div>
            <div className="instagram-parent1">
              <img className="instagram-icon3" alt="" src="/instagram@2x.png" />
              <img className="linkedin-icon12" alt="" src={dimensionsText} />
              <img
                className="twitterx-icon3"
                alt=""
                src="/twitterx@2x.png"
                onClick={onTwitterXImageClick}
              />
              <img
                className="facebook-icon3"
                alt=""
                src="/facebook@2x.png"
                onClick={onFacebookImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
