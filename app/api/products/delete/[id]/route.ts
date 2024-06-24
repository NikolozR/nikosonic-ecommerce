import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const res = await sql`UPDATE products SET isActive = FALSE WHERE product_id = ${Number(id)};`;
    console.log(res);
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
