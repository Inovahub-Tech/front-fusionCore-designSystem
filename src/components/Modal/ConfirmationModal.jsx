import { useModal } from "../../hooks/useModal";
import { XIcon, DocumentAddIcon } from "@heroicons/react/outline";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal, closeModal] = useModal(true);

  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <div className="flex justify-center">
        <div className="flex flex-col w-full items-center ml-5">
          <div>
            <DocumentAddIcon className="w-8 h-8 text-black" />
          </div>
          <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </div>
        <div className="flex flex-col self-start">
          <button onClick={closeModal}>
            <XIcon className="w-5 h-5 text-chineseSilver" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
