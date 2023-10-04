import Title from './Title';

export default {
  title: 'components/Title',
  component: Title,
  parameters: {
    layout: 'centered',
    status: {
      type: 'released',
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=28%3A269&mode=dev",
    }
  },
  tags: ['autodocs']
};

export const TitlePrimary = {
  args: {
    children: 'Title Principal',
  },
};