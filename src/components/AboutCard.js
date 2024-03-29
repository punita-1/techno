import { useEffect } from "react";
import "./AboutCard.css";

const AboutCard = () => {
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
  return (
    <section className="about1">
      <div className="about-child" />
      <img
        className="body-of-this-section"
        alt=""
        src="/body-of-this-section@2x.png"
        data-animate-on-scroll
      />
      <div className="about-technova">
        <div className="about-technova1">About Technova</div>
        <div className="about-technova-child" />
        <div className="welcome-to-technova" data-animate-on-scroll>
          Welcome to Technova - an exciting celebration of innovation,
          creativity, and teamwork! Dive into a variety of events showcasing the
          best in technology, creativity, and talent. Discover a range of
          activities, from captivating displays at our central events to
          skillful competitions organized by departments and engaging
          initiatives by university societies. Don't miss out on this chance to
          be part of something extraordinary. Join us at Technova, and together,
          let's embark on a journey of discovery, innovation, and endless
          opportunities!
        </div>
        <div className="explore-the-events">Explore The Events</div>
      </div>
      <div className="why-join-us">
        <div className="opportunity-text">
          <div className="opportunity">Opportunity</div>
          <div className="about-technova-child" />
          <div className="opportunity-for-personal-container">
            <p className="opportunity-for-personal">{`Opportunity for personal and professional growth. `}</p>
            <p className="opportunity-for-personal">
              <span>Networking with peers and industry professionals.</span>
              <span className="span">{` `}</span>
            </p>
          </div>
        </div>
        <div className="recognition-text">
          <div className="opportunity">Recognition</div>
          <div className="about-technova-child" />
          <div className="hands-on-experiential-learning-container">
            <p className="opportunity-for-personal">
              Hands-on experiential learning.
            </p>
            <p className="opportunity-for-personal">
              Recognition and rewards for achievements.
            </p>
          </div>
        </div>
        <div className="education-text">
          <div className="education">Education</div>
          <div className="about-technova-child" />
          <div className="inspiration-to-think-container">
            <p className="opportunity-for-personal">
              Inspiration to think creatively and pursue innovation.
            </p>
            <p className="opportunity-for-personal">
              Community engagement and collaboration.
            </p>
          </div>
        </div>
        <div className="why-join-us1" data-animate-on-scroll>
          Why join us?
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
