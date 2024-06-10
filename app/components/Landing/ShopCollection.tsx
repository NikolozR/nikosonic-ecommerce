import Image from "next/image";
import Headbands from '../../../public/headband.png'
import Earbuds from '../../../public/earbuds.png'
import Earphones from '../../../public/earphones.png'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function ShopCollection() {
  return (
    <section className="pb-[24px]">
      <div className="container">
        <h2 className="font-poppins font-medium text-[2.5rem] py-[48px]">Shop Collection</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-[24px] w-full h-[664px]">
            <div className="bg-[#F3F5F7] relative row-span-2">
                <Image src={Headbands} alt="Headband Collection" fill style={{objectFit: 'cover'}}></Image>
                <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
                    <h3 className="font-medium text-[34px] font-poppins">HeadBands</h3>
                    <Link href={'/products'} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">Collection <FaArrowRight /> </Link>
                </div>
            </div>
            <div className="bg-[#F3F5F7] relative">
                <Image src={Earbuds} alt="Earbud Collection" fill style={{objectFit: 'contain'}}></Image>
                <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
                    <h3 className="font-medium text-[34px] font-poppins">Earbuds</h3>
                    <Link href={'/'} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">Collection <FaArrowRight /> </Link>
                </div>
            </div>
            <div className="bg-[#F3F5F7] relative">
                <Image src={Earphones} alt="Earphones Collection" fill style={{objectFit: 'contain'}}></Image>
                <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
                    <h3 className="font-medium text-[34px] font-poppins">Earphones</h3>
                    <Link href={'/'} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">Collection <FaArrowRight /> </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default ShopCollection;
