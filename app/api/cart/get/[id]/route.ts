import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await sql`
      SELECT 
        cart.id,
        cart.user_id,
        cart.quantity,
        cart.created_at,
        cart.updated_at,
        products.*
      FROM cart
      JOIN products ON cart.product_id = products.product_id
      WHERE cart.user_id = ${Number(params.id)}
      ORDER BY cart.created_at;
    `;
    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
