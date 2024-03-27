import { blogsData } from "../data/blogsData";
import Blog from "../components/Blog";
import "../styles/Blogs.scss";

function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <div className="blogs-grid">
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
