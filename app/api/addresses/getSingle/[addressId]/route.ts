import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params }: { params: { addressId: string } }
) {
  try {
    const addresId = Number(params.addressId); // Convert userId to a number if needed
    const result = await sql`
      SELECT *
      FROM addresses
      WHERE address_id = ${addresId};
    `;

    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
