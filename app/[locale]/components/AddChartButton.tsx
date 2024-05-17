import { addChartFunction } from "../actions";
import { useAppContext } from "../../context/index";
import { useEffect } from "react";
import { cartCount } from "../actions";

export default function AddChartButton({ productId }: { productId: number }) {
  const { setState } = useAppContext();

  useEffect(() => {
    async function getcart() {
      const count = await cartCount();
      setState(count);
    }

    getcart();
  }, [setState]);

  async function handleAddProduct() {
    addChartFunction(productId);
    setState((perv: number) => perv + 1);
  }

  return <button onClick={() => handleAddProduct()}>Add to cart</button>;
}
