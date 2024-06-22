import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const result = await sql`
      SELECT 
        orders.order_id,
        orders.user_id,
        orders.created_at AS order_created_at,
        orders.updated_at AS order_updated_at,
        order_items.order_item_id,
        order_items.order_id,
        order_items.product_id,
        order_items.quantity AS order_item_quantity,
        products.name,
        products.price,
        products.description,
        products.thumbnail_url,
        products.brand
      FROM orders
      JOIN order_items ON orders.order_id = order_items.order_id
      JOIN products ON order_items.product_id = products.product_id
      WHERE orders.user_id = ${Number(params.userId)}
      ORDER BY orders.created_at;
    `;
    
    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
