import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const result = await sql`
    ALTER TABLE users
ADD COLUMN age INT CHECK (age >= 0) NOT NULL DEFAULT 0;
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
