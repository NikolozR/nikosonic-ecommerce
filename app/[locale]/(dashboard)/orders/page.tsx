import React from "react";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import { getOrdersByUser, getUser } from "../../../api/api";
import OrderList from "../../../components/Orders/OrderList";

async function Orders() {
  const user: User = await getUser();
  const orders: OrderItem[] = await getOrdersByUser(user.id);
  return (
    <section className="mb-[80px]">
      <div className="container">
        <h1 className="font-poppins text-[3.375rem] font-medium text-center py-[40px]">
          My Profile
        </h1>
        <div className="flex gap-[80px]">
          <ProfileSidebar user={user} active="orders" />
          <OrderList orders={orders}></OrderList>
        </div>
      </div>
    </section>
  );
}

export default Orders;
