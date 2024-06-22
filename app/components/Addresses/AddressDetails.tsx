"use client";
import React, { useOptimistic } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import AddressAddForm from "./AddressAddForm";
import Address from "./Address";

function AddressDetails({
  addresses,
  userId,
}: {
  addresses: MyAddress[];
  userId: number;
}) {
  const [optimisticAddresses, updateOptimisticAddresses] = useOptimistic(
    addresses,
    (state: MyAddress[], action: { type: string; payload?: MyAddress }) => {
      switch (action.type) {
        case "remove":
          return state.filter(
            (item) => item.address_id !== action.payload?.address_id
          );
        case "add":
          if (action.payload) {
            return [...state, action.payload]
          }
          break;
        default:
          return state;
      }
      return state;
    }
  );
  const { onClose, isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="p-4 flex-1">
      <div className="flex justify-between">
      <h1 className="text-xl font-bold mb-4">Addresses</h1>
      <div className="flex justify-between">
        <Button onPress={onOpen} className="rounded-full">+</Button>
      </div>

      </div>
      <div className="flex justify-between gap-[100px] mt-4">
        <div className="w-1/2 mr-2">
          <h2 className="text-lg font-bold mb-4">Shipping Addresses</h2>
          <div className="flex flex-col gap-[20px]">
          {optimisticAddresses.map((address: MyAddress) => {
            if (address.type === "shipping")
              return (
                <Address
                  address={address}
                  key={address.address_id}
                  updateOptimisticAddresses={updateOptimisticAddresses}
                />
              );
            else return null;
          })}
          </div>
        </div>
        <div className="w-1/2 ml-2">
          <h2 className="text-lg font-bold mb-4">Billing Addresses</h2>
          <div className="flex flex-col gap-[20px]">
          {optimisticAddresses.map((address: MyAddress) => {
            if (address.type === "billing")
              return (
                <Address
                updateOptimisticAddresses={updateOptimisticAddresses}
                  key={address.address_id}
                  address={address}
                />
              );
            else return null;
          })}

          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Shipping Address
              </ModalHeader>
              <ModalBody>
                <AddressAddForm
                  onClose={onClose}
                  updateOptimisticAddresses={updateOptimisticAddresses}
                  userId={userId}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddressDetails;
