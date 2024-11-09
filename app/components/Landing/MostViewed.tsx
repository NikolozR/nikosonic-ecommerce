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
        <h2 className="font-poppins text-[#121212] font-medium py-[40px] dark:text-[#ECEDEE] text-[1.5rem] sm:text-[2.5rem]">
          {translate("head")}
        </h2>
        <div className="w-full overflow-x-auto custom-scrollbar">
          <div className="grid grid-cols-4 min-w-[1350px] gap-[50px] pb-[10px]">
            {products?.map((product) => (
              <div
                key={product.product_id}
                className="min-w-[300px] max-w-full"
              >
                <ProductItem product={product} isNew user={user}></ProductItem>
              </div>
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
    </section>
  );
}

export default MostViewed;
