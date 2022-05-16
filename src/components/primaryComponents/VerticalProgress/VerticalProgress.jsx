import "./VerticalProgress.scss";

const VerticalProgress = ({ children, last = false }) => {
  return (
    <div className="vertical-progress">
      <div className={`vertical-progress__line ${last ? "last" : ""}`}></div>
      <div className="children">{children}</div>
    </div>
  );
};
export default VerticalProgress;
