import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { testPassword } from "../../[locale]/actions";

export const revalidate = 0;

export async function POST(request: Request) {
  const data: LogInUser = await request.json();
  try {
    const res = await sql`
      SELECT * FROM Users WHERE email = ${data.email};
    `;
    const validPass = await testPassword(data.password, res.rows[0].passwordhash)
    if (
      res.rows.length === 0 || !validPass
    ) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    } else {
      const user = res.rows[0]
      const responseUser: User = {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        role: user.role
      }
      return NextResponse.json({ responseUser }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
