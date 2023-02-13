import "./Projects.scss";
import { primaryComponents } from "../../primaryComponents";

const Experience = () => {
  return (
    <div className="projects mt-3">
      <h4 className="purple--text mb-0" style={{ fontWeight: "600" }}>
        PROJECTS
      </h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <ul>
          <li>
            Lumi Business -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://www.lumibusiness.io"
            >
              https://www.lumibusiness.io
            </a>
          </li>
          <li>
            Insiight -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://www.insiight.io"
            >
              https://www.insiight.io
            </a>
          </li>
          <li>
            Lumi Rewards -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://getlumi.io"
            >
              https://getlumi.io
            </a>
          </li>
          <li>
            Kuuzza -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://kuuzza.com"
            >
              https://kuuzza.com
            </a>
          </li>
          <li>
            Enlumi Data -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://www.enlumidata.com"
            >
              https://www.enlumidata.com
            </a>
          </li>
          <li>
            Arcade Game -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://herro-game.netlify.app"
            >
              https://herro-game.netlify.app
            </a>
          </li>
          <li>
            Memory Game -{" "}
            <a
              className="purple--text"
              target="_blank"
              rel="noreferrer"
              href="https://herro-game.netlify.app"
            >
              https://herro-game.netlify.app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
