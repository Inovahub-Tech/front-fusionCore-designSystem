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
  argTypes: {
    image: {
      control: { type: 'select', options: ['/assets/iconAdd.svg'] },
    },
  }
};

// More on writing stories with args
export const Primary = {
  args: {
    label: 'Button',
  },
};

export const ButtonFilled = {
  args: {
    label: 'Button',
    buttonStyle: 'filled',
  },
};

export const Buttonoutlined = {
  args: {
    label: 'Button',
    buttonStyle: 'outlined',
  },
};

export const Buttondisabled = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const ButtonWithIcon = {
  args: {
    label: 'Button',
    icon: '/iconAdd.svg',
  },
};

export const ButtonOnlyIcon = {
  args: {
    icon: '/iconAdd.svg',
    onlyIcon: true,
  },
};






