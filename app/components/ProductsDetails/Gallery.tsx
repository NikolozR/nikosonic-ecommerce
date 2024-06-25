"use client";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextButton from "../shared/NextButton";
import PreviousButton from "../shared/PreviousButton";

function Gallery({
  thumbnailUrl,
  galleryUrls,
}: {
  thumbnailUrl: string;
  galleryUrls: string[];
}) {
  const [chosen, setChosen] = useState(thumbnailUrl ?? '');
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const gallery = [thumbnailUrl, ...galleryUrls];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: gallery.indexOf(chosen),
    swipeToSlide: true,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />
  };

  return (
    <div className="w-full md:w-[60%] lg:w-[50%]">
      <div
        className="h-[500px] mb-[20px] relative w-full"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        onClick={onOpen}
      >
        <Image
          src={chosen}
          alt="Gallery Chosen Image"
          fill
          className="object-cover cursor-pointer"
        ></Image>
      </div>
      <div className="flex w-full gap-[24px]">
        {gallery.map((url, index) => {
          return (
            <div
              onClick={() => {
                setChosen(url);
              }}
              key={index}
              className={
                "aspect-square cursor-pointer relative w-[33.33%] " +
                (url === chosen &&
                  "border-[4px] border-solid border-[#FFAB00A3]")
              }
            >
              <Image
                src={url}
                alt="Gallery Headphones Images"
                fill
                className="object-cover"
              ></Image>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="overflow-x-hidden" size="xl" hideCloseButton >
        <ModalContent >
          {() => (
            <>
              <ModalBody >
                <Slider {...settings} >
                  {gallery.map((url, index) => (
                    <div key={index} className="relative h-[500px]">
                      <Image
                        src={url}
                        alt={`Gallery Image ${index + 1}`}
                        fill
                        className="object-cover z-[-1]"
                      />
                    </div>
                  ))}
                </Slider>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Gallery;
