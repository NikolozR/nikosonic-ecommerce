import { FiMinus } from "react-icons/fi";
import { useAppContext } from "../../../context";
import { decrementCart } from "../../actions";

interface Props {
  userId: number;
  productId: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function DecrementProductButton({ userId, productId, setQuantity }: Props) {
  const { setState } = useAppContext();

  function handleDecrementAmount() {
    decrementCart(userId, productId);
    setQuantity((quantity) => quantity - 1);
    setState((prev: number) => prev - 1);
  }

  return (
    <>
      <button onClick={handleDecrementAmount}>
        <FiMinus className="w-[20px] h-[20px] cursor-pointer mb-[7px]" />
      </button>
    </>
  );
}
