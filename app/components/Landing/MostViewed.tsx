'use client'
import Link from "next/link";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function MostViewed({
  products,
  user,
}: {
  products: Product[];
  user: User;
}) {
  const translate = useTranslations("MostViewed");
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F3F5F7] pb-[40px] dark:bg-[#201424]"
    >
      <div className="container">
        <h2 className="font-poppins text-[#121212] font-medium py-[40px] dark:text-[#ECEDEE] text-[1.5rem] sm:text-[2.5rem]">
          {translate("head")}
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[50px]">
            {products?.map((product) => (
              <ProductItem
                key={product.product_id}
                product={product}
                isHot
                user={user}
              ></ProductItem>
            ))}
          </div>
        </div>
        <Link href={"/products"} className="block mx-auto w-fit">
          <Button
            type="button"
            className="mx-auto block mt-[30px] dark:bg-white dark:text-black"
            padding="px-[40px] py-[10px]"
            fontSize="1rem"
          >
            {translate("btn")}
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}

export default MostViewed;
