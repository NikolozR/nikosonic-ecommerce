import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: { email: string } = await request.json();
  const { email } = body;

  try {
    const existingSubscriber = await sql`
      SELECT * FROM newsletters
      WHERE email = ${email};
    `;

    if (existingSubscriber?.rowCount > 0) {
      return NextResponse.json({ message: "Email is already subscribed" }, { status: 409 });
    } else {
      await sql`
        INSERT INTO newsletters (email)
        VALUES (${email});
      `;
      return NextResponse.json({ message: "Email subscribed successfully" }, { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to subscribe email" }, { status: 500 });
  }
}
