"use client";
import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import AddressForm from "./AddressForm";
import Button from "../shared/Button";
import { handleCheckout } from "../../actions";
import { useCartContext } from "../providers/CartProvider";

type SelectedAddress = MyAddress | AddressInput;

const CheckoutBody = ({
  addresses,
  cartItems,
}: {
  addresses: MyAddress[];
  cartItems: CartItem[];
}) => {
  const [selectedAddress, setSelectedAddress] =
    useState<SelectedAddress | null>(null);
  const [selectedBillingAddress, setSelectedBillingAddress] =
    useState<SelectedAddress | null>(null);
  const [shippingAddressSelected, setShippingAddressSelected] = useState(false);
  const [billingAddressSelected, setBillingAddressSelected] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<AddressInput>({
    street: "",
    country: "",
    city: "",
  });
  const [billingAddress, setBillingAddress] = useState<AddressInput>({
    street: "",
    country: "",
    city: "",
  });
  const cart = useCartContext();
  const addressesOptionsBilling = addresses
    .filter((el) => el.type === "billing")
    .map((el) => ({
      value: JSON.stringify(el),
      label: `${el.address_name}: ${el.address}`,
    }));

  const addressesOptionsShipping = addresses
    .filter((el) => el.type === "shipping")
    .map((el) => ({
      value: JSON.stringify(el),
      label: `${el.address_name}: ${el.address}`,
    }));

  useEffect(() => {
    if (selectedAddress === null) {
      setShippingAddressSelected(false);
    }
    if (selectedBillingAddress === null) {
      setBillingAddressSelected(false);
    }
  }, [selectedAddress, selectedBillingAddress]);

  const handleInputChange = (prefix: string, field: string, value: string) => {
    if (prefix === "shipping") {
      setShippingAddress((prev) => ({ ...prev, [field]: value }));
      if (!shippingAddressSelected) {
        setSelectedAddress({ ...shippingAddress, [field]: value });
      }
    } else if (prefix === "billing") {
      setBillingAddress((prev) => ({ ...prev, [field]: value }));
      if (!billingAddressSelected) {
        setSelectedBillingAddress({ ...billingAddress, [field]: value });
      }
    }
  };

  return (
    <>
      <div className="p-6 rounded-md flex gap-[60px]">
        <div className="w-1/2 border-solid border-1 border-[#6C7275] rounded-[4px] px-[24px] py-[40px]">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <Select
            aria-label="Shipping Address"
            placeholder="Select an address"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setSelectedAddress(null);
                setShippingAddressSelected(false);
                setShippingAddress({ street: "", country: "", city: "" });
              } else {
                const address: MyAddress = JSON.parse(value);
                setSelectedAddress(address);
                setShippingAddressSelected(true);
                setShippingAddress({
                  street: address.address,
                  country: address.country,
                  city: address.city,
                });
              }
            }}
            className="max-w-xs mb-4"
          >
            {addressesOptionsShipping.map((address) => (
              <SelectItem key={address.value} value={address.value}>
                {address.label}
              </SelectItem>
            ))}
          </Select>
          <AddressForm
            prefix="shipping"
            address={shippingAddress}
            wasSelected={shippingAddressSelected}
            handleInputChange={handleInputChange}
          />
        </div>

        <div className="w-1/2 border-solid border-1 border-[#6C7275] rounded-[4px] px-[24px] py-[40px]">
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <Select
            aria-label="Billing Address"
            placeholder="Select an address"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setSelectedBillingAddress(null);
                setBillingAddressSelected(false);
                setBillingAddress({ street: "", country: "", city: "" });
              } else {
                const address: MyAddress = JSON.parse(value);
                setSelectedBillingAddress(address);
                setBillingAddressSelected(true);
                setBillingAddress({
                  street: address.address,
                  country: address.country,
                  city: address.city,
                });
              }
            }}
            className="max-w-xs mb-4"
          >
            {addressesOptionsBilling.map((address) => (
              <SelectItem key={address.value} value={address.value}>
                {address.label}
              </SelectItem>
            ))}
          </Select>
          <AddressForm
            prefix="billing"
            address={billingAddress}
            wasSelected={billingAddressSelected}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
      <div className="w-full">
        <Button
          type="button"
          fontSize="1.25rem"
          padding="px-0 py-[20px]"
          className="!w-[35%] block mx-auto"
          disabled={!selectedAddress || !selectedBillingAddress}
          handleClick={async () => {
            if (selectedAddress && selectedBillingAddress)
              await handleCheckout(
                cartItems,
                selectedAddress,
                selectedBillingAddress
              );
            if (cart.clearItems) cart.clearItems();
          }}
        >
          Purchase
        </Button>
      </div>
    </>
  );
};

export default CheckoutBody;
