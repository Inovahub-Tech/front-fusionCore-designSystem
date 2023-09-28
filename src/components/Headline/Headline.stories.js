import React from 'react';
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
      url: "https://www.figma.com/file/OlpApHLkO9ynQq4FfUeDkI/Fusion-Core?node-id=28%3A269&mode=dev",
    }
  },
  tags: ['autodocs']
};

export const HeadlinePrimary = {
  args: {
    variant: 'headline',
    children: 'Headline Principal',
  },
};