import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Modal = (props) => {
  const { children, onClose } = props;
  const ref = useRef();
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.addEventListener("mousedown", handleClickOutSide);
    };
  }, [onClose]);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center ">
      <div
        className="bg-white p-8 rounded max-w-96 max-h-96 border opacity-100"
        ref={ref}
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
