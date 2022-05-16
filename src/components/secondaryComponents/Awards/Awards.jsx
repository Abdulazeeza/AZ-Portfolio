import "./Awards.scss";
import { primaryComponents } from "../../primaryComponents";
import { icons } from "../../../assets/icons";

const Awards = () => {
  return (
    <div className="mt-4">
      <h4 className="white--text mb-0">ACHIEVEMENTS AND AWARDS</h4>
      <primaryComponents.Hr />
      <div className="achievement mt-4">
          <img src={icons.starIcon} alt=""/>
          <p>HNGi7 Finalist (2020).</p>
        </div>
        <div className="achievement">
          <img src={icons.starIcon} alt=""/>
          <p>Nanodegree in front-end web development from Udacity (2018).</p>
        </div>
        <div className="achievement">
          <img src={icons.starIcon} alt=""/>
          <p>Huawei certified network associate (HCNA) in 2018.</p>
        </div>
        <div className="achievement">
          <img src={icons.starIcon} alt=""/>
          <p>Certificate of completion in entrepreneurship from HP LIFE (2018).</p>
        </div>
        <div className="achievement">
          <img src={icons.starIcon} alt=""/>
          <p>Best science student in college (2015).</p>
        </div>
        <div className="achievement">
          <img src={icons.starIcon} alt=""/>
          <p>Best in Mathematics, Physics, and Further Mathematics in college (2015).</p>
        </div>
    </div>
  );
};
export default Awards;
