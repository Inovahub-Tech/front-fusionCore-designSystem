import Select from "./Select";
import { dataOptions, transformForSelect } from "./utils/data/data";

export default {
  title: "components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    status: {
      type: "released", // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=16%3A6286&mode=dev",
    },
  },
  // This component will have an automatically generated Autodocs page
  tags: ["autodocs"],
};

// More on writing stories with args


export const SelectPrimary = {
  args: {
    label: "Dropdown label",
    options: transformForSelect(dataOptions || [], "name", "code"),
    placeholderText: "Selecciona una opcion",

  },
};

export const SelectDataValue = {
  args: {
    label: "Dropdown label",
    options: transformForSelect(dataOptions || [], "name", "code"),
    placeholderText: "Selecciona una opcion",
    value: "op2",
  },
};

export const SelectDisabled = {
  args: {
    label: "Dropdown label",
    options: transformForSelect(dataOptions || [], "name", "code"),
    disabled: true,
    placeholderText: "Selecciona una opcion",

  },
};

export const SelectError = {
  args: {
    label: "Dropdown label",
    options: transformForSelect(dataOptions || [], "name", "code"),
    valueState: "Error",
    placeholderText: "Selecciona una opcion",

  },
};

export const SelectSuccess = {
  args: {
    label: "Dropdown label",
    options: transformForSelect(dataOptions || [], "name", "code"),
    valueState: "Success",
    placeholderText: "Selecciona una opcion",

  },
};


