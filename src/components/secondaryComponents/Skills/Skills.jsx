import "./Skills.scss";
import { primaryComponents } from "../../primaryComponents";
import SkillsLogic from "./SkillsLogic";
import { useRef } from "react";

const Skills = () => {
  const ref1 = useRef(null);
  const { isIntersecting } = SkillsLogic(ref1);

  return (
    <div className="mt-4" ref={ref1}>
      <h4 className="white--text mb-0">SKILLS</h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <div className="skill-item">
          <p className="white--text mb-0">HTML</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "95": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">CSS</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "95": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">JavaScript</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "95": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">React.js</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "95": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">Vue.js</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "95": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">TypeScript</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "90": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">Node.js</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "70": "0"} />
          </div>
        </div>
        <div className="skill-item">
          <p className="white--text mb-0">Python</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress progress={isIntersecting ? "70": "0"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
