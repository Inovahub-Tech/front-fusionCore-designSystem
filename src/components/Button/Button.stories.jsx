import { Button } from "./Button";

import { PlusCircleIcon, PlusIcon } from "@heroicons/react/24/outline";


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
    icon: <PlusCircleIcon />,
  },
};

export const ButtonWarning = {
  args: {
    label: 'Button',
    backgroundColor: 'warning',
    color: "white"
  },
};

export const ButtonDanger = {
  args: {
    label: 'Button',
    backgroundColor: 'danger',
    color: "white"
  },
};

export const ButtonOnlyIcon = {
  args: {
    icon: <PlusIcon />,
    color: 'white',
    onlyIcon: true,
    backgroundColor: 'primary',
    size: "medium",
  },
};

export const ButtonCancel = {
  args: {
    label: 'Button',
    buttonStyle: 'normal',
    backgroundColor: 'white',
    color: 'gray',
    borderColor: 'gray',
  },
};






