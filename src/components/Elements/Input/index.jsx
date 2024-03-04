import PropTypes from "prop-types";

const Input = (props) => {
  const {
    className = "",
    value = "",
    defaultValue = "",
    name,
    onChange = () => {},
  } = props;
  return (
    <input
      type="text"
      name={name}
      className={`border p-1 rounded w-full ${className}`}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
