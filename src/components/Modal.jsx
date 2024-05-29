import PropTypes from "prop-types";

const Modal = ({ children, show }) => {
  return (
    show && (
      <div
        className={`grid fixed top-0 left-0 h-screen w-screen bg-[#101828B2] px-3 text-center z-50 font-verdana`}
      >
        <div className="m-auto w-fit h-fit bg-primary px-6 py-10 rounded-md overflow-hidden max-w-[90vw] sm:max-w-[70vw] md:max-w-[22rem] max-h-[90vh] overflow-y-auto shadow-[0px_8px_8px_-4px_#10182808,0px_20px_24px_-4px_#10182814]">
          {children}
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
};

export default Modal;
