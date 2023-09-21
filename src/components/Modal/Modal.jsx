import PropTypes from "prop-types";

const Modal = ({ children, onClose }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <section className="flex" onClick={onClose}>
      <div
        className="box-border w-screen h-screen fixed top-0 left-0 z-20 flex justify-center items-center bg-black bg-opacity-30"
        onClick={handleModalContainerClick}
      >
        <div className="bg-lotion w-full rounded-2xl px-6 py-5 max-w-md">
          {children}
        </div>
      </div>
    </section>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
