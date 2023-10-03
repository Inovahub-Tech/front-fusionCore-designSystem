import { useModal } from "../../hooks/useModal";
import { XIcon, TrashIcon, MinusCircleIcon } from "@heroicons/react/outline";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

const Modals = ({
  typeModal,
  titleMessage,
  detail: Detail,
  cancelLabel,
  confirmLabel,
  onClickCancel,
  onClickConfirm,
}) => {
  const [isOpenModal, closeModal] = useModal(true);

  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <div className="flex justify-center text-center">
        <div className="flex flex-col w-full items-center ml-5 gap-3">
          <div>
            {typeModal === "danger" && (
              <TrashIcon className="w-8 h-8 text-danger" />
            )}
            {typeModal === "warning" && (
              <MinusCircleIcon className="w-8 h-8 text-warning" />
            )}
          </div>
          <h3 className="text-2xl font-bold leading-normal">{titleMessage}</h3>
          <Detail />
        </div>
        <div className="flex flex-col self-start">
          <button onClick={closeModal}>
            <XIcon className="w-5 h-5 text-chineseSilver" />
          </button>
        </div>
      </div>
      <div className="flex gap-3 pt-7">
        <Button
          buttonStyle="normal"
          label={cancelLabel}
          onClick={onClickCancel}
          backgroundColor="white"
          color="gray"
          borderColor="gray"
          size="large"
        ></Button>
        <Button
          buttonStyle="normal"
          backgroundColor={typeModal}
          size="large"
          label={confirmLabel}
          color="white"
          onClick={onClickConfirm}
        ></Button>
      </div>
    </Modal>
  );
};

Modals.propTypes = {
  typeModal: PropTypes.oneOf(["danger", "warning"]),
  titleMessage: PropTypes.string.isRequired,
  detail: PropTypes.elementType.isRequired,
  cancelLabel: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickConfirm: PropTypes.func.isRequired,
};

export default Modals;
