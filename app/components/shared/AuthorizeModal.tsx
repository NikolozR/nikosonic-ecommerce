'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import Button from "./Button";

export default function AuthorizeModal({onHover = true}: {onHover?: boolean}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button
        className={onHover ? `w-fit px-[95px] md:px-[54px] transition-all z-50 group-hover:opacity-100 ease-in-out duration-[0.3s] absolute bottom-[0px] left-[50%] text-nowrap translate-x-[-50%] opacity-0  py-[9px] text-[1rem] bg-[#141718] text-white rounded-[8px] group-hover:bottom-[25px]` : 
          `w-full px-[95px] md:px-[54px] text-nowrap py-[9px] text-[1rem] bg-[#141718] text-white rounded-[8px]`
        }
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
      >
        {"Add To Cart"}
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
            <ModalHeader>
                <h3 className="text-xl font-semibold mx-auto pt-[40px]">Authorization Required</h3>
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-center p-[60px] pt-[20px]">
                <p className="mb-6 text-center text-gray-600 leading-[27px] dark:text-[#ECEDEE]">You need to log in or sign up to add items to your cart.</p>
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
