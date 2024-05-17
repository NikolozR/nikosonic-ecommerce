import { getCart } from "../../../api/api";

export default async function CheckOut() {
  const cart = await getCart("29");
  const cartItems = await cart.json();
  console.log(cartItems, "items");

  // Fetch product details for each productid in the cart
  const productPromises = cartItems.rows.map((item) =>
    fetch(`https://dummyjson.com/products/${item.productid}`).then((res) =>
      res.json()
    )
  );

  const products = await Promise.all(productPromises);

  console.log(products, "products");

  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <h1>This is the checkout page</h1>
      <div>
        {/* {products?.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
