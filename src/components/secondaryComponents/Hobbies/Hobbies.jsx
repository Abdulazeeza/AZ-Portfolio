import "./Hobbies.scss";
import { primaryComponents } from "../../primaryComponents";
import { images } from "../../../assets/images";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h4 className="purple--text mb-0" style={{fontWeight: "600"}}>Hobbies</h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <ul>
            <li>Playing Football<img className="ml-2" width="20px" src={images.ball} alt=""/></li>
            <li>Learning and exploring new things</li>
        </ul>
      </div>
    </div>
  );
};
export default Hobbies;
