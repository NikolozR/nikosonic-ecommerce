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

export const CartProvider = ({ children }: childrenProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(cartItems.length);

  useEffect(() => {
    async function fetchAndSetCartItems() {
      try {
        const storedCount = localStorage.getItem("count");
        if (storedCount) {
          setCount(Number(storedCount))
          setLoading(false);
        }
          const user = await getUser();
          const data: CartItem[] = await getCartItems(user.id);
          localStorage.setItem("count", data.length + '');
          setCount(data.length)
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
    localStorage.setItem("count", cartItems.length + 1 + '');
    setCount((prev) => prev + 1)
    setCartItems((prev: CartItem[]) => {
      return [cartItem, ...prev];
    });
  };

  const removeCartItem = (cartItemToRemove: CartItem) => {
    localStorage.setItem("count", cartItems.length - 1 + '');
    setCartItems((prevCartItems) =>
      prevCartItems.filter(
        (item) => item.product_id !== cartItemToRemove.product_id
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, count, loading, updateCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
