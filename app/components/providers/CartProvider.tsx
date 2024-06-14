'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { getCartItems, getUser } from "../../api/api";

const CartContext = createContext<{
  cartItems: CartItem[];
  loading: boolean;
  count: number;
  updateCartItems: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
} | null>(null);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setCount(Number(storedCount));
      setLoading(false);
    }
    async function fetchAndSetCartItems() {
      try {
        const user = await getUser();
        const data: CartItem[] = await getCartItems(user.id);
        const quantity = data.reduce((acc, curr) => acc + curr.quantity, 0);
        localStorage.setItem("count", quantity.toString());
        setCount(quantity);
        setCartItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        setLoading(false);
      }
    }

    fetchAndSetCartItems();
  }, []);

  const updateCartItems = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.map((item) =>
        item.product_id === cartItem.product_id ? cartItem : item
      );
      if (!prevCartItems.find(item => item.product_id === cartItem.product_id)) {
        newCartItems.push(cartItem);
      }
      const newQuantity = newCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
      setCount(newQuantity);
      localStorage.setItem("count", newQuantity.toString());
      return newCartItems;
    });
  };

  const removeCartItem = (cartItemToRemove: CartItem) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter(
        (item) => item.product_id !== cartItemToRemove.product_id
      );
      const newQuantity = newCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
      setCount(newQuantity);
      localStorage.setItem("count", newQuantity.toString());
      return newCartItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, count, loading, updateCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
