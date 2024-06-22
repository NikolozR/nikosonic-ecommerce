import React from "react";

import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import AddresDetails from "../../../components/Addresses/AddressDetails";
import { getAddressesByUser, getUser } from "../../../api/api";

async function Addresses() {
  const user: User = await getUser();
  const addresses: MyAddress[] = await getAddressesByUser(user.id)
  return (
    <section className="mb-[80px]">
      <div className="container">
        <h1 className="font-poppins text-[3.375rem] font-medium text-center py-[40px]">
          My Profile
        </h1>
        <div className="flex gap-[80px]">
          <ProfileSidebar user={user} active="addresses" />
          <AddresDetails addresses={addresses} userId={user.id} />
        </div>
      </div>
    </section>
  );
}

export default Addresses;
