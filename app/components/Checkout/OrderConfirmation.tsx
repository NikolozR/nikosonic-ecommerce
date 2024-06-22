import React from "react";
import Image from "next/image";
import Button from "../shared/Button";
import Link from "next/link";

interface OrderProps {
  order: OrderItem[];
}

const OrderConfirmation: React.FC<OrderProps> = ({ order }) => {
  if (order.length > 0) {
    const orderDate = new Date(order[0]?.order_created_at).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    const totalAmount = order
      .reduce(
        (total, item) =>
          total + parseFloat(item.price) * item.order_item_quantity,
        0
      )
      .toFixed(2);

    return (
      <div className="text-center w-[40%] mx-auto p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Thank you! 🎉</h1>
        <p className="text-lg mb-6">Your order has been received</p>
        <div className="grid grid-cols-3 mb-6">
          {order.map((item, index) => (
            <div key={index} className="mx-4">
              <Image
                src={item.thumbnail_url}
                alt={item.name}
                width={100}
                height={100}
                className="mb-2"
              />
              <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {item.order_item_quantity}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-2">Order ID: #{order[0].order_id}</div>
        <div className="mb-2">Date: {orderDate}</div>
        <div className="mb-2">Total: ${totalAmount}</div>
        <div className="mb-2">Payment method: Credit Card</div>
        <Link href={"/orders"}>
          <Button
            padding="py-5 px-10"
            fontSize="1rem"
            type="submit"
            className="mt-[24px]"
          >
            Order History
          </Button>
        </Link>
      </div>
    );
  } else return <div>No such order</div>;
};

export default OrderConfirmation;
