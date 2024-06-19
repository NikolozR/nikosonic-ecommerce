"use client";
import React, { startTransition } from "react";
import Button from "../shared/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCartContext } from "../providers/CartProvider";
import { clearCart } from "../../api/api";

function Clear({
  addOptimisticCartItems,
}: {
  addOptimisticCartItems: (action: {
    type: string;
    payload?: CartItem | undefined;
  }) => void;
}) {
  const cartContext = useCartContext();

  const handleClearCart = async () => {
    cartContext?.clearItems();
    startTransition(() => {
      addOptimisticCartItems({ type: "clear" });
    });
    await clearCart();
  };

  return (
    <div>
      <Button
        type="button"
        handleClick={handleClearCart}
        fontSize="1rem"
        padding="px-[32px] py-[8px]"
        className="flex justify-center gap-[5px] mt-[20px]"
      >
        <FaRegTrashAlt />
        Clear Cart
      </Button>
    </div>
  );
}

export default Clear;
