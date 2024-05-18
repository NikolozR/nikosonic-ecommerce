import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  try {
    const res = await sql`DELETE From Users WHERE id = ${Number(id)};`;
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
