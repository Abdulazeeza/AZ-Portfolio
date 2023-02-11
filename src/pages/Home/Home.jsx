import "./Home.scss";
import { secondaryComponents } from "../../components/secondaryComponents";

const Home = () => {
  return (
    <div className="landing-page">
      <a
        href="https://drive.google.com/file/d/1nGsMuzk9LGv4vxPaLTLOITF8dUADWEhH/view?usp=share_link"
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
