import React from "react";
import Button from "./Button";
import { deleteBlog } from "../../api/api";
import Link from "next/link";

function BlogEditDeleteButtons({blogs, updateOptimisticBlogs, blogId}: {blogs: Blog[],updateOptimisticBlogs: (a: Blog[]) => void, blogId: number}) {
  return (
    <div className="grid grid-cols-2 w-full gap-[10px]">
      <Link href={'/blogs/edit/' + blogId}>
      <Button
        type="button"
        className="block w-full"
        fontSize="1rem"
        padding="px-[0] py-[10px]"
      >
        Edit
      </Button></Link>
      <Button
        type="button"
        className="block w-full"
        fontSize="1rem"
        padding="px-[0] py-[10px]"
        handleClick={() => {
            const newBlogs = blogs.filter((blog) => blog.blog_id !== blogId)
            updateOptimisticBlogs(newBlogs);
            deleteBlog(blogId);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default BlogEditDeleteButtons;
