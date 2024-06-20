"use client";
import React, { useOptimistic } from "react";
import BlogCard from "../shared/BlogCard";

function OptimisticComponent({ blogs }: { blogs: Blog[] }) {
  const [optimisticBlogs, updateOptmisticBlogs] = useOptimistic(
    blogs,
    (_, newBlogs: Blog[]) => {
      return newBlogs;
    }
  );
  return (
    <>
      {optimisticBlogs.map((blog) => {
        return (
          <BlogCard
            key={blog.blog_id}
            blog={blog}
            editMode
            blogs={optimisticBlogs}
            updateOptimisticBlogs={updateOptmisticBlogs}
          />
        );
      })}
    </>
  );
}

export default OptimisticComponent;
