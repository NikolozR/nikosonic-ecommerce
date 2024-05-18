'use client'
import {useAppContext} from "../../../context";
import {emptyAllInCart} from "../../actions";

export default function DeleteAll({userId}:{userId:number}) {
    const { setState } = useAppContext();

    function deleteAllClick(){
        setState(() => 0 );
        emptyAllInCart(userId);
    }

    return (
    <div>
      <button onClick={deleteAllClick} className="border  border-black text-[black] text-[16px] py-[15px] px-[7px] rounded-md mb-[20px] cursor-pointer">
        Delete All Products
      </button>
    </div>
  );
}
