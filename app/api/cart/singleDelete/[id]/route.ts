import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  console.log(request);

  try {
    if (!id) throw new Error("Product ID is required");

    await sql`DELETE FROM cart WHERE productId = ${Number(id)};`;

    const userId = 29;
    const cart = await sql`SELECT * FROM cart WHERE userId = ${userId};`;

    return NextResponse.json({ cart: cart.rows }, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
