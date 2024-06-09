import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const body = await req.json();
  try {
    await sql`
   UPDATE users
      SET avatarurl = ${body.url}
      WHERE sub = ${body.sub};
    `;
    return NextResponse.json(
      { message: "Information was updated succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
