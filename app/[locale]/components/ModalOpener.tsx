"use client";
import { useState } from "react";
import Modal from "./Modal";

function ModalOpener({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "add" | "edit";
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {type === "add" ? (
        <button onClick={() => setIsOpen(true)}>+</button>
      ) : (
        <button onClick={() => setIsOpen(true)}>edit</button>
      )}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>
    </>
  );
}

export default ModalOpener;
