'use client'
import Image from "next/image";
import Headbands from '../../../public/headband.png'
import Earbuds from '../../../public/earbuds.png'
import Earphones from '../../../public/earphones.png'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

function ShopCollection() {
  const translate = useTranslations('ShopCollection')
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="pb-[50px] bg-white dark:bg-[#22172B]"
    >
      <div className="container">
        <h2 className="font-poppins font-medium text-[1.5rem] sm:text-[2.5rem] dark:text-[#ECEDEE] py-[48px]">{translate('head')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-[24px] w-full lg:h-[664px]">
          <motion.div
            variants={itemVariants}
            className="bg-[#F3F5F7] relative h-[664px] lg:row-span-2"
          >
            <Image src={Headbands} alt="Headband Collection" fill style={{ objectFit: 'cover' }}></Image>
            <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
              <h3 className="font-medium text-[34px] font-poppins dark:text-black">HeadBands</h3>
              <Link href={{
                pathname: '/products',
                query: {
                  categories: 'headband'
                }
              }} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">{translate('sub')} <FaArrowRight /> </Link>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#F3F5F7] h-[500px] lg:h-auto relative"
          >
            <Image src={Earbuds} alt="Earbud Collection" fill style={{ objectFit: 'contain' }}></Image>
            <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
              <h3 className="font-medium text-[34px] font-poppins dark:text-black">Earbuds</h3>
              <Link href={{
                pathname: '/products',
                query: {
                  categories: 'earbud'
                }
              }} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">{translate('sub')} <FaArrowRight /> </Link>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#F3F5F7] h-[500px] lg:h-auto relative"
          >
            <Image src={Earphones} alt="Earphones Collection" fill style={{ objectFit: 'contain' }}></Image>
            <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[12px]">
              <h3 className="font-medium text-[34px] font-poppins dark:text-black">Earphones</h3>
              <Link href={{
                pathname: '/products',
                query: {
                  categories: 'earphone'
                }
              }} className="border-b-[1px] border-solid border-[#121212] flex w-fit pb-[4px] gap-[5px] font-medium text-[1rem] text-[#121212]">{translate('sub')} <FaArrowRight /> </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default ShopCollection;
