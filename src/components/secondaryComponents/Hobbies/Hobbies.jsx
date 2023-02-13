import "./Hobbies.scss";
import { primaryComponents } from "../../primaryComponents";

const Hobbies = () => {
  return (
    <div className="hobbies mt-4">
      <h4 className="purple--text mb-0" style={{ fontWeight: "600" }}>
        INTEREST
      </h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <ul>
          <li>
            I enjoy exploring and learning new things, as well as playing soccer
            and playing video games on the side
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Hobbies;
