import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const closeModal = () => setIsOpen(false);

  return [isOpen, closeModal];
};