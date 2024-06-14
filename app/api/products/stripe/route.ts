import { NextResponse } from "next/server";
const stripe = require('stripe')('sk_test_51PRI28BISmzgHGwqJX2qKh7rkN0FJLOHHvd6pZ8wRgNw8omgLbtblEUNUPTsBf7zOPNkfnF3qoy8LLrWMVFayqsk00dWG4MhBX');

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
