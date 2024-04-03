import { blogsData } from "../../data/blogsData";
import Blog from "../../components/Blog";

function Blogs() {
  return (
    <section className="flex-1">
      <div className="container mx-auto">
        <div className="w-full grid grid-flow-col gap-[40px] overflow-x-auto">
          {blogsData.map((el) => (
            <Blog
              key={el.id}
              title={el.title}
              description={el.description}
              image={el.imageUrl}
              date={el.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
