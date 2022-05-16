import "./Home.scss";
import { secondaryComponents } from "../../components/secondaryComponents";

const Home = () => {
    return (
        <div className="landing-page">
            <a href="" className="download-resume">Download Resume</a>
            <secondaryComponents.IntroSection />
            <secondaryComponents.MainContent />
        </div>
    )
};
export default Home;