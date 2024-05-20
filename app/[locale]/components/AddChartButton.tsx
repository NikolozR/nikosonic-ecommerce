'use client'
import { addCartFunction } from "../actions";
import { useAppContext } from "../../context/index";
async function handleAddProduct(productId: number, setState: (a: number | ((a:number) => number)) => number) {
  setState((prev: number) => prev + 1);
  await addCartFunction(productId);
}

export default function AddChartButton({ productId }: { productId: number }) {
  const { setState } = useAppContext();


  return (
    <button
      className=" cart bg-black p-[10px] text-white font-bold rounded-[.5rem] text-[14px] h-[40px] hover:bg-[#588157] "
      onClick={() => handleAddProduct(productId, setState)}
    >
      Add to cart
    </button>
  );
}
