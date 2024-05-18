"use client";
import Image from "next/image";
import IncrementProductButton from "./checkOutButtons/IncrementProductButton";
import DecrementProductButton from "./checkOutButtons/DecrementProductButton";
import DeleteIcon from "./checkOutButtons/DeleteIcon";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
  userId: number;
  productId: number;
  initialQuantity: number;
}

export default function CartItem({ product, initialQuantity, userId, productId }: Props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, []);

  return (
    <div key={product.id} className=" w-full flex justify-between  items-center mb-[15px]">
      <Image width={150} height={150} src={product.thumbnail} alt="prodcut" />
      <div className="flex flex-col items-center justify-center">
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IncrementProductButton userId={userId} productId={productId} quantity={quantity} setQuantity={setQuantity} />
        <DecrementProductButton userId={userId} productId={productId} quantity={quantity} setQuantity={setQuantity} />
        <DeleteIcon />
      </div>
    </div>
  );
}
