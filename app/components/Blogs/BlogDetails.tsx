import Image from "next/image";
import { CiCalendar } from "react-icons/ci";

function BlogDetails({ blog }: { blog: Blog }) {
  const date = new Date(blog.created_at);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 because month is zero-based
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return (
    <div>
      <span className="font-extrabold block text-[0.75rem] leading-[12px] pb-[24px]">
        ARTICLE
      </span>
      <h1 className="font-poppins dark:text-[#ECEDEE] font-medium text-[3.2rem] xs:text-[3.375rem] text-[#141718] leading-[50px] xs:leading-[58px] mb-[24px]">
        {blog.title}
      </h1>
      <div className="flex w-fit gap-[48px] items-center">
        <div className="flex gap-[5px] items-center">
          <div className="relative w-[30px] h-[30px] rounded-[50%]">
            <Image
              src={blog.avatarurl}
              alt="Profile Picture"
              fill
              className="object-cover rounded-[50%]"
            />
          </div>
          <span className="text-[#6C7275] text-[0.75rem] xs:text-[1rem]">{blog.displayname}</span>
        </div>
        <div className="flex gap-[5px] items-center">
          <CiCalendar color="#6C7275" size={30} />
          <span className="text-[#6C7275] text-[0.75rem] xs:text-[1rem] leading-[26px] ">
            {formattedDate}
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-[25px] lg:gap-[50px]">
        <div className="relative w-full h-[400px] mt-[40px]">
          <Image
            src={blog.thumbnail_url}
            alt="Blog Thumbnail"
            fill
            className="object-cover"
          ></Image>
        </div>
        <p className="leading-[26px] text-[1rem] mt-[40px]">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
