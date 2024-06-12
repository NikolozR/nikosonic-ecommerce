"use client";
import Image from "next/image";
import { useState } from "react";

function Gallery({
  thumbnailUrl,
  galleryUrls,
}: {
  thumbnailUrl: string;
  galleryUrls: string[];
}) {
  const [chosen, setChosen] = useState(thumbnailUrl ?? '');
  console.log(galleryUrls)
  const gallery = [thumbnailUrl, ...galleryUrls];
  return (
    <div className="w-[40%]">
      <div
        className="h-[500px] mb-[20px] relative w-full"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Image
          src={chosen}
          alt="Gallery Chosen Image"
          fill
          className="object-cover"
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
    </div>
  );
}

export default Gallery;
