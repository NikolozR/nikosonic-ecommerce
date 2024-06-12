import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(_: Request) {
  try {
    const res = await sql`
      SELECT blogs.*, users.*
      FROM blogs
      JOIN users ON blogs.author_id = users.id;
      `;
    const rows = res.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
