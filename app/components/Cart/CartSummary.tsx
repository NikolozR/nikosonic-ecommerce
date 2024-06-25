import Link from "next/link";
import Button from "../shared/Button";

function CartSummary({ cartItems }: { cartItems: CartItem[] }) {
  return (
    <div className="flex-1 border-solid border-[1px] border-[#6C7275] rounded-[6px] h-fit p-[32px] flex flex-col gap-[32px]">
      <h3 className="text-[#141718] font-poppins font-medium text-[1.25rem] dark:text-[#ECEDEE]">
        Cart Summary
      </h3>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#141718] dark:text-[#ECEDEE] text-[1.25rem]">Total</span>
        <span className="font-bold text-[#141718] dark:text-[#ECEDEE] text-[1.25rem]">
          $
          {cartItems
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
      <Link href={"/checkout"} prefetch={true}>
        <Button
          type="button"
          padding="px-[140px] py-[10px]"
          fontSize="1.125rem"
          className="font-medium block mx-auto"
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
}

export default CartSummary;
