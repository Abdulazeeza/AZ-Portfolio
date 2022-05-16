import "./Home.scss";
import { secondaryComponents } from "../../components/secondaryComponents";

const Home = () => {
  return (
    <div className="landing-page">
      <a
        href="https://drive.google.com/file/d/13NHhpQKkfuSmllM9EZVsaO2NVJb1uNau/view?usp=sharing"
        target="_blank"
        className="download-resume"
        rel="noreferrer"
      >
        Download Resume
      </a>
      <secondaryComponents.IntroSection />
      <secondaryComponents.MainContent />
    </div>
  );
};
export default Home;
