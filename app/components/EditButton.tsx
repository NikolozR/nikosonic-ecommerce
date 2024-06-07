'use client'
import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

function EditButton() {
    const {setIsOpen} = useContext(ModalContext)
  return (
    <button onClick={() => setIsOpen(true)}>edit</button>
  )
}

export default EditButton