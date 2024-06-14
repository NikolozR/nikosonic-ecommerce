"use client";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../providers/CartProvider";
import { addCartItem } from "../../api/api";

function AddToCartButton({ product, user }: { product: Product; user: User }) {
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
        created_at: '',
        updated_at: '',
      };
      cartContext?.updateCartItems(cartItem);
      try {
        const res = addCartItem(product.product_id, user.id, 1);
        console.log(res);
      } catch (err) {
        console.log(err);
        cartContext?.removeCartItem(cartItem);
      }
    }
  };
  return (
    <div>
      <button
        className={
          `w-fit px-[74px] transition-all z-50 ease-in-out duration-[0.3s] absolute bottom-[0px] left-[50%] text-nowrap translate-x-[-50%] opacity-0  py-[9px] text-[1rem] bg-[#141718] text-white rounded-[8px] group-hover:bottom-[25px] ` +
          (disabled ? "group-hover:opacity-40" : "group-hover:opacity-100")
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
