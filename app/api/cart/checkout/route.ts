import { NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;
const stripe = require("stripe")(
  "sk_test_51PRI28BISmzgHGwqJX2qKh7rkN0FJLOHHvd6pZ8wRgNw8omgLbtblEUNUPTsBf7zOPNkfnF3qoy8LLrWMVFayqsk00dWG4MhBX"
);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};
export async function POST(request: Request) {
  const cartItems: CartItem[] = await request.json();
  let activeProducts = await getActiveProducts();
  try {
    let stripeItems: any = [];
    for (const cartItem of cartItems) {
      const stripeProduct = activeProducts?.find(
        (prod: StripeProduct) => Number(prod.id) === cartItem.product_id
      );
      if (stripeProduct) {
        stripeItems.push({
          price: stripeProduct?.default_price,
          quantity: cartItem?.quantity,
        });
      }
    }

    const session = await stripe.checkout.sessions.create({
        line_items: stripeItems,
        mode: "payment",
        success_url: BASE_URL + "/cart",
        cancel_url: BASE_URL + "/cart",
      });


    return NextResponse.json(
      { url: session.url },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
