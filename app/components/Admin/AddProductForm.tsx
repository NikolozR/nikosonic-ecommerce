"use client";
import Input from "../shared/Input";
import Button from "../shared/Button";
import React, { useEffect, useRef, useState } from "react";
import { handleProductAddSubmit } from "../../actions";
import FileUpload from "../shared/FileUpload";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
function AddProductForm() {
  const [multipleFileWrongSize, setMultipleFileWrongSize] = useState(false);
  const [fileWrongSize, setFileWrongSize] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const galleryFilesInputRef = useRef<HTMLInputElement>(null);
  const thumbnailFileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectValue, setSelectValue] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const [adding, setAdding] = useState(false);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    if (message !== null) {
      onOpen();
      const timer = setTimeout(() => {
        onClose();
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return;
  }, [message, onOpen, onClose]);

  const handleFileChangeMultiple = () => {
    const imageFiles =
      galleryFilesInputRef.current && galleryFilesInputRef.current.files;
    const isFileSizeExceeded = Array.from(imageFiles ?? []).some(
      (file) => file.size > 4.5 * 1024 * 1024
    );
    setMultipleFileWrongSize(isFileSizeExceeded);
    setSelectedFiles(imageFiles);
  };
  const handleFileChange = () => {
    const imageFiles =
      thumbnailFileInputRef.current && thumbnailFileInputRef.current.files;
    const isFileSizeExceeded = Array.from(imageFiles ?? []).some(
      (file) => file.size > 4.5 * 1024 * 1024
    );
    setFileWrongSize(isFileSizeExceeded);
    setSelectedFile(imageFiles && imageFiles[0]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAdding(true);
    setMessage(null);
    const formData = new FormData(event.currentTarget);
    try {
      await handleProductAddSubmit(formData);
      setMessage("Product added successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
      if (galleryFilesInputRef.current) {
        galleryFilesInputRef.current.value = "";
      }
      if (thumbnailFileInputRef.current) {
        thumbnailFileInputRef.current.value = "";
      }
      setSelectedFile(null);
      setSelectedFile(null);
      setSelectValue("");
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.error("Failed to add product", error);
      setMessage("Failed to add product.");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="container">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mb-[100px] flex flex-col gap-[100px] items-center"
      >
        <div className="flex w-[80%] justify-between gap-[150px]">
          <div className="w-[42%] flex flex-col gap-5">
            <FileUpload
              handleFileChange={handleFileChange}
              ref={thumbnailFileInputRef}
              selectedFile={selectedFile}
              fileWrongSize={fileWrongSize}
              placeholder="Browse Product Thumbnail"
            ></FileUpload>
            <FileUpload
              multiple
              handleFileChange={handleFileChangeMultiple}
              ref={galleryFilesInputRef}
              selectedFiles={selectedFiles}
              fileWrongSize={multipleFileWrongSize}
              placeholder="Browse Product Gallery"
            ></FileUpload>
            <label
              htmlFor="description"
              className="font-bold flex-1 text-[#6C7275] text-[0.75rem] flex flex-col gap-[12px]"
            >
              DESCRIPTION
              <textarea
                className="border-[1px] text-gray-800 dark:text-white resize-none h-full placeholder:font-normal font-bold border-solid text-[1rem] p-[10px] border-[#CBCBCB] outline-none rounded-xl"
                name="description"
                id="description"
                required
              />
            </label>
          </div>
          <div className="flex flex-col flex-1 gap-[30px]">
            <Input label="Product Name" inputClassName="dark:text-white" name="name" type="text" required />
            <Input label="Brand" inputClassName="dark:text-white" name="brand" type="text" required />
            <Input label="Price" inputClassName="dark:text-white" name="price" type="number" required />
            <Input label="Color" inputClassName="dark:text-white" name="color" type="text" required />
            <select
              name="category"
              id="category"
              className="border cursor-pointer text-[#6C7275] border-[#CBCBCB] rounded-md px-3 py-2 focus:outline-none "
              required
              value={selectValue ?? ""}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="" disabled className="text-gray-300">
                Select Category
              </option>
              <option value="headband">Headband</option>
              <option value="earbud">Earbud</option>
              <option value="earphone">Earphone</option>
            </select>
          </div>
        </div>
        <Button
          type="submit"
          fontSize="1rem"
          leading="28px"
          padding="px-[40px] py-[12px]"
          className="mx-auto"
          disabled={fileWrongSize || adding || multipleFileWrongSize}
        >
          {adding ? "Submitting..." : "Submit"}
        </Button>
      </form>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Submission Status
              </ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  fontSize="1rem"
                  padding="px-[12px] py-[6px]"
                  type="button"
                  handleClick={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddProductForm;
