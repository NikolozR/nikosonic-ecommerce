import { handleCheckout } from "../../actions";
import Button from "../shared/Button";

function CartSummary({ cartItems }: { cartItems: CartItem[] }) {
  return (
    <div className="flex-1 border-solid border-[1px] border-[#6C7275] rounded-[6px] h-fit p-[32px] flex flex-col gap-[32px]">
      <h3 className="text-[#141718] font-poppins font-medium text-[1.25rem]">
        Cart Summary
      </h3>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#141718] text-[1.25rem]">Total</span>
        <span className="font-bold text-[#141718] text-[1.25rem]">
          $
          {cartItems
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
      <Button
        type="button"
        padding="px-[140px] py-[10px]"
        fontSize="1.125rem"
        className="font-medium block mx-auto"
        handleClick={async () => {
            await handleCheckout(cartItems)
        }}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartSummary;
