'use client'
import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../providers/CartProvider";

function CartIcon() {
  const cartContext = useCartContext();
  return (
    <div className="flex relative items-center w-fit h-fit">
      <IoCartOutline size={30} />
      <span className="rounded-[50%] top-[-6px] right-[-6px] absolute flex items-center justify-center w-[20px] h-[20px] bg-[#141718] text-[#FFAB00] text-[12px]">
        {cartContext?.loading ? '' : cartContext?.count}
      </span>
    </div>
  );
}

export default CartIcon;
