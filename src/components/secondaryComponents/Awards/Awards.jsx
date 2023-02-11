import "./Awards.scss";
import { primaryComponents } from "../../primaryComponents";
import { icons } from "../../../assets/icons";

const Awards = () => {
  return (
    <div className="mt-4">
      <h4 className="white--text mb-0">CERTIFICATES AND ACHIEVEMENTS</h4>
      <primaryComponents.Hr />
      <div className="achievement mt-4">
        <img src={icons.starIcon} alt="" />
        <p>Nanodegree in front-end web development from Udacity.</p>
      </div>
      <div className="achievement">
        <img src={icons.starIcon} alt="" />
        <p>HNGi7 Finalist.</p>
      </div>
      <div className="achievement">
        <img src={icons.starIcon} alt="" />
        <p>Huawei certified network associate (HCNA).</p>
      </div>
      <div className="achievement">
        <img src={icons.starIcon} alt="" />
        <p>Certificate of completion in entrepreneurship from HP LIFE.</p>
      </div>
    </div>
  );
};
export default Awards;
