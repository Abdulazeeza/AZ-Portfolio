import "./MainContent.scss";
import { secondaryComponents } from "..";

const MainContent = () => {
  return (
    <main className="landing-page__main">
      <div className="landing-page__main__left">
        <div className="box-design"></div>
        <secondaryComponents.AboutMe />
        <secondaryComponents.Skills />
        {/* shows on desktop */}
        <div className="awards">
          <secondaryComponents.Awards />
        </div>
      </div>
      <div className="landing-page__main__right">
        <secondaryComponents.Experience />
        <secondaryComponents.Education />
        <secondaryComponents.Projects />
        <secondaryComponents.Hobbies />
        {/* show on tablet downwards */}
        <div className="awards">
          <secondaryComponents.Awards />
        </div>
        {/* <div className="mt-4 text-center">
          <span className="purple--text">
            Inspired by <span className="dark--text">Zuri Remote</span>
          </span>
        </div> */}
      </div>
    </main>
  );
};
export default MainContent;
