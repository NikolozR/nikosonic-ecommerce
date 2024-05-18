import { MdAdd } from "react-icons/md";
import { incrementItemAmount } from "../../actions";
import { useAppContext } from "../../../context";

interface Props {
  userId: number;
  productId: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function IncrementProductButton({ userId, productId, setQuantity }: Props) {
  const { setState } = useAppContext();

  function handleSetNewAmount() {
    setQuantity((quantity) => quantity + 1);
    incrementItemAmount(userId, productId);
    setState((prev: number) => prev + 1);
  }

  return (
    <>
      <button onClick={handleSetNewAmount}>
        <MdAdd className="w-[20px] h-[20px] cursor-pointer mb-[7px]" />
      </button>
    </>
  );
}
