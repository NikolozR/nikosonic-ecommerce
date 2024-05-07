import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  const data = await request.json();
  console.log(process.env.BASE_URL)
  console.log(data);
  try {
    const {rows} = await sql`
    SELECT * FROM Users;
    `;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
