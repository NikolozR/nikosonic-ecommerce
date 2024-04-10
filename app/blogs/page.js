'use client'
import { blogsData } from "../../data/blogsData";
import Blog from "../../components/Blog";
import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/posts');
      const data = await res.json();
      setBlogs(data?.posts);
    };
    fetchData()
  }, [])

  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
          {blogs && blogs?.map((el) => (
            <Blog
              key={el.id}
              title={el.title}
              description={el.description}
              date={el.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
