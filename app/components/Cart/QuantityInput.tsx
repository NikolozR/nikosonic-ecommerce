'use client'

import { useState } from "react"
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { addCartItem, decrementCartItem, removeCartItem } from "../../api/api";
import { useCartContext } from "../providers/CartProvider";
function QuantityInput({cartItem, addOptimisticCartItems}: {cartItem: CartItem, addOptimisticCartItems: (action: {
    type: string;
    payload?: CartItem | undefined;
}) => void}) {
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const cartContext = useCartContext()

  return (
    <div className="border-[1px] border-solid border-[#6C7275] rounded-[4px] items-center gap-[12px] py-[6px] px-[8px] w-fit flex">
        <div className="cursor-pointer" onClick={async () => {
            const newQuantity = quantity - 1;
            if (newQuantity < 1) {
                addOptimisticCartItems({type: 'remove', payload: cartItem})
                cartContext?.removeCartItem(cartItem)
                await removeCartItem(cartItem.user_id, cartItem.product_id)
            } else {
                setQuantity(newQuantity);
                const updatedCartItem = {...cartItem, quantity: newQuantity };
                addOptimisticCartItems({type: 'updateQuantity', payload: updatedCartItem})
                cartContext?.updateCartItems(updatedCartItem)
                await decrementCartItem(cartItem.product_id, cartItem.user_id, 1);
            }
        }}>
            <FaMinus></FaMinus>
        </div>
        <div className="font-semibold text-[0.75rem] leading-[20px]">
            {quantity}
        </div>
        <div className="cursor-pointer" onClick={async () => {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            const updatedCartItem = { ...cartItem, quantity: newQuantity };
            addOptimisticCartItems({type: 'updateQuantity', payload: updatedCartItem})
            cartContext?.updateCartItems(updatedCartItem)
            await addCartItem(cartItem.product_id, cartItem.user_id, 1)
        }}>
            <GoPlus></GoPlus>
        </div>
    </div>
  )
}

export default QuantityInput