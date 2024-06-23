"use client";
import ProductItem from "../shared/ProductItem";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoGrid } from "react-icons/io5";
import { Key, useEffect, useState, useMemo } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import Fuse from "fuse.js"; 

function getDropdownBtnContent(val: string): string {
  if (val === "price_asc") return "Price: Ascending";
  else if (val === "price_desc") return "Price: Descending";
  else if (val === "name_asc") return "Product Name: A-Z";
  else if (val === "name_desc") return "Product Name: Z-A";
  else return "Sort By";
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

function filterProducts(products: Product[], query: string, fuse: Fuse<Product>): Product[] {
  if (!query) return products;
  return fuse.search(query).map(result => result.item);
}

function ProductGrid({ products, user }: { products: Product[]; user: User }) {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");
  const [grid, setGrid] = useState(3);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fuse = useMemo(() => new Fuse(products, {
    keys: ['name', 'brand'],
    threshold: 0.4,
  }), [products]);

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

  return (
    <div className="pb-[100px]">
      <div className="flex justify-between mb-[32px] items-center">
        <h2 className="font-bold text-[1.25rem]">All Products</h2>
        <Input
          type="search"
          aria-label="Search Products"
          placeholder="Search Products..."
          className="w-[300px]"
          endContent={<CiSearch />}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex items-center gap-[32px]">
          <Dropdown>
            <DropdownTrigger>
              <div className="cursor-pointer flex items-center gap-[5px] font-semibold">
                {getDropdownBtnContent(selectedSortBy)}{" "}
                <RiArrowDownSLine size={20} />
              </div>
            </DropdownTrigger>
            <DropdownMenu className="" onAction={handleSortChange}>
              <DropdownItem key="price_asc">Price: Ascending</DropdownItem>
              <DropdownItem key="price_desc">Price: Descending</DropdownItem>
              <DropdownItem key="name_asc">Product Name: A-Z</DropdownItem>
              <DropdownItem key="name_desc">Product Name: Z-A</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="flex gap-0">
            <div
              className={`cursor-pointer w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] border-r-0 ${
                grid === 3 ? "bg-[#F3F5F7]" : ""
              }`}
              onClick={() => handleGridChange(3)}
            >
              <TfiLayoutGrid3Alt />
            </div>
            <div
              className={`cursor-pointer w-fit h-fit p-[9px] border-solid border-1 border-[#E8ECEF] ${
                grid === 2 ? "bg-[#F3F5F7]" : ""
              }`}
              onClick={() => handleGridChange(2)}
            >
              <IoGrid />
            </div>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-${grid} gap-[24px]`}>
        {sortedProducts.map((product) => {
          return (
            <ProductItem
              key={product.product_id}
              product={product}
              user={user}
              grid={grid}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
