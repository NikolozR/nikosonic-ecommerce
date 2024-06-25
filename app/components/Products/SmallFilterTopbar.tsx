"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import React from "react";
import { handleSelectChange } from "../../actions";

function getUniqueValues(stringArray: string[]): string[] {
  let counts: { [key: string]: number } = {};
  stringArray.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  const uniqueItems = stringArray.filter((item) => counts[item] === 1);
  return uniqueItems;
}

function SmallFilterTopbar({ categories, brands }: { categories: string[], brands: string[] }) {
  const t = useTranslations("Products");
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    const currentCategories = searchParams.get("categories");
    const currentBrands = searchParams.get("brands");

    setSelectedCategories(currentCategories ? currentCategories.split(",") : []);
    setSelectedBrands(currentBrands ? currentBrands.split(",") : []);
  }, [searchParams]);

  const handleCategoryChange = (v: any) => {
    const selectedIndexes = v.target.value.split(",");
    const unique = getUniqueValues(selectedIndexes);
    let currentSearchParams: { [key: string]: string }[] = [];

    setSelectedCategories(unique);

    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }

    handleSelectChange(unique, currentSearchParams, 'categories');
  };

  const handleBrandChange = (v: any) => {
    const selectedIndexes = v.target.value.split(",");
    const unique = getUniqueValues(selectedIndexes);
    let currentSearchParams: { [key: string]: string }[] = [];

    setSelectedBrands(unique);

    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }

    handleSelectChange(unique, currentSearchParams, 'brands');
  };

  return (
    <div className="md:hidden">
      <Select
        label={t("categories")}
        placeholder="Select a Category"
        selectionMode="multiple"
        selectedKeys={selectedCategories}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <Select
        label={t("brands")}
        placeholder="Select a Brand"
        selectionMode="multiple"
        className="mt-[30px]"
        selectedKeys={selectedBrands}
        onChange={handleBrandChange}
      >
        {brands.map((brand) => (
          <SelectItem key={brand} value={brand}>
            {brand}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default SmallFilterTopbar;
