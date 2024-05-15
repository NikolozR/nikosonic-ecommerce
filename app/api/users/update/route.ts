import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function PATCH(request: Request) {
  const { id, name, email, role, age }: User = await request.json();

  try {
    const result = await sql`
   UPDATE users
      SET name = ${name}, email = ${email}, role = ${role}, age = ${age}
      WHERE id = ${id};
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
