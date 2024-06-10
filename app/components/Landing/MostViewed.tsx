import Link from "next/link";
import { getMostVieweds } from "../../api/api";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";

async function MostViewed() {
  const products: Product[] = await getMostVieweds(4);

  return (
    <section className="bg-[#F3F5F7] pb-[40px]">
      <div className="container">
        <h2 className="font-poppins text-[#003285] font-medium py-[40px] text-[2.5rem]">
          Most Viewed
        </h2>
        <div className="grid grid-cols-4 gap-[50px] pb-[40px]">
          {products.map((product) => (
            <ProductItem
              key={product.product_id}
              product={product}
              isHot
            ></ProductItem>
          ))}
        </div>
        <Button type="button" className="mx-auto block" padding="px-[40px] py-[10px]" fontSize="1rem">
            <Link href={'/products'}>Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}

export default MostViewed;
