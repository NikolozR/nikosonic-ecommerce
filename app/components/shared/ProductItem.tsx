import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import ClientSideWrapper from "./ClientSideProductWrapper";
import AddToCartButton from "./AddToCartButton";

function ProductItem({
  product,
  isNew = false,
  isHot = false,
  user,
}: {
  product: Product;
  user: User;
  isNew?: boolean;
  isHot?: boolean;
}) {
  return (
    <div
      className="w-full cursor-pointer group bg-white pb-[20px] rounded-[15px]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="p-4 relative w-full h-[350px]">
        <ClientSideWrapper productId={product.product_id}>
          {(isNew || isHot) && (
            <span className="w-fit z-50 absolute px-[14px] py-[4px] font-bold text-[1rem] bg-[#FFAB00A3] text-[#26355D] rounded-[4px]">
              {isNew ? "NEW" : "HOT"}
            </span>
          )}
        </ClientSideWrapper>
        <span className="w-[32px] opacity-0 flex items-center cursor-pointer z-30 group-hover:opacity-100 transition-all ease-in-out duration-[0.3s] group-hover:top-[16px] justify-center absolute right-[16px] top-[0] h-[32px] rounded-[50%] bg-[#F3F5F7]">
          <CiHeart size={20}></CiHeart>
        </span>
        <ClientSideWrapper productId={product.product_id}>
          <Image
            src={product.thumbnail_url}
            className="rounded-[15px]"
            style={{ objectFit: "cover", objectPosition: "center" }}
            fill
            alt={product.name}
          />
        </ClientSideWrapper>
        <AddToCartButton user={user} product={product} />
      </div>
      <ClientSideWrapper productId={product.product_id}>
        <div className="bg-white px-3 text-[#141718] font-semibold flex flex-col gap-2">
          <div className="flex mt-[10px]">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < product.average_rating ? "#FFAB00A3" : "gray"}
              />
            ))}
          </div>
          <h2>{product.brand + " " + product.name}</h2>
          <span>${product.price}</span>
        </div>
      </ClientSideWrapper>
    </div>
  );
}

export default ProductItem;
