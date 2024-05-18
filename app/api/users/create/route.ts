import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, passwordHash, age, role = "user" }: CreateUser = await request.json();

  try {
    if (!name || !email || !passwordHash) throw new Error("Name, Email and password hash are required");
    await sql`INSERT INTO Users (name, email, passwordhash, role, age) VALUES (${name}, ${email}, ${passwordHash}, ${role}, ${age});`;
  } catch (error) {
    throw error;
  }

  const res = await sql`SELECT * FROM Users WHERE email = ${email};`;
  const user = res?.rows[0];
  const responseUser: User = {
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
    role: user.role,
  };
  return NextResponse.json({ responseUser }, { status: 200 });
}
