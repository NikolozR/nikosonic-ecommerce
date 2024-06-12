import { IoGrid } from "react-icons/io5";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import BlogCard from "./BlogCard";
import { Link } from "../../../navigation";

function BlogsGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <section>
      <div className="container">
        <div className="mt-[40px] mb-[80px]">
          <div className="flex justify-between items-center">
            <h3 className="text-[#121212] font-bold text-[1.125rem]">
              All Blogs
            </h3>
            <div className="flex items-center">
              <div>SORT HERE</div>
              <div className="grid grid-cols-2">
                <div className="p-1 bg-[#F3F5F7] border-solid border-[1px] border-r-[0] border-[#E8ECEF]">
                  <TfiLayoutGrid3Alt />
                </div>
                <div className="p-1 bg-white border-solid border-[1px] border-[#E8ECEF]">
                  <IoGrid color="#6C7275" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[40px] mt-[40px]">
            {blogs.map((blog) => {
              return (
                <Link key={blog.blog_id} href={`/blogs/${blog.blog_id}`}>
                  <BlogCard blog={blog} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsGrid;
