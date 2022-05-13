/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({
  children,
  isLoading,
  loadingText,
  classNames,
  onClick,
  isDisabled,
}) => {
  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {isLoading ? (
        <span className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={["fas", "spinner"]}
            className="fa-spin purple--text me-3"
            style={{ fontSize: "25px" }}
          />
          {loadingText}
        </span>
      ) : (
        <span className="d-flex align-items-center">{children}</span>
      )}
    </button>
  );
};

export default Button;
