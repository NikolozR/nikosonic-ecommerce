import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";

function ProductItem({
  product,
  isNew = false,
  isHot = false,
}: {
  product: Product;
  isNew?: boolean;
  isHot?: boolean;
}) {
  return (
    <div
      className="w-full cursor-pointer group bg-white pb-[20px] rounded-[15px]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="p-4 relative w-full h-[350px]">
        {(isNew || isHot) && (
          <span className="w-fit z-50 absolute px-[14px] py-[4px] font-bold text-[1rem] bg-[#FFAB00A3] text-[#26355D] rounded-[4px]">
            {isNew ? 'NEW' : 'HOT'}
          </span>
        )}
        <span className="w-[32px] opacity-0 flex items-center cursor-pointer z-30 group-hover:opacity-100 transition-all ease-in-out duration-[0.3s] group-hover:top-[16px] justify-center absolute right-[16px] top-[0] h-[32px] rounded-[50%] bg-[#F3F5F7]">
          <CiHeart size={20}></CiHeart>
        </span>
        <Image
          src={product.thumbnail_url}
          className="rounded-[15px]"
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
          alt={product.name}
        />
        <Button
          type="button"
          className="opacity-0 group-hover:opacity-100 group-hover:bottom-[25px] transition-all ease-in-out duration-[0.3s] absolute bottom-[0px] left-[50%] text-nowrap translate-x-[-50%]"
          fontSize="1rem"
          padding="px-[74px] py-[9px]"
        >
          Add To Cart
        </Button>
      </div>
      <div className="bg-white px-3 text-[#141718] font-semibold flex flex-col gap-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < product.avarage_rating ? "gold" : "gray"}
            />
          ))}
        </div>
        <h2>{product.brand}</h2>
        <p>{product.name}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
}

export default ProductItem;
