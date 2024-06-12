import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: { userId: number; productId: number; quantity: number } = await request.json();
  const { userId, productId, quantity } = body;

  try {
    const existingCartItem = await sql`
      SELECT * FROM cart
      WHERE user_id = ${userId} AND product_id = ${productId};
    `;

    if (existingCartItem?.rowCount > 0) {
      await sql`
        UPDATE cart
        SET quantity = quantity + ${quantity}
        WHERE user_id = ${userId} AND product_id = ${productId};
      `;
    } else {
      await sql`
        INSERT INTO cart (user_id, product_id, quantity)
        VALUES (${userId}, ${productId}, ${quantity});
      `;
    }
    return NextResponse.json({ message: "Item added to cart successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add item to cart" }, { status: 500 });
  }
}
