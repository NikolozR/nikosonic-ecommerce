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
    if (existingCartItem?.rows.length > 0) {
      const currentQuantity = existingCartItem?.rows[0].quantity;
      if (currentQuantity > 1) {
        await sql`
                    UPDATE cart
                    SET quantity = quantity - 1
                    WHERE userId = ${userId} AND productId = ${productId};
                `;
      } else {
        await sql`
                    DELETE FROM cart
                    WHERE userId = ${userId} AND productId = ${productId};
                `;
      }
    } else {
      return NextResponse.json({ error: "Item not found in cart" }, { status: 404 });
    }
    return NextResponse.json({ message: "Item removed from cart" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove item from cart" }, { status: 500 });
  }
}
