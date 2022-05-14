import "./IntroSection.scss";
import { icons } from "../../../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-section__bottom-box"></div>
      <div className="intro-section__content">
        <div className="profile"></div>
        <div className="bio">
          <h1 className="mb-0">
            <span className="white--text">Abdulazeez</span>
            <span className="purple--text ml-3">Aiyeleso</span>
          </h1>
          <h3 className="white--text mb-0">Senior Front-end Engineer</h3>
          <hr />

          <div className="bio__contact mt-4">
            <span className="bio__contact__item">
              <span className="contact-icon">
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  className=""
                />
              </span>
              <span className="white--text ml-2">+234 9013 289 338</span>
            </span>
            <span className="ml-4 bio__contact__item">
              <span className="contact-icon">
              <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  className=""
                />
              </span>
              <span className="white--text ml-2">azeezaiydev@gmail.com</span>
            </span>
          </div>
        </div>
      </div>
      <div className="social-medias">
        <a
          href="https://twitter.com/Abdulazeeza180"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icons.twitterIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulazeez-abdulazeez-219754171/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icons.linkedInIcon} alt="" />
        </a>
        <a
          href="https://github.com/Abdulazeeza"
          target="_blank"
          rel="noreferrer"
        >
          <img src={icons.githubIcon} alt="" />
        </a>
      </div>
    </div>
  );
};
export default IntroSection;
