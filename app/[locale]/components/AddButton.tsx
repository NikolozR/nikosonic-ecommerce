'use client'
import { ModalContext } from "../../providers/ModalProvider";
import { useContext } from "react";

function AddButton() {
  const { setIsOpen } = useContext(ModalContext);
  return <button className="dark:text-white " onClick={() => setIsOpen(true)}>Add User</button>;
}

export default AddButton;
