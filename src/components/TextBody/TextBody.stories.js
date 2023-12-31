import TextBody from './TextBody';

export default {
  title: 'components/TextBody',
  component: TextBody,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released',
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=11%3A83&mode=dev",
    }
  },
  tags: ['autodocs']
};

export const TextBodyPrimary = {
  args: {
    children: 'TextBody Principal',
  },
};