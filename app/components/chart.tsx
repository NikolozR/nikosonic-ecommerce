"use client";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Chart() {

  return (
    <div className="text-xl w-fit relative">
      <Link href="/checkout">
        <span className="icon-bg absolute text-[11px] font-bold top-[-17px] right-[-14px] text-white flex items-center justify-center">

        </span>
        <MdOutlineShoppingCart suppressHydrationWarning />
      </Link>
    </div>
  );
}
