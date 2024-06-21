import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: UpdateBlog = await request.json();
  const { blog_id, content, title, thumbnail_url } = body;

  try {
    var res = await sql`
      UPDATE blogs 
      SET title = ${title}, 
          content = ${content}, 
          thumbnail_url = ${thumbnail_url},
          updated_at = NOW()
      WHERE blog_id = ${blog_id}
    `;

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}
