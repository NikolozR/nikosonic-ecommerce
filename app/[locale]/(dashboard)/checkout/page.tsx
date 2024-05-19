import { getCart } from "../../../api/api";
import DeleteAll from "../../components/checkOutButtons/DeleteAll";
import { cookies } from "next/headers";
import CartItem from "../../components/CartItem";
export const revalidate = 0;

export default async function CheckOut() {
  const cart = await getCart("29");
  const cartItems = await cart.json();
  const userId = JSON.parse(cookies().get("user")?.value as string)
    ?.responseUser?.id;

  const productQuantityMap: ProductQuantityMap = [];
  cartItems.rows.forEach((item: CartItem) => {
    productQuantityMap[item.productid] = item.quantity;
  });

  const productPromises: Product[] = cartItems.rows.map((item: CartItem) =>
    fetch(`https://dummyjson.com/products/${item.productid}`).then((res) =>
      res.json()
    )
  );

  const products: Product[] = (await Promise.all(productPromises)).sort(
    (a, b) => a.id - b.id
  );

  console.log(products);

  return (
    <div className="w-full mx-auto mt-[30px] flex flex-col items-center">
      <DeleteAll userId={userId} />
      <div className="w-full">
        {products.map((product: Product, idx) => (
          <CartItem
            key={idx}
            product={product}
            initialQuantity={productQuantityMap[product.id]}
            productId={product.id}
            userId={userId}
          />
        ))}
      </div>
    </div>
  );
}
