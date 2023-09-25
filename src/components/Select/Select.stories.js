import Select from "./Select";

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
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=2%3A2173&mode=dev",
    },
  },
  // This component will have an automatically generated Autodocs page
  tags: ["autodocs"],
};

// More on writing stories with args

export const SelectPrimary = {
  args: {
    label: "Dropdown label",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
};

export const SelectDisabled = {
  args: {
    label: "Dropdown label",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    disabled: true,
  },
};

export const SelectError = {
  args: {
    label: "Dropdown label",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
    valueState: "Error",
  },
};
