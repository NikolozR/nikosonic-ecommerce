import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { hashPassword } from "../../[locale]/actions";

export async function POST(request: Request) {
  const { name, email, passwordHash, age }: CreateUser = await request.json();
  const ph = await hashPassword('admin1234');

  try {
    if (!name || !email || !passwordHash)
      throw new Error("Name, Email and password hash are required");
    await sql`INSERT INTO Users (name, email, passwordhash, role, age) VALUES (${name}, ${email}, ${ph}, ${'admin'}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
