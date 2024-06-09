import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  const session = await getSession()
  const user = session?.user;
  if (user) {
    const avatarurl = user.picture;
    const name = user.given_name ? user.given_name : user.nickname;
    const surname = user.family_name ? user.family_name : '';
    const email = user.email;
    const sub = user.sub;
    try {
      await sql`
        INSERT INTO users (name, email, sub, avatarurl, surname)
        VALUES (${name}, ${email}, ${sub}, ${avatarurl}, ${surname});
      `;
    } catch (error) {
      console.log(error)
    } finally {
      redirect('/')
    }
  } else {
    redirect('/')
    return NextResponse.json({ }, { status: 200 });
  }
  
}
