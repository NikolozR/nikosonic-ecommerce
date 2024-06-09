import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: NextRequest, {params: {sub}}: {params: {sub: string}}) {
  try {
    const result = await sql`
      SELECT * FROM users WHERE sub = ${sub}; 
    `;
    const rows = result?.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
