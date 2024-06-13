import { getAllBlogs, getBlogByID } from "../../../../api/api";
import BlogDetails from "../../../../components/Blogs/BlogDetails";

export async function generateStaticParams() {
  const idsRes: Blog[] = await getAllBlogs();
  const ids: string[] = idsRes?.map((blog) => blog.blog_id + '');
  return ids?.map((id) => ({
    blogId: id,
  })) ?? [];
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
