import Link from "next/link";
import Image from "next/image";
import AddChartButton from "./AddChartButton";

function Product({ prodData }: { prodData: Product }) {
  return (
    <div className="p-[20px] flex flex-col items-center bg-white rounded-[.5rem] shadow-md text-black">
      <div className="relative w-[250px] h-[200px] ">
        <Image
          src={prodData.images[0]}
          priority={true}
          fill
          className="rounded-[10px]"
          alt={`Product Image-${prodData.id}`}
        />
      </div>
      <div className="w-full mt-[2rem] flex-1">
        <h4 className="font-bold mb-[15px] line-clamp-1">{prodData.title}</h4>
        <div className="flex items-center justify-between">
          <p className="font-extrabold text-[20px]">${prodData.price}0</p>
        </div>
        <p className="font-light leading-[25px] mb-[20px] text-[13px] line-clamp-2 mt-[.5rem]">
          {prodData.description}
        </p>
      </div>
      <div className="p-[20px_5px] flex justify-between w-full items-center">
        <AddChartButton productId={prodData.id} />
        <Link href={"/products/" + prodData?.id} className="text-black">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Product;

// <div className="min-w-[300px] max-w-[300px] bg-customMain pt-[17px] pr-[15px] pb-[10px] pl-[15px] rounded-[.5rem] shadow-md flex flex-col relative bg-white ">
// <Image
//   src={prodData.images[0]}
//   priority={true}
//   width={500}
//   height={500}
//   className="rounded-[10px] object-contain w-[270px] h-[176px]"
//   alt="Product Image"
// />
//   <div className="pt-[15px]">
//     <h4 className="text-neutral-7 dark:text-white text-[21px] font-bold mb-[15px]">{prodData.title}</h4>
//     <p className="text-neutral-7 dark:text-white text-[14px] font-light leading-[29px] mb-[20px]">
//       {prodData.description}
//     </p>
//     <div className="flex items-center justify-between  flex-1">
//       <p className="text-[27px] text-neutral-7 dark:text-white font-extrabold">${prodData.price}0</p>
//     </div>
//     <div className="flex justify-between mt-[20px] py-[1rem]">
//       <AddChartButton productId={prodData.id} />
//       <Link href={"/products/" + prodData?.id}>
//         <button className="dark:text-white text-black">Read More</button>
//       </Link>
//     </div>
//   </div>
// </div>
