import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(_: Request, { params: { blogId } }: { params: { blogId: string } }) {
  try {
    await sql`
      DELETE FROM blogs
      WHERE blog_id = ${Number(blogId)}
    `;

    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
