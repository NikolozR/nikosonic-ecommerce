"use client";
import BlogCard from "../shared/BlogCard";
import { Link } from "../../../navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { Key, useEffect, useMemo, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Fuse from "fuse.js";
import { CiSearch } from "react-icons/ci";

function BlogsGrid({ blogs }: { blogs: Blog[] }) {
  const [currentBlogs, setCurrentBlogs] = useState(blogs);
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(blogs, {
        keys: ["title", "content"],
        includeScore: true,
        threshold: 0.4,
      }),
    [blogs]
  );
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      setCurrentBlogs(blogs);
      return;
    }

    const results = fuse.search(searchQuery);
    const filteredBlogs = results.map((result) => result.item);
    setCurrentBlogs(filteredBlogs);
  }, [searchQuery, blogs, fuse]);

  const handleSortChange = (sortCriteria: Key) => {
    setSelectedSortBy(sortCriteria.toString());
    const key = sortCriteria.toString();
    const sorted = [...currentBlogs].sort((a, b) => {
      if (key === "date_desc")
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      else if (key === "date_asc")
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      else return 0;
    });
    setCurrentBlogs(sorted);
  };

  function getDropdownBtnContent(val: string): string {
    if (val === "date_asc") return "Newest to Oldest";
    else if (val === "date_desc") return "Oldest to Newest";
    else return "Sort By";
  }

  return (
    <section>
      <div className="container">
        <div className="mt-[40px] mb-[80px]">
          <div className="flex gap-[32px] items-center">
            <h3 className="text-[#121212] items-center font-bold text-[1.125rem]">
              All Blogs
            </h3>
            <div className="flex items-center mt-[1px]">
              <Dropdown>
                <DropdownTrigger>
                  <div className="cursor-pointer flex items-center gap-[5px] font-semibold">
                    {getDropdownBtnContent(selectedSortBy)}{" "}
                    <RiArrowDownSLine size={20} />
                  </div>
                </DropdownTrigger>
                <DropdownMenu className="" onAction={handleSortChange}>
                  <DropdownItem key="date_asc">Newest to Oldest</DropdownItem>
                  <DropdownItem key="date_desc">Oldest to Newest</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Input
                type="search"
                aria-label="Search Blogs"
                placeholder="Search Blogs..."
                className="[&::-webkit-search-cancel-button]:hidden w-[300px] ml-[30px]"
                endContent={<CiSearch />}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[40px] mt-[40px]">
            {currentBlogs.map((blog) => {
              return (
                <Link key={blog.blog_id} href={`/blogs/${blog.blog_id}`}>
                  <BlogCard blog={blog} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsGrid;
