import { getCart } from "../../../api/api";
import Image from "next/image";

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
      <h1>This is the checkout page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Image
              width={100}
              height={100}
              src={product.thumbnail}
              alt="prodcut"
            />
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {productQuantityMap[product.id]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
