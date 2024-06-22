'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { getCartItems, getUser } from "../../api/api";

interface CartContextType {
  cartItems: CartItem[];
  count: number;
  updateCartItems: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  clearItems: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  count: 0,
  updateCartItems: () => {},
  removeCartItem: () => {},
  clearItems: () => {}
});

export const useCartContext = () => useContext(CartContext ?? {});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function fetchCartItemsAndCount() {
      try {
        const user = await getUser();
        if (!user) {
          throw new Error("User not found");
        }
        const data: CartItem[] = await getCartItems(user.id);
        const quantity = data.reduce((acc, curr) => acc + curr.quantity, 0);
        setCartItems(data);
        setCount(quantity);
        localStorage.setItem("count", quantity.toString());
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    }

    fetchCartItemsAndCount();
  }, []);

  const updateCartItems = (cartItem: CartItem) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.product_id === cartItem.product_id);
      let newCartItems = [...prevCartItems];
      if (existingItem) {
        newCartItems = newCartItems.map(item =>
          item.product_id === cartItem.product_id ? cartItem : item
        );
      } else {
        newCartItems.push(cartItem);
      }
      const newQuantity = newCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
      setCount(newQuantity);
      localStorage.setItem("count", newQuantity.toString());
      return newCartItems;
    });
  };

  const removeCartItem = (cartItemToRemove: CartItem) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.product_id !== cartItemToRemove.product_id)
    );
    const newQuantity = cartItems
      .filter(item => item.product_id !== cartItemToRemove.product_id)
      .reduce((acc, curr) => acc + curr.quantity, 0);
    setCount(newQuantity);
    localStorage.setItem("count", newQuantity.toString());
  };

  const clearItems = () => {
    setCartItems([]);
    setCount(0);
    localStorage.setItem("count", "0");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, count, updateCartItems, removeCartItem, clearItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
