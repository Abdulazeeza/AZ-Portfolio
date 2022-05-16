import { primaryComponents } from "../../primaryComponents";

const Education = () => {
  return (
    <div>
      <h4 className="purple--text mb-0" style={{fontWeight: "600"}}>EDUCATION</h4>
      <primaryComponents.Hr />
      <div className="mt-4">
        <primaryComponents.VerticalProgress>
          <h6 className="dark--text mb-0">2018</h6>
          <p className="dark--text mb-0">
            Nanodegree in Frontend development from Udacity.
          </p>
        </primaryComponents.VerticalProgress>
        <primaryComponents.VerticalProgress last={true}>
          <h6 className="dark--text mb-0">2015 - 2020</h6>
          <p className="dark--text mb-0">
            Bachelor's degree in Telecommunication Engineering from Federal University of Technology Minna.
          </p>
        </primaryComponents.VerticalProgress>
      </div>
    </div>
  );
};
export default Education;
