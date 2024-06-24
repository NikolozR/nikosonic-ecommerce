import { getBlogByID } from "../../../../api/api";
import { QueryResultRow, sql } from "@vercel/postgres";
import BlogDetails from "../../../../components/Blogs/BlogDetails";

export async function generateStaticParams() {
  const res = await sql`
      SELECT blogs.*, users.*
      FROM blogs
      JOIN users ON blogs.author_id = users.id;
      `;
  const idsRes: Blog[] = res.rows.map((d: QueryResultRow) => d as Blog);
  const ids: string[] = idsRes?.map((blog) => blog.blog_id + "");
  return ids?.map((id) => ({
    blogId: id,
  }));
}

async function page({ params: { blogId } }: { params: { blogId: string } }) {
  const blog: Blog = await getBlogByID(Number(blogId));

  return (
    <section className="mt-[56px] mb-[80px]">
      <div className="container">
        <BlogDetails blog={blog} />
      </div>
    </section>
  );
}

export default page;
