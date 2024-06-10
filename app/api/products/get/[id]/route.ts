import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await sql`
      SELECT * FROM products WHERE product_idg = ${Number(params.id)};
    `;
    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
} catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
