import PropTypes from "prop-types";

const Input = (props) => {
  const { className = "" } = props;
  return <input type="text" className={`border p-1 w-3/4 me-4 ${className}`} />;
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Input;
