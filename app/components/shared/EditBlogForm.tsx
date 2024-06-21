"use client";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useEffect, useOptimistic, useRef, useState } from "react";
import { handleBlogUpdate } from "../../actions";
import FileUpload from "../shared/FileUpload";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button as NextUIButton,
  useDisclosure,
} from "@nextui-org/react";

function EditBlogForm({ blog }: { blog: Blog }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [optimisticBlog, updateOptimisticBlog] = useOptimistic(
    blog,
    (
      blog: Blog,
      action: { title: string; content: string; thumbnail_url: string }
    ) => {
      return {
        ...blog,
        title: action.title,
        content: action.content,
        thumbnail_url: action.thumbnail_url,
      };
    }
  );
  const [fileWrongSize, setFileWrongSize] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const thumbnailFileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const [adding, setAdding] = useState(false);

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
    updateOptimisticBlog({
      title: formData.get("title")?.toString() ?? "",
      content: formData.get("content")?.toString() ?? "",
      thumbnail_url: selectedFile
        ? URL.createObjectURL(selectedFile)
        : optimisticBlog.thumbnail_url,
    });
    try {
      await handleBlogUpdate(formData, blog.blog_id);
      setMessage("Blog Updated Successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
      setSelectedFile(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (error) {
      console.error("Failed to update blog", error);
      setMessage("Failed to update blog");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="container">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mb-[100px] flex flex-col gap-[100px] min-h-[750px] mt-[40px] items-center"
      >
        <div className="flex w-full flex-1 justify-between gap-[100px]">
          <div className="flex-1 flex flex-col gap-[40px]">
            <div className="relative w-full h-[500px]">
              <Image
                fill
                className="object-cover"
                src={
                  selectedFile
                    ? URL.createObjectURL(selectedFile)
                    : optimisticBlog.thumbnail_url
                }
                alt="Default Thumbnail"
              />
            </div>
            <div>
              <FileUpload
                handleFileChange={handleFileChange}
                ref={thumbnailFileInputRef}
                selectedFile={selectedFile}
                fileWrongSize={fileWrongSize}
                placeholder="Browse Blog Post Thumbnail"
              />
            </div>
          </div>
          <div className="w-[50%] flex mx-auto flex-col gap-5">
            <Input
              name="title"
              required
              placeHolder="Blog Title..."
              defaultValue={optimisticBlog.title}
              label="Blog Title"
              labelClassName="text-[#6C7275] text-[0.75rem] font-bold "
            ></Input>
            <label
              htmlFor="content"
              className="font-bold flex-1 text-[#6C7275] text-[0.75rem] flex flex-col gap-[12px]"
            >
              BLOG
              <textarea
                className="border-[1px] flex-1 leading-[24px] text-gray-800 resize-none h-[350px] placeholder:font-normal font-bold border-solid text-[1rem] p-[10px] border-[#CBCBCB] outline-none rounded-xl"
                name="content"
                id="content"
                defaultValue={optimisticBlog.content}
                required
              />
            </label>
          </div>
        </div>
        <Button
          type="submit"
          fontSize="1rem"
          leading="28px"
          padding="px-[40px] py-[12px]"
          className="mx-auto"
          disabled={fileWrongSize || adding}
        >
          {adding ? "Updating Blog..." : "Update Blog"}
        </Button>
        {message &&
          (message.split(" ")[0] === "Failed" ? (
            <p className="text-red-600 mt-4">{message}</p>
          ) : (
            <p className="text-green-600 mt-4">{message}</p>
          ))}
      </form>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Status
              </ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <NextUIButton color="danger" variant="light" onPress={onClose}>
                  Close
                </NextUIButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default EditBlogForm;
