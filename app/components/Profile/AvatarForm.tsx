"use client";
import { CiCamera } from "react-icons/ci";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, useOptimistic, startTransition } from "react";
import { uploadAvatar } from "../../api/api";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";

function AvatarForm({ url }: { url: string }) {
  const [optimisticUrl, uploadOptimisticUrl] = useOptimistic(
    url,
    (_: string, action: string) => {
      return action;
    }
  );
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async () => {
    console.log("oeeeee");
    setIsUploading(true);
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }
    const file = inputFileRef.current.files[0];
    const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
      method: "POST",
      body: file,
    });
    const newBlob = (await response.json()) as PutBlobResult;
    startTransition(() => {
      uploadOptimisticUrl(newBlob.url);
    });
    await uploadAvatar(newBlob.url);
    setIsUploading(false);
  };

  return (
    <div className="w-fit h-fit relative mx-auto">
      {!isUploading ? (
        <Image
          src={optimisticUrl}
          width={90}
          height={90}
          className="rounded-[50%] !h-[90px] object-cover"
          alt="Profile Picture"
        />
      ) : (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      <form className="absolute bottom-0 right-0 cursor-pointer rounded-[50%] w-[30px] h-[30px] border-[2px] border-solid border-white bg-[#141718] flex items-center justify-center">
        <input
          name="avatar"
          onChange={(e) => {
            e.preventDefault();
            handleChange();
          }}
          type="file"
          className="opacity-0 absolute bottom-0 right-0 cursor-pointer"
          ref={inputFileRef}
        />
        <CiCamera color="white" cursor="pointer" />
      </form>
    </div>
  );
}

export default AvatarForm;
