import { BiSolidImageAdd } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { forwardRef } from "react";


const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(({
  selectedFile,
  selectedFiles,
  multiple = false,
  fileWrongSize,
  handleFileChange,
  placeholder
}, ref) => {
  return (
    <label htmlFor="thumbnail_url" className="relative cursor-pointer">
      <div
        className={`w-full dark:bg-[#241A32] items-center rounded-lg h-[80px] flex flex-col justify-center p-[20px] border-dashed border-[1px] border-gray-300 ${
          selectedFiles && selectedFiles.length !== 0
            ? "bg-[#F8F8F8] dark:bg-[#241A32]"
            : "bg-[white]"
        }`}
      >
        {fileWrongSize ? (
          <span className="text-[#DB5852] text-[0.9rem] flex gap-1 font-bold">
            <MdErrorOutline /> File Size Limit is 4.5MB.{" "}
            <span className="underline text-[#7464E8]">Try Again.</span>
          </span>
        ) : (selectedFiles && selectedFiles.length !== 0) || selectedFile ? (
          multiple ? (
            <p className="font-bold text-[#240750] dark:text-white">
              You have selected {selectedFiles && selectedFiles.length}{" "}
              {selectedFiles?.length !== 1 ? "Files" : "File"}
            </p>
          ) : (
            <p className="font-bold text-[#240750] dark:text-[#ECEDEE]">Thumbnail Is Selected</p>
          )
        ) : (
          <div className="flex w-full items-center gap-[20px]">
            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#EFEDEE] rounded-full">
              <BiSolidImageAdd color="#494949" size={24} />
            </div>
            <div>
              <p className="pb-[5px] font-bold text-[0.9rem]">
                {placeholder}
              </p>
              <span className="text-[0.75rem] text-gray-400">4.5mb max</span>
            </div>
          </div>
        )}
      </div>
      <input
        name={multiple ? "gallery_urls" : "thumbnail_url"}
        type="file"
        ref={ref}
        required
        multiple={multiple}
        className="opacity-0 absolute cursor-pointer w-full h-full top-0 left-0"
        onChange={handleFileChange}
      />
    </label>
  );
});

FileUpload.displayName = "FileUpload";

export default FileUpload;
