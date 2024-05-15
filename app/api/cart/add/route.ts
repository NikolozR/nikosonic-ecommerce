import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: { userId: number; productId: number } = await request.json();
  const { userId, productId } = body;

  try {
    const existingCartItem = await sql`
            SELECT * FROM cart
            WHERE userId = ${userId} AND productId = ${productId};
        `;

    if (existingCartItem.rows.length > 0) {
      var res = await sql`
                UPDATE cart
                SET quantity = quantity + 1
                WHERE userId = ${userId} AND productId = ${productId};
            `;
    } else {
      var res = await sql`
                INSERT INTO cart (userId, productId, quantity) 
                VALUES (${userId}, ${productId}, ${1}) 
            `;
    }
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    );
  }
}
