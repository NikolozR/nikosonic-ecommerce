'use client';

import { startTransition } from "react";
import { MdCancel } from "react-icons/md";
import { useCartContext } from "../providers/CartProvider";
import { removeCartItem } from "../../api/api";

function Remove({ cartItem, addOptimisticCartItems }: CartItemProps) {
  const cartContext = useCartContext();

  const handleRemove = async () => {
    cartContext?.removeCartItem(cartItem);
    startTransition(() => {
      addOptimisticCartItems({ type: "remove", payload: cartItem });
    });
    await removeCartItem(cartItem.user_id, cartItem.product_id);
  };

  return (
    <div className="flex items-center gap-[4px] cursor-pointer" onClick={handleRemove}>
      <MdCancel size={24} color="#6C7275" />
      <span className="font-bold text-[0.875rem] leading-[22px] text-[#6C7275]">
        Remove
      </span>
    </div>
  );
}

export default Remove;
