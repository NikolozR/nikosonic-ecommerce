"use client";

import { MdCancel } from "react-icons/md";
import { useCartContext } from "../providers/CartProvider";
import { removeCartItem } from "../../api/api";

function Remove({cartItem, addOptimisticCartItems}: CartItemProps) {
    const cartContext = useCartContext()
  return (
    <div className="flex items-center gap-[4px] cursor-pointer" onClick={() => {
        cartContext?.removeCartItem(cartItem);
        addOptimisticCartItems({type: "remove", payload: cartItem})
        removeCartItem(cartItem.user_id, cartItem.product_id)
    }}>
      <MdCancel size={24} color="#6C7275" />
      <span className="font-bold text-[0.875rem] leading-[22px] text-[#6C7275]">
        Remove
      </span>
    </div>
  );
}

export default Remove;
