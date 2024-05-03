import Blog from "../../components/Blog";

async function getBlogs() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data?.posts;
}

async function Blogs({params: {lang}}) {
  const blogs = await getBlogs();
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
          {blogs && blogs?.map((el) => <Blog key={el.id} blogData={el} locale={lang} />)}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
