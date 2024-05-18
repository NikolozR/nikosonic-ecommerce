import { addChartFunction } from "../actions";
import { useAppContext } from "../../context/index";

export default function AddChartButton({ productId }: { productId: number }) {
  const { setState } = useAppContext();

  async function handleAddProduct() {
    addChartFunction(productId);
    setState((perv: number) => perv + 1);
  }

  return <button onClick={() => handleAddProduct()}>Add to cart</button>;
}
