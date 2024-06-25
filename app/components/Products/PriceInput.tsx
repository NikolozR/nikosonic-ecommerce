"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function PriceInput({
  filterKey,
  handleChange,
}: {
  filterKey: "min_price" | "max_price";
  handleChange: (
    val: number,
    currentSearchParams: { [key: string]: string }[]
  ) => void;
}) {
  const searchParams = useSearchParams();
  const [val, setVal] = useState(0);

  useEffect(() => {
    const currentParams = searchParams.get(filterKey);
    if (currentParams) {
      setVal(Number(currentParams));
    }
  }, [filterKey, searchParams]);

  const handleInputPricechange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setVal(Number(value));
    let currentSearchParams = [];
    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }
    handleChange(Number(value), currentSearchParams);
  };

  return (
    <div className="flex items-center w-full">
      <label
        htmlFor={`${filterKey}`}
        className="text-[#6C7275] cursor-pointer justify-between w-full relative font-medium text-[0.875rem] flex items-center"
      >
        <Input
          value={val + ""}
          label={filterKey === 'max_price' ? "Max Price" : "Min Price"}
          type="number"
          onChange={handleInputPricechange}
        ></Input>
      </label>
    </div>
  );
}

export default PriceInput;
