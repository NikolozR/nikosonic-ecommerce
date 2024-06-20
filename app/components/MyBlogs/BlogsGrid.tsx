import React from "react";
import OptimisticComponent from "./OptimisticComponent";

function BlogsGrid({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="grid grid-cols-3 gap-[40px] mt-[40px] flex-1">
      <OptimisticComponent blogs={blogs} />
    </div>
  );
}

export default BlogsGrid;
