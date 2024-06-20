'use client'

import { useState, startTransition } from "react";
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { addCartItem, decrementCartItem, removeCartItem } from "../../api/api";
import { useCartContext } from "../providers/CartProvider";

function QuantityInput({cartItem, addOptimisticCartItems}: {cartItem: CartItem, addOptimisticCartItems: (action: {
    type: string;
    payload?: CartItem | undefined;
}) => void}) {
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const cartContext = useCartContext();

    const handleDecrement = async () => {
        const newQuantity = quantity - 1;
        if (newQuantity < 1) {
            if (cartContext?.removeCartItem) cartContext?.removeCartItem(cartItem)
            startTransition(() => {
                addOptimisticCartItems({type: 'remove', payload: cartItem});
            });
            await removeCartItem(cartItem.user_id, cartItem.product_id);
        } else {
            setQuantity(newQuantity);
            const updatedCartItem = { ...cartItem, quantity: newQuantity };
            if (cartContext?.updateCartItems) cartContext?.updateCartItems(updatedCartItem);
            startTransition(() => {
                addOptimisticCartItems({type: 'updateQuantity', payload: updatedCartItem});
            });
            await decrementCartItem(cartItem.user_id, cartItem.product_id, 1);
        }
    };

    const handleIncrement = async () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        const updatedCartItem = { ...cartItem, quantity: newQuantity };
        if (cartContext?.updateCartItems) cartContext?.updateCartItems(updatedCartItem)
        startTransition(() => {
            addOptimisticCartItems({type: 'updateQuantity', payload: updatedCartItem});
        });
        await addCartItem(cartItem.user_id, cartItem.product_id, 1);
    };

    return (
        <div className="border-[1px] border-solid border-[#6C7275] rounded-[4px] items-center gap-[12px] py-[6px] px-[8px] w-fit flex">
            <div className="cursor-pointer" onClick={handleDecrement}>
                <FaMinus />
            </div>
            <div className="font-semibold text-[0.75rem] leading-[20px]">
                {quantity}
            </div>
            <div className="cursor-pointer" onClick={handleIncrement}>
                <GoPlus />
            </div>
        </div>
    );
}

export default QuantityInput;
