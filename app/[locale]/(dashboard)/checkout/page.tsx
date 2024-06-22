import React from "react";
import { getAddressesByUser, getCartItems, getUser } from "../../../api/api";
import CheckoutProgress from "../../../components/shared/CheckoutProgress";
import CheckoutBody from "../../../components/Checkout/CheckoutBody";

async function Checkout() {
  const user = await getUser();
  const cartItems: CartItem[] = await getCartItems(user.id);
  const addresses: MyAddress[] = await getAddressesByUser(user.id);
  return (
    <main className="my-[80px]">
      <div className="container">
        <h1 className="font-poppins font-medium text-[3.375rem] mb-[40px] text-center">
          Checkout
        </h1>
        <CheckoutProgress current="checkout" />
        <CheckoutBody cartItems={cartItems} addresses={addresses} />
      </div>
    </main>
  );
}

export default Checkout;
