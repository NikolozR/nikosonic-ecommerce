import Link from "next/link";
import { getNewest, getUserBySub } from "../../api/api";
import Button from "../shared/Button";
import ProductItem from "../shared/ProductItem";
import { getAuth0User } from "../../actions";
async function NewArrivals() {
  const products: Product[] = await getNewest(4);
  const sub = (await getAuth0User())?.sub;
  const user = await getUserBySub(sub);
  return (
    <section className="bg-[#F3F5F7] pb-[40px]">
      <div className="container">
        <h2 className="font-poppins text-[#121212] font-medium py-[40px] text-[2.5rem]">
          New Arrivals
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
        <Button
          type="button"
          className="mx-auto block"
          padding="px-[40px] py-[10px]"
          fontSize="1rem"
        >
          <Link href={"/products"}>Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}

export default NewArrivals;
