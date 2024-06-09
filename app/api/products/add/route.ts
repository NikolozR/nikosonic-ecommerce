import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: CreateProduct = await request.json();
  const {name, brand, color, price, thumbnail_url, gallery_urls, description} = body;
  const gallery = JSON.stringify(gallery_urls).replace("[", "{").replace("]", "}")
  try {
      var res = await sql`
                INSERT INTO products (name, brand, color, price, thumbnail_url, gallery_urls, description) 
                VALUES (${name}, ${brand}, ${color}, ${price}, ${thumbnail_url}, ${gallery}, ${description}) 
            `;
    
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add item to cart" }, { status: 500 });
  }
}
