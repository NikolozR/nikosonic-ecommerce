import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  _: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const result = await sql`
      UPDATE products
SET views = views + 1
WHERE product_id = ${Number(params.productId)};`;
    return NextResponse.json(
      { result, message: "Product Views Incremented Succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
