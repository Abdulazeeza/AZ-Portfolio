import "./Skills.scss";
import { primaryComponents } from "../../primaryComponents";
// import SkillsLogic from "./SkillsLogic";
// import { useRef } from "react";

const Skills = () => {
  // const ref1 = useRef(null);
  // const { isIntersecting } = SkillsLogic(ref1);

  return (
    <div className="mt-4">
      <h4 className="white--text mb-0">SKILLS AND TOOLS</h4>
      <primaryComponents.Hr />
      <div className="skill-container mt-4">
        <div className="skill-container__item">HTML</div>
        <div className="skill-container__item">CSS</div>
        <div className="skill-container__item">Sass</div>
        <div className="skill-container__item">JavaScript</div>
        <div className="skill-container__item">TypeScript</div>
        <div className="skill-container__item">React</div>
        <div className="skill-container__item">React Native</div>
        <div className="skill-container__item">Redux</div>
        <div className="skill-container__item">Vue</div>
        <div className="skill-container__item">Vuex</div>
        <div className="skill-container__item">Node.js</div>
        <div className="skill-container__item">Express.js</div>
        <div className="skill-container__item">MongoDB</div>
        <div className="skill-container__item">Python</div>
        <div className="skill-container__item">Rest API</div>
        <div className="skill-container__item">GraphQL</div>
        <div className="skill-container__item">Git & Github</div>
        <div className="skill-container__item">CICD Pipeline</div>
        <div className="skill-container__item">Testing (Unit & E2E)</div>
        <div className="skill-container__item">Data Structure & Algorithm</div>
        {/* <div className="skill-item">
          <p className="white--text mb-0">HTML</p>
          <div className="skill-item__progress">
            <primaryComponents.Progress
              progress={isIntersecting ? "100" : "0"}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Skills;
