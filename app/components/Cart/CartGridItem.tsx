import Image from "next/image";
import QuantityInput from "./QuantityInput";
import Remove from "./Remove";

function CartGridItem({ cartItem, addOptimisticCartItems }: CartItemProps) {
  return (
    <div className="grid w-full grid-cols-cartTemplate py-[24px] border-b-[1px] border-solid border-[#E8ECEF]">
      <div className="w-full flex items-center gap-[16px]">
        <div className="w-[120px] h-[120px]">
          <div className="relative !w-[120px] h-[120px]">
            <Image
              src={cartItem.thumbnail_url}
              alt="Cart Item Image"
              className="object-cover"
              width={120}
              height={120}
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <h3 className="font-bold text-[0.875rem] leading-[22px] ">
            {cartItem.brand} {cartItem.name}
          </h3>
          <h4 className="text-[#6C7275] text-[0.75rem] leading-[20px]">
            Color: {cartItem.color}
          </h4>
          <Remove
            cartItem={cartItem}
            addOptimisticCartItems={addOptimisticCartItems}
          />
        </div>
      </div>
      <div className="flex items-center">
        <QuantityInput
          cartItem={cartItem}
          addOptimisticCartItems={addOptimisticCartItems}
        />
      </div>
      <div className="flex items-center">
        <span className="text-[#121212] text-[1.125rem] leading-[30px]">
          ${cartItem.price}
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-[#121212] font-bold text-[1.125rem] leading-[30px]">
          ${(cartItem.price * cartItem.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartGridItem;
