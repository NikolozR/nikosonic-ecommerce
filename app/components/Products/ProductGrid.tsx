import ProductItem from "../shared/ProductItem";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoGrid } from "react-icons/io5";

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="pb-[100px]">
      <div className="flex justify-between">
        <h2 className="font-bold text-[1.25rem] mb-[32px]">All Products</h2>
        <div className="flex">
          <div>SORT HERE</div>
          <div className="grid grid-cols-4 w-[92px]">
            <div>
              <TfiLayoutGrid3Alt />
            </div>
            <div>
              <IoGrid />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[24px]">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.product_id}
              product={product}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
