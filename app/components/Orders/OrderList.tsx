import React from "react";
import OrderListItem from "./OrderListItem";
function transformOrders(orderItems: OrderItem[]): TransformedOrder[] {
  const orders: TransformedOrder[] = [];

  orderItems.forEach((item) => {
    const {
      order_id,
      user_id,
      order_created_at,
      shipping_address,
      billing_address,
      total_price,
      order_status,
    } = item;
    let i = orders.findIndex((o) => o.order_id === order_id);
    if (i !== -1) {
      orders[i].items.push({ ...item });
      orders[i].total_amount += item.order_item_quantity;
    } else {
      const toAdd: TransformedOrder = {
        order_id: order_id,
        user_id: user_id,
        order_created_at: order_created_at, 
        shipping_address: shipping_address,
        billing_address: billing_address,
        total_price: total_price,
        order_status: order_status,
        total_amount: item.order_item_quantity,
        date: order_created_at,
        items: [{ ...item }],
      };
      orders.push(toAdd);
    }
  });

  return orders;
}
function OrderList({ orders }: { orders: OrderItem[] }) {
  const ordersMapped = transformOrders(orders);
  return (
    <div className="flex-1">
      <h3 className="font-semibold text-[1.125rem] leading-[32px] mb-[40px]">
        Orders History
      </h3>
      <div className="grid w-full grid-cols-ordersTemplate pb-[8px] border-solid border-b-1 border-[#E8ECEF]">
        <div>
          <span className="text-[#6C7275] text-[0.75rem] leading-[22px]">
            Order ID
          </span>
        </div>
        <div>
          <span className="text-[#6C7275] text-[0.75rem] leading-[22px]">
            Date
          </span>
        </div>
        <div>
          <span className="text-[#6C7275] text-[0.75rem] leading-[22px]">
            Status
          </span>
        </div>
        <div>
          <span className="text-[#6C7275] text-[0.75rem] leading-[22px]">
            Price
          </span>
        </div>
      </div>
      {ordersMapped.map((el) => (
        <OrderListItem key={el.order_id} order={el} />
      ))}
    </div>
  );
}

export default OrderList;
