import { getCart } from "../../../api/api";
import Image from "next/image";
import DeleteAll from "../../components/checkOutButtons/DeleteAll";
import IncrementProductIcon from "../../components/checkOutButtons/IncrementProductIcon";
import DecrementProductIcon from "../../components/checkOutButtons/DecrementProductIcon";
import DeleteIcon from "../../components/checkOutButtons/DeleteIcon";
export const revalidate = 0;

export default async function CheckOut() {
  const cart = await getCart("29");
  const cartItems = await cart.json();

  const productQuantityMap: ProductQuantityMap = [];
  cartItems.rows.forEach((item: CartItem) => {
    productQuantityMap[item.productid] = item.quantity;
  });

  const productPromises = cartItems.rows.map((item: CartItem) =>
    fetch(`https://dummyjson.com/products/${item.productid}`).then((res) =>
      res.json()
    )
  );

  const products = await Promise.all(productPromises);

  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <DeleteAll />
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            className=" w-full flex justify-between  items-center mb-[15px]"
          >
            <Image
              width={150}
              height={150}
              src={product.thumbnail}
              alt="prodcut"
            />
            <div className="flex flex-col items-center justify-center">
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Quantity: {productQuantityMap[product.id]}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IncrementProductIcon />
              <DecrementProductIcon />
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
