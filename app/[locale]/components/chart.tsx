"use client";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppContext } from "../../context/index";

export default function Chart() {
  const { state } = useAppContext();

  return (
    <div className="text-xl relative">
      <Link href="/checkout">
        <span className="absolute text-xs -top-4 right-[5px] text-red-700">
          {state ? state : ""}
        </span>
        <MdOutlineShoppingCart suppressHydrationWarning />
      </Link>
    </div>
  );
}
