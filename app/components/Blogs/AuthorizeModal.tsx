"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Button from "../shared/Button";

export default function AuthorizeModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button type="button" handleClick={onOpen} fontSize="1.125rem" padding="px-[56px] py-[12px]">
        <p>Create Your Blog</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <h3 className="text-xl font-semibold mx-auto pt-[40px]">
                  Authorization Required
                </h3>
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-center p-[60px] pt-[20px]">
                <p className="mb-6 text-center text-gray-600 leading-[27px]">
                  You need to log in or sign up to create your blog.
                </p>
                <Button
                  type="button"
                  fontSize="1.25rem"
                  padding="px-10 py-2"
                  className="mb-3 w-full text-lg"
                >
                  <a href="/api/auth/login?redirectTo=products">Log In</a>
                </Button>
                <Button
                  type="button"
                  fontSize="1.25rem"
                  padding="px-10 py-2"
                  className="w-full text-lg"
                >
                  <a href="/api/auth/signup">Sign Up</a>
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
