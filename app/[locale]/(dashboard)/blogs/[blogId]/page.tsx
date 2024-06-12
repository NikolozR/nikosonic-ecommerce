import { getBlogByID } from "../../../../api/api";
import BlogDetails from "../../../../components/Blogs/BlogDetails";

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
