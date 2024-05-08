"use client";
import { createContext, useState} from "react";



export const ModalContext = createContext<ModalContextValue>({isOpen: false, setIsOpen: () => {}});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
