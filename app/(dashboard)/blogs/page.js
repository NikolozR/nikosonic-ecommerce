import { notFound } from "next/navigation";
import Blog from "../../components/Blog";

async function getBlogs() {
  const res = await fetch('http://localhost:3000/api/blogs')
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    notFound()
  }
}

async function Blogs() {
  const blogs = await getBlogs();

  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
          {blogs && blogs?.map((el) => <Blog key={el.id} blogData={el} />)}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
