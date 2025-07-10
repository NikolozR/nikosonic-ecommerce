import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(_: Request) {
  try {
    await stripe.products.create({
      name: "JBL Wave 200",
      id: 49,
      default_price_data: {
        currency: "usd",
        unit_amount: 199 * 100,
      },
    });

    return NextResponse.json({message: 'Product Added Succesfully'}, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 });
  }
}
