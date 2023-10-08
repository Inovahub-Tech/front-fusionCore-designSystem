import { useModal } from "../../hooks/useModal";
import {
  XMarkIcon,
  TrashIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import Headline from "../Headline/Headline";

/**
 * Modal Alert Component
 *
 * This component is used to display alerts or important messages in the user interface.
 * It provides consistent layout and customization options for different types of alerts.
 * It also provides a set of default props that can be used to customize the alert component.
 * */

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
          <Headline variant="head" weight="bold" theme="black">
            {titleMessage}
          </Headline>
          <Detail />
        </div>
        <div className="flex flex-col self-start">
          <button onClick={closeModal}>
            <XMarkIcon className="w-7 h-7 text-chineseSilver hover:text-gray" />
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
          className={"flex justify-center h-12 rounded-[1.25rem]"}
        ></Button>
        <Button
          buttonStyle="normal"
          backgroundColor={typeModal}
          label={confirmLabel}
          color="white"
          onClick={onClickConfirm}
          className={"flex justify-center h-12 rounded-[1.25rem]"}
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
