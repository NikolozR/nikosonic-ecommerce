import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    name,
    email,
    passwordHash,
    age,
    role = "user",
  }: CreateUser = await request.json();



  try {
    if (!name || !email || !passwordHash)
      throw new Error("Name, Email and password hash are required");
    await sql`INSERT INTO Users (name, email, passwordhash, role, age) VALUES (${name}, ${email}, ${passwordHash}, ${role}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
