"use client";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppContext } from "../../context/index";
import { useEffect } from "react";
import { cartCount } from "../actions";

export default function Chart() {
  const { state, setState } = useAppContext();

  useEffect(() => {
    async function getcart() {
      const count = await cartCount();
      setState(count);
    }

    getcart();
  }, [setState]);

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
