import DeleteAll from "../../components/checkOutButtons/DeleteAll";
import CartItem from "../../components/CartItem";
import { getAllCart } from "../../actions";

async function productFetch() {
  const cartItems = await getAllCart();
  const productQuantityMap: ProductQuantityMap = [];
  cartItems.rows.forEach((item: CartItem) => {
    productQuantityMap[item.productid] = item.quantity;
  });
  const productPromises: Product[] = cartItems.rows.map((item: CartItem) =>
    fetch(`https://dummyjson.com/products/${item.productid}`, {
      cache: 'force-cache'
    }).then((res) =>
      res.json()
    )
  );
  const products: Product[] = (await Promise.all(productPromises)).sort(
    (a, b) => a.id - b.id
  );
  return {
    products, productQuantityMap
  };
}

export default async function CheckOut() {
  const {productQuantityMap, products} = await productFetch();

  return (
    <div className="w-full mx-auto mt-[30px] flex flex-col items-center">
      <DeleteAll />
      <div className="w-full">
        {products.map((product: Product, idx) => (
          <CartItem
            key={idx}
            product={product}
            initialQuantity={productQuantityMap[product.id]}
            productId={product.id}
          />
        ))}
      </div>
    </div>
  );
}
