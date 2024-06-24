import Link from "next/link";
import { getMostVieweds, getUser } from "../../api/api";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";
import { getTranslations } from "next-intl/server";

async function MostViewed() {
  const products: Product[] = await getMostVieweds(4);
  const user = await getUser();
  const translate = await getTranslations("MostViewed");
  return (
    <section className="bg-[#F3F5F7] pb-[40px] dark:bg-[#201424]">
      <div className="container">
        <h2 className="font-poppins text-[#121212] font-medium py-[40px] dark:text-[#ECEDEE] text-[2.5rem]">
          {translate("head")}
        </h2>
        <div className="grid grid-cols-4 gap-[50px] pb-[40px]">
          {products?.map((product) => (
            <ProductItem
              user={user}
              key={product.product_id}
              product={product}
              isHot
            ></ProductItem>
          ))}
        </div>
        <Link href={"/products"} className="block mx-auto w-fit">
          <Button
            type="button"
            className="mx-auto block dark:bg-white dark:text-black"
            padding="px-[40px] py-[10px]"
            fontSize="1rem"
          >
            {translate("btn")}
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default MostViewed;
