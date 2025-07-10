'use client'
import Link from "next/link";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function NewArrivals({
  products,
  user,
}: {
  products: Product[];
  user: User;
}) {
  const translate = useTranslations("NewArrivals");
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F3F5F7] dark:bg-[#201424] pb-[40px]"
    >
      <div className="container">
        <h2 className="font-poppins text-[#121212] dark:text-white font-medium py-[40px] text-[1.5rem] sm:text-[2.5rem]">
          {translate("head")}
        </h2>
        <div className="w-full">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[50px]">
            {products?.map((product) => (
              <ProductItem
                key={product.product_id}
                product={product}
                isNew
                user={user}
              ></ProductItem>
            ))}
          </div>
        </div>
        <Link href={"/products"} className="w-fit block mx-auto">
          <Button
            type="button"
            className="mx-auto mt-[30px] block dark:bg-white dark:text-black"
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

export default NewArrivals;
