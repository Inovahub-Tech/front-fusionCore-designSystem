import Input from "./Input";

export default {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?type=design&node-id=13-681&mode=design&t=lSXbl0Mp1rsC1ZZ9-0",
    }
  },
  // This component will have an automatically generated Autodocs page
  tags: ['autodocs'],

};

// More on writing stories with args

export const InputWhitLabel = {
  args: {
    label: 'Input',
    type: 'text',
  },
};

export const InputWhiooutLabel = {
  args: {
    type: 'text',
  },
};

export const InputSearch = {
  args: {
    label: 'Input',
    type: 'search',
    placeholder: 'Search',
    icon: "/iconSearch.svg"
  },
};

export const InputPassword = {
  args: {
    label: 'Input',
    type: 'password',
    placeholder: 'Password',
    value: 'password',
  },
};

export const InputValueStates = {
  args: {
    label: 'Input',
    type: 'text',
    placeholder: 'Placeholder',
    valueState: 'Success',
  },
}

export const InputErrorStates = {
  args: {
    label: 'Input',
    type: 'text',
    placeholder: 'Placeholder',
    valueState: 'Error',
    isRequeried: true,
  },
}


export const InputErrorWhitMessage = {
  args: {
    label: 'Input',
    type: 'text',
    placeholder: 'Placeholder',
    value: "Jhon Doe",
    valueState: 'Error',
    isRequeried: true,
    messageError: 'Error al buscar al cliente',
  },
}