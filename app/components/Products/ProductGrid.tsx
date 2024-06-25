"use client";
import React, { Key, useEffect, useState, useMemo } from "react";
import ProductItem from "../shared/ProductItem";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoGrid } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import Fuse from "fuse.js";
import { useTranslations } from "next-intl";
import { Claims } from "@auth0/nextjs-auth0";

const ITEMS_PER_PAGE = 9;

function getDropdownBtnContent(val: string): string {
  if (val === "price_asc") return "priceAsc";
  else if (val === "price_desc") return "priceDesc";
  else if (val === "name_asc") return "nameAsc";
  else if (val === "name_desc") return "nameDesc";
  else return "sort";
}

function sortProducts(products: Product[], selectedSortBy: string): Product[] {
  const sorted = [...products].sort((a, b) => {
    if (selectedSortBy === "price_asc") return a.price - b.price;
    else if (selectedSortBy === "price_desc") return b.price - a.price;
    else if (selectedSortBy === "name_asc")
      return (a.brand + " " + a.name).localeCompare(b.brand + " " + b.name);
    else if (selectedSortBy === "name_desc")
      return (b.brand + " " + b.name).localeCompare(a.brand + " " + a.name);
    else return 0;
  });
  return sorted;
}

function filterProducts(
  products: Product[],
  query: string,
  fuse: Fuse<Product>
): Product[] {
  if (!query) return products;
  return fuse.search(query).map((result) => result.item);
}

function ProductGrid({
  products,
  user,
  auth0User,
}: {
  products: Product[];
  user: User;
  auth0User: Claims | undefined;
}) {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");
  const [grid, setGrid] = useState(3);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const t = useTranslations("Products");

  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: ["name", "brand"],
        threshold: 0.4,
      }),
    [products]
  );

  const handleGridChange = (layout: number) => {
    setGrid(layout);
  };

  useEffect(() => {
    let updatedProducts = sortProducts(products, selectedSortBy);
    updatedProducts = filterProducts(updatedProducts, searchQuery, fuse);
    setSortedProducts(updatedProducts);
  }, [products, selectedSortBy, searchQuery, fuse]);

  const handleSortChange = (sortCriteria: Key) => {
    setSelectedSortBy(sortCriteria.toString());
    const key = sortCriteria.toString();
    let updatedProducts = sortProducts(products, key);
    updatedProducts = filterProducts(updatedProducts, searchQuery, fuse);
    setSortedProducts(updatedProducts);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <div className="pb-[100px]">
      <div className="flex flex-col xs:flex-row justify-between mb-[32px] items-center">
        <h2 className="font-bold hidden sm:block text-[1rem] lg:text-[1.25rem] dark:text-[#ECEDEE]">
          {t("products")}
        </h2>
        <Input
          type="search"
          aria-label="Search Products"
          placeholder={t("placeholder")}
          className="w-[200px] lg:w-[300px]"
          endContent={<CiSearch />}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex items-center ml-[50px] xs:ml-0 mt-[20px] xs:mt-0 gap-[32px]">
          <Dropdown>
            <DropdownTrigger>
              <div className="cursor-pointer flex items-center gap-[5px] font-semibold text-[0.75rem] lg:text-[1rem] dark:text-[#ECEDEE]">
                {t(getDropdownBtnContent(selectedSortBy))}{" "}
                <RiArrowDownSLine size={20} />
              </div>
            </DropdownTrigger>
            <DropdownMenu className="" onAction={handleSortChange}>
              <DropdownItem className="text-[0.75rem] lg:text-[1rem]" key="price_asc">{t("priceAsc")}</DropdownItem>
              <DropdownItem className="text-[0.75rem] lg:text-[1rem]" key="price_desc">{t("priceDesc")}</DropdownItem>
              <DropdownItem className="text-[0.75rem] lg:text-[1rem]" key="name_asc">{t("nameAsc")}</DropdownItem>
              <DropdownItem className="text-[0.75rem] lg:text-[1rem]" key="name_desc">{t("nameDesc")}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="flex gap-0">
            <div
              className={`cursor-pointer hidden lg:block !dark:hidden w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] border-r-0 ${
                grid === 3 ? "bg-[#F3F5F7]" : ""
              }`}
              onClick={() => handleGridChange(3)}
            >
              <TfiLayoutGrid3Alt />
            </div>
            <div
              className={`cursor-pointer hidden dark:lg:block w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] border-r-0 ${
                grid === 3 ? "bg-[#F3F5F7] dark:bg-black" : ""
              }`}
              onClick={() => handleGridChange(3)}
            >
              <TfiLayoutGrid3Alt color="white" />
            </div>
            <div
              className={`cursor-pointer hidden lg:block !dark:hidden w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] ${
                grid === 2 ? "bg-[#F3F5F7]" : ""
              }`}
              onClick={() => handleGridChange(2)}
            >
              <IoGrid />
            </div>
            <div
              className={`cursor-pointer hidden dark:lg:block w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] ${
                grid === 2 ? "bg-[#F3F5F7] dark:lg:bg-black" : ""
              }`}
              onClick={() => handleGridChange(2)}
            >
              <IoGrid color="white" />
            </div>
          </div>
        </div>
      </div>
      {paginatedProducts.length > 0 ? (
        <div
          className={
            grid === 3
              ? `grid md:grid-cols-2 gap-[24px] lg:grid-cols-3`
              : `grid md:grid-cols-2 gap-[24px] lg:grid-cols-2`
          }
        >
          {paginatedProducts.map((product) => {
            return (
              <ProductItem
                auth0User={auth0User}
                key={product.product_id}
                product={product}
                user={user}
                grid={grid}
              ></ProductItem>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[400px]">
          <h2 className="text-2xl font-bold dark:text-[#ECEDEE]">{"No Products Found"}</h2>
        </div>
      )}
      <div className="flex justify-center mt-4">
        {paginatedProducts.length > 0 ? (
          <Pagination
            total={Math.ceil(sortedProducts.length / ITEMS_PER_PAGE)}
            classNames={{
              cursor: "bg-black text-white",
            }}
            initialPage={1}
            onChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ProductGrid;
