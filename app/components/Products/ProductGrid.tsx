"use client";
import ProductItem from "../shared/ProductItem";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoGrid } from "react-icons/io5";
import { Key, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

function getDropdownBtnContent(val: string): string {
  if (val === "price_asc") return "Price: Ascending";
  else if (val === "price_desc") return "Price: Descending";
  else if (val === "name_asc") return "Product Name: A-Z";
  else if (val === "name_desc") return "Product Name: Z-A";
  else return "Sort By";
}

function ProductGrid({ products, user }: { products: Product[]; user: User }) {
  const [grid, setGrid] = useState(3);
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products)
  const [selectedSortBy, setSelectedSortBy] = useState<string>('')
  const handleGridChange = (layout: number) => {
    setGrid(layout);
  };

  const handleSortChange = (sortCriteria: Key) => {
    setSelectedSortBy(sortCriteria.toString());
    const key = sortCriteria.toString();
    const sorted = [...products].sort((a, b) => {
      if (key === 'price_asc') return a.price - b.price;
      else if (key === 'price_desc') return b.price - a.price;
      else if (key === 'name_asc') return (a.brand + " " + a.name).localeCompare(b.brand + " " + b.name);
      else if (key === 'name_desc') return (b.brand + " " + b.name).localeCompare(a.brand + " " + a.name);
      else return 0;
    });
    setSortedProducts(sorted);
  };

  return (
    <div className="pb-[100px]">
      <div className="flex justify-between mb-[32px] items-center">
        <h2 className="font-bold text-[1.25rem]">All Products</h2>
        <div className="flex items-center gap-[32px]">
          <Dropdown>
            <DropdownTrigger>
              <div className="cursor-pointer flex items-center gap-[5px] font-semibold">
                {getDropdownBtnContent(selectedSortBy)} <RiArrowDownSLine size={20} />
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
