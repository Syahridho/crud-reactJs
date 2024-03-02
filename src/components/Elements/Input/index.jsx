import PropTypes from "prop-types";

const Input = (props) => {
  const { className = "", value = "", name, onChange = () => {} } = props;
  return (
    <input
      type="text"
      name={name}
      className={`border p-1 w-3/4 me-4 ${className}`}
      defaultValue={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
