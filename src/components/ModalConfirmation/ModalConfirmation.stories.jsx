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
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=36%3A11109&mode=dev",
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
    onClickCancel: () => {
      alert("Cancelado");
    },
    onClickConfirm: () => {
      alert("Deshabilitado");
    },
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
    onClickCancel: () => {
      alert("Cancelado");
    },
    onClickConfirm: () => {
      alert("Eliminado");
    },
  },
};
