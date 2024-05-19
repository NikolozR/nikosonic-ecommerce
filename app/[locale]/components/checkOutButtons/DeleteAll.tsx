"use client";
import { useAppContext } from "../../../context";
import { emptyAllInCart } from "../../actions";

export default function DeleteAll({ userId }: { userId: number }) {
  const { setState } = useAppContext();

  function deleteAllClick() {
    setState(() => 0);
    emptyAllInCart(userId);
  }

  return (
    <div>
      <button
        onClick={deleteAllClick}
        className="border  border-[#004e89] mt-[30px]  text-[#004e89] text-[16px] py-[15px] px-[7px] rounded-md mb-[40px] cursor-pointer hover:bg-[#004e89] hover:text-[#ffffff] btn-transition dark:border-[#ffffff] dark:text-[#ffffff]"
      >
        Delete All Products
      </button>
    </div>
  );
}
