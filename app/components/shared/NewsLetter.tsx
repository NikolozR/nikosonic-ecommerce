'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import NewsLetterp1 from "../../../public/newsletterp1.png";
import NewsLetterp2 from "../../../public/newletterp2.jpg";
import { subscribeNewsLetter } from "../../api/api";
import { useTranslations } from "next-intl";

function NewsLetter() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const newsLetterT = useTranslations('NewsLetter')

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
      }}
      className="relative bg-[#E2E4E3] w-full h-[360px] bg-contain xl:bg-cover bg-[position:500%_0%] md:bg-[position:130%_0%] lg:bg-[position:100%_0%] xl:bg-[position:0%_0%]"
    >
      <div className="absolute flex items-center justify-center h-full w-[250px] lg:w-[300px]">
        <Image
          src={NewsLetterp1}
          alt="Headphone Newsletter"
          fill
          className="object-contain absolute left-[35px] lg:left-[50px] xl:left-[100px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full px-4">
        <h4 className="font-medium font-poppins text-[1.5rem] lg:text-[2.5rem] text-center">
          {newsLetterT('newsletter')}
        </h4>
        <p className="text-[1rem] lg:text-[1.125rem] pt-[20px] text-[#121212] text-center">
          {newsLetterT('newsletterSubText')}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex border-b-[1px] mt-[44px] w-full max-w-[488px] pb-[12px] border-solid border-[#6C727580]"
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
            placeholder={newsLetterT('inputPlaceholder')}
          />
          <button
            type="submit"
            className="bg-transparent text-[#6C7275] whitespace-nowrap font-medium hover:bg-gray-300 focus:outline-none"
            disabled={loading}
          >
            {loading ? newsLetterT('buttonProgress') : newsLetterT('button')}
          </button>
        </form>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">{newsLetterT('status')}</ModalHeader>
              <ModalBody className="text-center">
                <p>{message.includes('successfully') ? newsLetterT('success') : newsLetterT('already')}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {newsLetterT('close')}
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
