import { FiMinus } from "react-icons/fi";
import { useAppContext } from "../../../context";
import { decrementCart } from "../../actions";

interface Props {
  productId: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function DecrementProductButton({
  productId,
  setQuantity,
}: Props) {
  const { setState } = useAppContext();

  function handleDecrementAmount() {
    decrementCart(productId);
    setQuantity((quantity) => quantity - 1);
    setState((prev: number) => prev - 1);
  }

  return (
    <>
      <button onClick={handleDecrementAmount}>
        <FiMinus className="w-[20px] h-[20px] cursor-pointer mb-[7px] text-[#004e89] hover:scale-150 btn-transition hover:text-[#a4161a] dark:text-[#ffffff]" />
      </button>
    </>
  );
}
