import Link from "next/link";
import { getNewest, getUser } from "../../api/api";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";
import { getTranslations } from "next-intl/server";
async function NewArrivals() {
  const products: Product[] = await getNewest(4);
  const user = await getUser();
  const translate = await getTranslations("NewArrivals");
  return (
    <section className="bg-[#F3F5F7] dark:bg-[#201424] pb-[40px]">
      <div className="container">
        <h2 className="font-poppins text-[#121212] dark:text-white font-medium py-[40px] text-[2.5rem]">
          {translate("head")}
        </h2>
        <div className="grid grid-cols-4 gap-[50px] pb-[40px]">
          {products?.map((product) => (
            <ProductItem
              key={product.product_id}
              product={product}
              isNew
              user={user}
            ></ProductItem>
          ))}
        </div>
        <Link href={"/products"} className="w-fit block mx-auto">
          <Button
            type="button"
            className="mx-auto block"
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

export default NewArrivals;
