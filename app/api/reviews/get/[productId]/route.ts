import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: Request,
  { params: { productId } }: { params: { productId: string } }
) {
  try {
    const res = await sql`
     SELECT * FROM reviews WHERE product_id = ${Number(productId)};
    `;
    const rows = res.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
