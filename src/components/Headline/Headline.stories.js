import Headline from './Headline';

export default {
  title: 'components/Headline',
  component: Headline,
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

export const HeadlinePrimary = {
  args: {
    children: 'Headline Principal',
  },
};