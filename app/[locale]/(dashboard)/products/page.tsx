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
  return (
    <main>
      <div className="container">
        <div className="flex w-full gap-[80px] mt-[40px]">
          <FilterSidebar brands={brandsMapped} />
          <div className="flex-1">
              <ProductGrid products={products} user={user}></ProductGrid>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
