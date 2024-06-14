import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
const stripe = require('stripe')('sk_test_51PRI28BISmzgHGwqJX2qKh7rkN0FJLOHHvd6pZ8wRgNw8omgLbtblEUNUPTsBf7zOPNkfnF3qoy8LLrWMVFayqsk00dWG4MhBX');

export async function POST(request: Request) {
  const body: CreateProduct = await request.json();
  const {name, brand, color, price, thumbnail_url, gallery_urls, description, category} = body;
  const gallery = JSON.stringify(gallery_urls).replace("[", "{").replace("]", "}");
  
  try {
    var res = await sql`
      INSERT INTO products (name, brand, color, price, thumbnail_url, gallery_urls, description, category) 
      VALUES (${name}, ${brand}, ${color}, ${price}, ${thumbnail_url}, ${gallery}, ${description}, ${category}) 
      RETURNING *
    `;
    const product: Product = res.rows[0] as Product;
    await stripe.products.create({
      name: brand + " " + name,
      id: product.product_id,
      default_price_data: {
        currency: "usd",
        unit_amount: price * 100,
      },
    });

    return NextResponse.json({message: 'Product Added Succesfully'}, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add item" }, { status: 500 });
  }
}
