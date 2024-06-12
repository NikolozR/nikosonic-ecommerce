import { getAllBlogs } from "../../../api/api"
import BlogsGrid from "../../../components/Blogs/BlogsGrid"
import Hero from "../../../components/Blogs/Hero"


async function page() {
  const blogs: Blog[] = await getAllBlogs();

  return (
    <div>
        <Hero />
        <BlogsGrid blogs={blogs} />
    </div>
  )
}

export default page