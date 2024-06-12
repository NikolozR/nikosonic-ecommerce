import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: CreateReview = await request.json();
  const { userId, productId, rating, comment } = body;
  
  try {
    const res = await sql`
      INSERT INTO reviews (user_id, product_id, rating, comment) 
      VALUES (${userId}, ${productId}, ${rating}, ${comment}) 
    `;
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}
