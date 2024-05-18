import { AiFillDelete } from "react-icons/ai";
import { singleDelete } from "../../../api/api";
export const revalidate = 0;

export default function DeleteIcon({ productId }: { productId: number }) {
  const handleDelete = () => {
    singleDelete(productId);
    // window.location.reload();
  };

  return (
    <>
      <AiFillDelete
        className="w-[20px] h-[20px] cursor-pointer mb-[7px]"
        onClick={handleDelete}
      />
    </>
  );
}
