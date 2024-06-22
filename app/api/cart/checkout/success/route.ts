import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { clearCart, getUser } from "../../../api";
const stripe = require("stripe")(
  "sk_test_51PRI28BISmzgHGwqJX2qKh7rkN0FJLOHHvd6pZ8wRgNw8omgLbtblEUNUPTsBf7zOPNkfnF3qoy8LLrWMVFayqsk00dWG4MhBX"
);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("session_id");

  try {
    const user: User = await getUser();
    // Product That were purchased, at this moment empty array
    const checkedOutItems: StripeProduct[] = [];

    const session = await stripe.checkout.sessions.retrieve(query);
    const shippingAddress = session.metadata.shippingAddress;
    const billingAddress = session.metadata.billingAddress;
    const totalPrice = session.amount_total / 100;
    const stripe_session_id = session.id;
    // Line items that were purchased, only connection we have is product name
    const checkoutItems: StripeCheckoutListItem[] = (
      await stripe.checkout.sessions.listLineItems(query)
    ).data;

    // Getting all stripe products to match names with purchased line items
    const products: StripeProduct[] = (await stripe.products.list()).data;
    
    // matching logic
    checkoutItems.forEach((element) => {
      const product = products.find((el) => el.name === element.description);
      if (product) {
        product.quantity = element.quantity;
        checkedOutItems.push(product);
      }
    });

    const res =
      await sql`INSERT INTO orders (user_id, total_price, stripe_session_id, shipping_address, billing_address)
       VALUES (${user.id}, ${totalPrice}, ${stripe_session_id}, ${shippingAddress}, ${billingAddress})
       RETURNING order_id`;

    const order_id = res.rows[0].order_id;

    const orderItemsData = checkedOutItems.map((item) => ({
      order_id: order_id,
      product_id: item.id,
      quantity: item.quantity,
    }));

    orderItemsData.forEach(async (el) => {
      await sql`INSERT INTO order_items (order_id, product_id, quantity)
         VALUES (${el.order_id}, ${el.product_id}, ${el.quantity})`;
    });

    await clearCart();

    const response = NextResponse.redirect(
      new URL("/checkout/complete/" + order_id, request.url)
    );
    response.cookies.set("access_complete", "true", { maxAge: 60 * 10 });
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
