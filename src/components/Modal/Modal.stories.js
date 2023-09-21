import React, { useState } from 'react';
import { useModal } from "../../hooks/useModal";
import Modals from './ConfirmationModal';

export default {
  title: 'components/Popup',
  component: Modals,
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
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: { type: 'select', options: ['/assets/iconAdd.svg'] },
    },
  }
};

export const Primary = {
  args: {},
};