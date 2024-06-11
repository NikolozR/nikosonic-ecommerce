"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

function FilterCheckbox({
  filterKey,
  filterValue,
  handleChange,
}: {
  filterKey: string;
  filterValue: string;
  handleChange: (
    checked: boolean,
    currentSearchParams: { [key: string]: string }[]
  ) => void;
}) {
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const currentParams = searchParams.get(filterKey);
    if (currentParams) {
      const values = currentParams.split(",");
      if (values.includes(filterValue)) {
        setIsChecked(true);
      }
    } else {
      setIsChecked(false);
    }
  }, [filterKey, filterValue, searchParams]);

  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = e.target;
    setIsChecked(checked);

    let currentSearchParams = [];
    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }
    handleChange(checked, currentSearchParams);
  };

  return (
    <div className="flex items-center w-full">
      <label
        htmlFor={`${filterKey}-${filterValue}`}
        className="text-[#6C7275] cursor-pointer justify-between w-full relative font-medium text-[0.875rem] flex items-center"
      >
        {filterValue !== 'JBL' ? filterValue?.charAt(0).toUpperCase() +
          filterValue?.slice(1).toLowerCase() :  "JBL"}
        <input
          type="checkbox"
          id={`${filterKey}-${filterValue}`}
          name={filterKey}
          value={filterValue}
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="appearance-none w-[24px] cursor-pointer h-[24px] rounded-[4px] border border-[#6C7275] checked:bg-[#141718] checked:border-transparent focus:outline-none"
        />
        {isChecked && (
          <FaCheck className="absolute right-[4px]" color="white" />
        )}
      </label>
    </div>
  );
}

export default FilterCheckbox;
