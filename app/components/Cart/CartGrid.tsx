import CartGridItem from "./CartGridItem";

function CartGrid({
  cartItems,
  addOptimisticCartItems,
}: {
  cartItems: CartItem[];
  addOptimisticCartItems: (action: {
    type: string;
    payload?: CartItem | undefined;
  }) => void;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-cartTemplate pb-[24px] border-b-[1px] border-solid border-[#6C7275]">
        <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px]">
          Product
        </h3>
        <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px]">
          Quantity
        </h3>
        <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px]">
          Price
        </h3>
        <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px]">
          Subtotal
        </h3>
      </div>
      {cartItems.map((item: CartItem) => {
        return (
          <CartGridItem
            key={item.product_id}
            cartItem={item}
            addOptimisticCartItems={addOptimisticCartItems}
          />
        );
      })}
    </div>
  );
}

export default CartGrid;
