"use client";
import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../providers/CartProvider";
import Link from "next/link";

function CartIcon() {
  const cartContext = useCartContext();
  return (
    <Link href={'/cart'} className="text-black">
    <div className="flex relative items-center w-fit h-fit">
      <IoCartOutline size={30} color="black" className="hidden lg:block dark:hidden" />
      <IoCartOutline size={22} color="black" className="block lg:hidden dark:hidden" />
      <IoCartOutline size={30} color="white" className="hidden dark:lg:block" />
      <IoCartOutline size={22} color="white" className="hidden dark:block dark:lg:hidden" />
      {cartContext?.count === 0 ? null : (
        <span className="rounded-[50%] top-[-6px] right-[-6px] absolute flex items-center justify-center w-[20px] h-[20px] bg-[#141718] dark:bg-white text-white dark:text-black text-[12px]">
          {cartContext?.count}
        </span>
      )}
    </div>
    
    </Link>
  );
}

export default CartIcon;
