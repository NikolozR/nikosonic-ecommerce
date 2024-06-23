"use client";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../providers/CartProvider";
import { addCartItem } from "../../api/api";

function AddToCartButton({
  product,
  user,
  onHover = true,
}: {
  product: Product;
  user: User;
  onHover?: boolean;
}) {
  const cartContext = useCartContext();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (
      cartContext?.cartItems.find(
        (item: CartItem) => item.product_id === product.product_id
      )
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [cartContext, product]);

  const addToCart = () => {
    if (!disabled) {
      const cartItem: CartItem = {
        ...product,
        user_id: user.id,
        quantity: 1,
        id: Math.random(),
        created_at: "",
        updated_at: "",
      };
      if (cartContext?.updateCartItems) cartContext?.updateCartItems(cartItem);
      try {
        const res = addCartItem(user.id, product.product_id, 1);
        console.log(res);
      } catch (err) {
        console.log(err);
        if (cartContext?.removeCartItem) cartContext?.removeCartItem(cartItem);
      }
    }
  };
  return (
    <div className="flex-1">
      <button
        className={
          onHover
            ? `w-fit px-[74px] transition-all z-50 ease-in-out duration-[0.3s] absolute bottom-[0px] left-[50%] text-nowrap translate-x-[-50%] opacity-0 py-[9px] text-[1rem] bg-[#141718] text-white rounded-[8px] group-hover:bottom-[25px] ` +
              (disabled
                ? "group-hover:opacity-40 "
                : "group-hover:opacity-100 ")
            : `w-full mt-[2px] px-[74px] text-nowrap py-[9px] text-[1rem] bg-[#141718] text-white rounded-[8px] ` +
              (disabled ? "opacity-40 " : "opacity-100 ")
        }
        disabled={disabled}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          addToCart();
        }}
      >
        {disabled ? "Already In Cart" : "Add To Cart"}
      </button>
    </div>
  );
}

export default AddToCartButton;
