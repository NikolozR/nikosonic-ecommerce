'use client'
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

  if (blogs) {
    return (
      <section className="flex-1">
        <div className="container mx-auto">
          <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
            {blogs && blogs?.map((el) => (
              <Blog
                key={el.id}
                blogData={el}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } else return <div className="mx-auto mt-[200px]">Loading...</div>

  
}

export default Blogs;
