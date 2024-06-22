import { NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;
const stripe = require("stripe")(
  "sk_test_51PRI28BISmzgHGwqJX2qKh7rkN0FJLOHHvd6pZ8wRgNw8omgLbtblEUNUPTsBf7zOPNkfnF3qoy8LLrWMVFayqsk00dWG4MhBX"
);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list({
    limit: 10000
  });
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};
export async function POST(request: Request) {
  const {cartItems, shippingAddress, billingAddress}: {cartItems: CartItem[], shippingAddress: MyAddress | AddressInput, billingAddress: MyAddress | AddressInput} = await request.json();
  let shippingFinalAddress = ''
  let billingFinalAddress = ''
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

    if ('address' in shippingAddress) {
      shippingFinalAddress = `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}`
    } else {
      shippingFinalAddress = `${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.country}`
    }

    if ('address' in billingAddress) {
      billingFinalAddress = `${billingAddress.address}, ${billingAddress.city}, ${billingAddress.country}`
    } else {
      billingFinalAddress = `${billingAddress.street}, ${billingAddress.city}, ${billingAddress.country}`
    }

    const session = await stripe.checkout.sessions.create({
        line_items: stripeItems,
        mode: "payment",
        success_url: BASE_URL + "/api/cart/checkout/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: BASE_URL + "/cart",
        metadata: {
          billingAddress: billingFinalAddress,
          shippingAddress: shippingFinalAddress
        }
      });

    return NextResponse.json(
      { url: session.url, id: session.id },
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
