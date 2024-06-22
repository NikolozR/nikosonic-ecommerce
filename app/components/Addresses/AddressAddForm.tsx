"use client";

import { useState } from "react";
import { handleAddressCreation } from "../../actions";
import Button from "../shared/Button";

function AddressAddForm({
  updateOptimisticAddresses,
  userId,
  onClose,
}: {
  updateOptimisticAddresses: (action: {
    type: string;
    payload?: MyAddress | undefined;
  }) => void;
  userId: number;
  onClose: () => void;
}) {
  const [newAddress, setNewAddress] = useState<CreateAddress>({
    type: "shipping",
    userId: userId,
    phone: "",
    address: "",
    addressName: '',
    city: "",
    country: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (formData: FormData) => {
    updateOptimisticAddresses({
      type: "add",
      payload: {
        type: newAddress.type,
        user_id: userId,
        address_id: Math.random(),
        phone: newAddress.phone,
        address_name: newAddress.addressName,
        address: newAddress.address,
        city: newAddress.city,
        country: newAddress.country,
      },
    });
    handleAddressCreation(formData);
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-[12px]"
      onSubmit={onClose}
    >
      <select
        name="type"
        id="type"
        className="border cursor-pointer text-[#6C7275] w-full border-[#CBCBCB] rounded-md px-3 py-2 focus:outline-none "
        required
        value={newAddress.type}
        onChange={(e) => {
          setNewAddress((prevState) => ({
            ...prevState,
            type: e.target.value === "shipping" ? "shipping" : "billing",
          }));
        }}
      >
        <option value="" disabled className="text-gray-300">
          Select Type
        </option>
        <option value="shipping">Shipping</option>
        <option value="billing">Biling</option>
      </select>
      <input
        name="addressName"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Address Name"
        required
        value={newAddress.addressName}
        onChange={handleChange}
      />
      <input
        name="phone"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Phone"
        required
        value={newAddress.phone}
        onChange={handleChange}
      />
      <input
        name="address"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Address"
        required
        value={newAddress.address}
        onChange={handleChange}
      />
      <input
        name="city"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="City"
        required
        value={newAddress.city}
        onChange={handleChange}
      />
      <input
        name="country"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Country"
        required
        value={newAddress.country}
        onChange={handleChange}
      />
      <Button
        type="submit"
        fontSize="1rem"
        padding="px-[20px] py-[10px]"
        className="my-[20px] mx-auto"
      >
        Submit
      </Button>
    </form>
  );
}

export default AddressAddForm;
