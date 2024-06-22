"use client";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { deleteAddress } from "../../api/api";

function Address({
  address,
  updateOptimisticAddresses,
}: {
  address: MyAddress;
  updateOptimisticAddresses: (action: {
    type: string;
    payload?: MyAddress | undefined;
  }) => void;
}) {
  return (
    <div className="border-[#6C7275] px-[24px] py-[16px] border-1 border-solid rounded-[8px]">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-[1rem] leading-[26px]">
          {address.address_name}
        </h3>
        <div className="flex gap-[10px] items-center">
          <CiEdit color="#6C7275" />
          <span
          className="cursor-pointer"
            onClick={() => {
              updateOptimisticAddresses({
                type: "remove",
                payload: address,
              });
              deleteAddress(address.address_id);
            }}
          >
            x
          </span>
        </div>
      </div>
      <h4 className="text-[0.925rem] mt-[8px] mb-[10px]">{address.phone}</h4>
      <h4 className="text-[0.925rem]">
        {address.address}, {address.city}, {address.country}
      </h4>
    </div>
  );
}

export default Address;
