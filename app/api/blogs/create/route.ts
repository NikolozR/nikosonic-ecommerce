import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: CreateBlog = await request.json();
  const {content, author_id, title, thumbnail_url} = body;
  try {
      var res = await sql`
                INSERT INTO blogs (title, author_id, content, thumbnail_url) 
                VALUES (${title}, ${author_id}, ${content}, ${thumbnail_url}) 
            `;
    
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to add item to cart" }, { status: 500 });
  }
}
