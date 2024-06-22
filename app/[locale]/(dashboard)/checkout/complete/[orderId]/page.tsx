import React from "react";
import CheckoutProgress from "../../../../../components/shared/CheckoutProgress";
import { getOrder } from "../../../../../api/api";
import OrderConfirmation from "../../../../../components/Checkout/OrderConfirmation";

async function Complete({params}: {params: {orderId: string}}) {
  const order: OrderItem[] = await getOrder(params.orderId);
  console.log(order)
  return (
    <main className="my-[80px]">
      <div className="container">
        <h1 className="font-poppins font-medium text-[3.375rem] mb-[40px] text-center">
          Checkout
        </h1>
        <CheckoutProgress current="complete" />
        <OrderConfirmation order={order} />
      </div>
    </main>
  );
}

export default Complete;
