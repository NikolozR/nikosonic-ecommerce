import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";

export async function GET(_: Request) {
  const session = await getSession();
  const user = session?.user;
  
  if (user) {
    const avatarurl = user.picture;
    const name = user.given_name ? user.given_name : user.nickname;
    const surname = user.family_name ? user.family_name : '';
    const email = user.email;
    const sub = user.sub;

    try {
      // Check if the user exists
      const existingUser = await sql`
        SELECT 1
        FROM users
        WHERE sub = ${sub}
        LIMIT 1;
      `;

      if (existingUser.rowCount === 0) {
        await sql`
          INSERT INTO users (name, email, sub, avatarurl, surname)
          VALUES (${name}, ${email}, ${sub}, ${avatarurl}, ${surname});
        `;
      }
    } catch (error) {
      console.log(error);
    } finally {
      redirect('/');
    }
  } else {
    redirect('/');
  }
}
