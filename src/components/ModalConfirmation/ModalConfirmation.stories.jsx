import ConfirmationModal from "./ConfirmationModal";

export default {
  title: "components/ModalConfirmation",
  component: ConfirmationModal,
  parameters: {
    layout: "centered",
    status: {
      type: "released",
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=28%3A269&mode=dev",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: { type: "select", options: ["/assets/iconAdd.svg"] },
    },
  },
};

export const ModalWarning = {
  args: {
    typeModal: "warning",
    titleMessage: "Deshabilitar usuario",
    detail: () => {
      return (
        <p className="text-base font-normal">
          Estás a punto de deshabilitar al usuario <b>John Doe</b> ¿Estás seguro
          que quieres realizar esta acción?
        </p>
      );
    },
    cancelLabel: "Cancelar",
    confirmLabel: "Deshabilitar",
  },
};

export const ModalDanger = {
  args: {
    typeModal: "danger",
    titleMessage: "Eliminar usuario",
    detail: () => {
      return (
        <p className="text-base font-normal">
          ¿Estás seguro que quieres Eliminar al usuario <b>John Doe</b>?
        </p>
      );
    },
    cancelLabel: "Cancelar",
    confirmLabel: "Eliminar",
  },
};
