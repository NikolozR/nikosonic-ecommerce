"use client";

import Link from "next/link";
import { increaseView } from "../../api/api";

function ClientSideWrapper({
  children,
  productId,
}: childrenProps<{ productId: Number }>) {
  return (
    <Link href={`/products/${productId}`}>
      <div
        onClick={() => {
          increaseView(productId);
        }}
      >
        {children}
      </div>
    </Link>
  );
}

export default ClientSideWrapper;
