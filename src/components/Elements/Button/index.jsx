import PropTypes from "prop-types";

const Button = (props) => {
  const { children, variant, className = "", onClick = () => {} } = props;
  return (
    <button
      type="button"
      className={`${variant} text-white py-1.5 px-2 rounded shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
