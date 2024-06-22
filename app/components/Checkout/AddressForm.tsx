import React from "react";

type AddressInput = {
  street: string;
  country: string;
  city: string;
};

const AddressForm = ({
  prefix,
  address,
  wasSelected,
  handleInputChange,
}: {
  prefix: string;
  address: AddressInput | MyAddress;
  wasSelected: boolean;
  handleInputChange: (prefix: string, field: string, value: string) => void;
}) => {
  const getStreet = (address: AddressInput | MyAddress) => {
    if ('address' in address) {
      return address.address;
    }
    return address.street;
  };

  return (
    <form className="flex flex-col gap-[12px]">
      <div>
        <label className="block text-sm font-medium mb-1">Street Address</label>
        <input
          type="text"
          name={`${prefix}_street`}
          placeholder="Street Address"
          readOnly={wasSelected}
          className="w-full border rounded-md p-2"
          value={getStreet(address)}
          onChange={(e) => handleInputChange(prefix, "street", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          type="text"
          name={`${prefix}_country`}
          placeholder="Country"
          readOnly={wasSelected}
          className="w-full border rounded-md p-2"
          value={address.country}
          onChange={(e) => handleInputChange(prefix, "country", e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Town / City</label>
        <input
          type="text"
          name={`${prefix}_city`}
          readOnly={wasSelected}
          placeholder="Town / City"
          className="w-full border rounded-md p-2"
          value={address.city}
          onChange={(e) => handleInputChange(prefix, "city", e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddressForm;
