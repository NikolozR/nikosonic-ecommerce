"use client";
import Image from "next/image";
import IncrementProductButton from "./checkOutButtons/IncrementProductButton";
import DecrementProductButton from "./checkOutButtons/DecrementProductButton";
import DeleteIcon from "./checkOutButtons/DeleteIcon";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
  productId: number;
  initialQuantity: number;
}

export default function CartItem({
  product,
  initialQuantity,
  productId,
}: Props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, []);

  return (
    <div
      key={product.id}
      className=" w-full border-light flex flex-col  justify-between  items-center mb-[15px] p-[15px] dark:border-[#ffffff] sm:flex-row  lg:w-4/5 lg:m-auto "
    >
      <div className="overflow-hidden">
        <Image
          className=" rounded-md mb-[25px] cursor-pointer hover"
          width={200}
          height={200}
          src={product.thumbnail}
          alt="prodcut"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-[#004e89] text-[18px] mb-[7px] font-bold dark:text-[#ffffff]">
          {product.title}
        </h2>
        <p className="text-[#004e89] mb-[7px] font-bold dark:text-[#ffffff]">
          Price:$
          {product.price}
        </p>
        <p className="text-[#004e89] mb-[7px] font-bold dark:text-[#ffffff]">
          Quantity:
          {quantity}
        </p>
      </div>
      <div className="">
        <p className="text-[#004e89] mb-[7px] text-center font-bold dark:text-[#ffffff]">
          {" "}
          Total Price: ${product.price * quantity}
        </p>
      </div>
      <div className="  flex   items-center justify-between mt-[10px] sm:flex-col">
        <IncrementProductButton
          productId={productId}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <DecrementProductButton
          productId={productId}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <DeleteIcon productId={productId} quantity={quantity} />
      </div>
    </div>
  );
}
