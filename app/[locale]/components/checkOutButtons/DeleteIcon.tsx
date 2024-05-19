"use client";
import { AiFillDelete } from "react-icons/ai";
import { singleDelete } from "../../../api/api";
import { useAppContext } from "../../../context";
export const revalidate = 0;

export default function DeleteIcon({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  const { setState } = useAppContext();
  const handleDelete = () => {
    singleDelete(productId);
    setState((prev: number) => prev - quantity);
    // window.location.reload();
  };

  return (
    <>
      <AiFillDelete
        className="w-[20px] h-[20px] cursor-pointer mb-[7px]  text-[#004e89] hover:scale-150 btn-transition hover:text-[#a4161a] dark:text-[#ffffff]"
        onClick={handleDelete}
      />
    </>
  );
}
