import { Claims } from "@auth0/nextjs-auth0";
import { getAuth0User } from "../../../actions";
import {
  getAllProducts,
  getBrands,
  getProductsByFilter,
  getUser,
} from "../../../api/api";
import FilterSidebar from "../../../components/Products/FilterSidebar";
import ProductGrid from "../../../components/Products/ProductGrid";

async function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const brands: { brand_name: string }[] = await getBrands();
  const brandsMapped = brands.map((brand) => brand.brand_name);
  const products: Product[] =
    Object.keys(searchParams).length === 0
      ? await getAllProducts()
      : await getProductsByFilter(searchParams);
  const user = await getUser();
  const authUser: Claims | undefined = await getAuth0User();
  return (
    <main className="dark:bg-[#201424]">
      <div className="container">
        <div className="flex flex-col md:flex-row w-full gap-[80px] pt-[40px]">
          <FilterSidebar brands={brandsMapped} />
          <div className="flex-1">
            <ProductGrid products={products} user={user} auth0User={authUser} ></ProductGrid>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
