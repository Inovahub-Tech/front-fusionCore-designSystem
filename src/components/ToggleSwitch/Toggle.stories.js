import { ToggleSwitch } from "./ToggleSwitch";


export default {
  title: 'components/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released', // 'beta' | 'deprecated' | 'experimental' | 'released'
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=42%3A17602&mode=dev",
    }
  },
  // This component will have an automatically generated Autodocs page
  tags: ['autodocs'],
  argTypes: {
  }
};

// More on writing stories with args
export const Primary = {
  args: {
    label: 'Toggle',
  },
};

