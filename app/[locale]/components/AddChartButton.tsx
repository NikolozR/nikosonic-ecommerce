import { addChartFunction } from "../actions";
import { useAppContext } from "../../context/index";

export default function AddChartButton({ productId }: { productId: number }) {
  const { setState } = useAppContext();

  async function handleAddProduct() {
    addChartFunction(productId);
    setState((prev: number) => prev + 1);
  }

  return (
    <button
      className=" cart bg-black p-[10px] text-white font-bold rounded-[.5rem] text-[14px] h-[40px] hover:bg-[#588157] "
      onClick={() => handleAddProduct()}
    >
      Add to cart
    </button>
  );
}
