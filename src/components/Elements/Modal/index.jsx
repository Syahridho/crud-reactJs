import PropTypes from "prop-types";

const Modal = (props) => {
  const { children } = props;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center ">
      <div className="bg-white p-8 rounded max-w-96 max-h-96 border opacity-100 ">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
