import Image from "next/image";
import BlogEditDeleteButtons from "./BlogEditDeleteButtons";

function BlogCard({
  blog,
  editMode = false,
  updateOptimisticBlogs,
  blogs
}: {
  blog: Blog;
  editMode?: boolean;
  blogs?: Blog[];
  updateOptimisticBlogs?: (a: Blog[]) => void;
}) {
  const date = new Date(blog.created_at);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="relative">
      <div className="relative aspect-square mb-[24px]">
        <Image src={blog.thumbnail_url} alt="Blog Thumbnail" fill />
      </div>
      <h3 className="font-medium font-poppins text-black text-[1.25rem] leading-[28px] mb-[8px]">
        {blog.title}
      </h3>
      <p className="text-[#23262F] text-[0.725rem] leading-[20px] mb-[8px]">
        {formattedDate}
      </p>
      {editMode && updateOptimisticBlogs && (
        <BlogEditDeleteButtons blogs={blogs ?? []} updateOptimisticBlogs={updateOptimisticBlogs} blogId={blog.blog_id} />
      )}
    </div>
  );
}

export default BlogCard;
