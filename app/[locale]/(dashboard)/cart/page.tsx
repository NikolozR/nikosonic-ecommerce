import React from "react";
import { getCartItems, getUser } from "../../../api/api";
import OptimisticComponent from "../../../components/Cart/OptimisticComponent";
import CheckoutProgress from "../../../components/shared/CheckoutProgress";

async function Cart() {
  const user = await getUser();
  const cartItems: CartItem[] = await getCartItems(user.id);
  return (
    <main className="my-[80px]">
      <div className="container">
        <h1 className="font-poppins font-medium text-[3.375rem] mb-[40px] text-center">
          Cart
        </h1>
        {/* Maybe: 1) Shpping car, 2) checkout details 3) order complete */}
        <CheckoutProgress current="cart" />
        <div className="">
          <OptimisticComponent cartItems={cartItems} />
        </div>
      </div>
    </main>
  );
}

export default Cart;
