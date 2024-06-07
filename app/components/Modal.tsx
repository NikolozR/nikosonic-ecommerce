"use client";
import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

function Modal({children}: childrenProps) {
  const {isOpen, setIsOpen} = useContext(ModalContext)
  return (
    <div
      className={
        "fixed left-0 top-0 w-full h-full justify-center items-start z-50 overflow-auto bg-[rgba(0,0,0,0.4)]" +
        (isOpen ? " flex" : " hidden")
      }
    >
      <div className="relative bg-white dark:bg-neutral-7 w-[50%] p-20 mt-40">
        <div
          className="absolute top-4 right-4 cursor-pointer font-bold"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
