import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(_: NextRequest, { params }: { params: { orderId: string } }) {
  try {
    const orderId = Number(params.orderId);
    
    const result = await sql`
      UPDATE orders
      SET order_status = 'canceled'
      WHERE order_id = ${orderId}
    `;
    const rows = result.rows;

    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}