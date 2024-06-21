'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import NewsLetterp1 from "../../../public/newsletterp1.png";
import NewsLetterp2 from "../../../public/newletterp2.jpg";
import { subscribeNewsLetter } from "../../api/api";

function NewsLetter() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await subscribeNewsLetter(email);
    setMessage(response.message);
    setLoading(false);
    onOpen();
    setEmail('')
    setTimeout(() => {
      onClose();
      setMessage("");
    }, 3000); 
  };

  return (
    <section
      style={{
        backgroundImage: `url(${NewsLetterp2.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-[360px] justify-center"
    >
      <div className="absolute flex items-center justify-center h-full w-[300px]">
        <Image
          src={NewsLetterp1}
          alt="Headphone Newsletter"
          fill
          className="object-contain absolute !left-[100px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="font-medium font-poppins text-[2.5rem]">
          Join Our Newsletter
        </h4>
        <p className="text-[1.125rem] pt-[20px] text-[#121212]">
          Sign up for deals, new products and promotions
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex border-b-[1px] mt-[44px] w-[488px] max-w-full pb-[12px] border-solid border-[#6C727580]"
        >
          <div className="flex items-center pl-[3px] pr-[10px]">
            <CiMail size={20} color="black" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full font-medium text-[1rem] bg-transparent placeholder:text-[#6C7275] text-[#6C7275] focus:outline-none"
            required
            placeholder="Email address"
          />
          <button
            type="submit"
            className="bg-transparent text-[#6C7275] font-medium hover:bg-gray-300 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Signup"}
          </button>
        </form>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Subscription Status</ModalHeader>
              <ModalBody>
                <p>{message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

export default NewsLetter;
