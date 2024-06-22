import { getUser, getUserBlogs } from "../../../../api/api";
import BlogsGrid from "../../../../components/MyBlogs/BlogsGrid";
import ProfileSidebar from "../../../../components/Profile/ProfileSidebar";

async function MyBlogs() {
  const user: User = await getUser();
  const blogs: Blog[] = await getUserBlogs(user.id);
  return (
    <section className="mb-[80px]">
      <div className="container">
        <h1 className="font-poppins text-[3.375rem] font-medium text-center py-[40px]">
          My Blogs
        </h1>
        <div className="flex gap-[80px]">
          <ProfileSidebar user={user} active="blogs" />
          <BlogsGrid blogs={blogs} />
        </div>
      </div>
    </section>
  );
}

export default MyBlogs;
