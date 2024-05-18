import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(request);

  try {
    const result = await sql`
      SELECT * FROM cart WHERE userId = ${Number(params.id)};
    `;
    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
