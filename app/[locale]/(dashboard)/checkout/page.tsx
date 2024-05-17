import { getCart } from "../../../api/api";
import Image from "next/image";
import DeleteAll from "../../components/checkOutButtons/DeleteAll";

export const revalidate = 0;

export default async function CheckOut() {
  const cart = await getCart("29");
  const cartItems = await cart.json();
  console.log(cartItems, "items");

  const productQuantityMap = [];
  cartItems.rows.forEach((item) => {
    productQuantityMap[item.productid] = item.quantity;
  });

  const productPromises = cartItems.rows.map((item: Product) =>
    fetch(`https://dummyjson.com/products/${item.productid}`).then((res) =>
      res.json()
    )
  );

  const products = await Promise.all(productPromises);

  //   console.log(products, "products");

  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <DeleteAll />
      <div>
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <Image
              width={100}
              height={100}
              src={product.thumbnail}
              alt="prodcut"
            />
            <div>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Quantity: {productQuantityMap[product.id]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
