import TextField from "./TextField";

export default {
  title: 'components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=2%3A2173&mode=dev",
    }
  },
  // This component will have an automatically generated Autodocs page
  tags: ['autodocs'],

};

// More on writing stories with args

export const TextFieldPrimary = {
  args: {
    label: "Text input label",
    placeholder: "Escribe",
  }
}

export const TextFieldValueState = {
  args: {
    label: "Text input label",
    placeholder: "Escribe",
    valueState: "Error"
  }
}

export const TextFieldDisabled = {
  args: {
    label: "Text input label",
    placeholder: "Escribe",
    disabled: true
  }
}




