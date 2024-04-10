import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

function Product({ prodData }) {
  return (
    <div className="min-w-[300px] max-w-[300px] bg-customMain rounded-[20px] pt-[17px] pr-[15px] pb-[10px] pl-[15px]">
      <Image
          src={prodData.images[0]}
          priority={true}
          width={500}
          height={500}
          className="rounded-[10px] object-contain w-[270px] h-[176px]"
          alt="Product Image"
        />
        <div className="pt-[15px]">
          <h4 className="text-white text-[25px] font-bold mb-[15px]">
            {prodData.title}
          </h4>
          <p className="text-white text-[14px] font-light leading-[29px] mb-[20px]">
            {prodData.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[27px] text-white font-extrabold">
              ${prodData.price}0
            </p>
            <Button>Add to cart</Button>
          </div>
        </div>
    </div>
  );
}

export default Product;
