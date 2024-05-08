import Link from "next/link";
import Image from "next/image";

function Product({ prodData }: { prodData: Product}) {
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
        <h4 className="text-neutral-7 dark:text-white text-[21px] font-bold mb-[15px]">
          {prodData.title}
        </h4>
        <p className="text-neutral-7 dark:text-white text-[14px] font-light leading-[29px] mb-[20px]">
          {prodData.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[27px] text-neutral-7 dark:text-white font-extrabold">
            ${prodData.price}0
          </p>
        </div>
        <div className="flex justify-between mt-[20px]">
          <button>Add to cart</button>
        <Link href={'/products/' + prodData?.id}>
          <button>Read More</button>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Product;
