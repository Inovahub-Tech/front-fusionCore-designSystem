import { Button } from "./Button";


export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=28%3A269&mode=dev",
    }
  },
  // This component will have an automatically generated Autodocs page
  tags: ['autodocs'],

};

// More on writing stories with args

export const ButtonFilled = {
  args: {
    label: 'Button',
    backgroundColor: 'primary',
    color: 'white',
  },
};

export const ButtonOutlined = {
  args: {
    label: 'Button',
    backgroundColor: 'white',
    color: 'primary',
    borderColor: 'primary',
  },
};

export const ButtonDisabled = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const ButtonWithIcon = {
  args: {
    label: 'Button',
    backgroundColor: 'primary',
    color: 'white',
    icon: '/iconAdd.svg',
  },
};

export const ButtonOnlyIcon = {
  args: {
    icon: '/iconAdd.svg',
    onlyIcon: true,
    backgroundColor: 'primary',
  },
};






