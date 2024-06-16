import { setSearchParams } from "../../actions";
import Button from "../shared/Button";
import FilterCheckbox from "../shared/FilterCheckbox";
import { redirect } from "next/navigation";
import { IoFilterSharp } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import PriceSlider from "./PriceSlider";

const handleCheckboxChange = async (
  filterKey: string,
  filterValue: string,
  checked: boolean,
  currentSearchParams: { [key: string]: string }[]
) => {
  const params = await setSearchParams(
    filterKey,
    filterValue,
    currentSearchParams,
    true,
    checked
  );
  redirect(`/products?${params}`);
};
const handlePriceChange = async (
  minValue: number,
  maxValue: number,
  currentSearchParams: { [key: string]: string }[]
) => {
  'use server'
  const updatedMinParams = await setSearchParams(
    "min_price",
    minValue.toString(),
    currentSearchParams,
    false
  );
  const updatedMaxParams = await setSearchParams(
    "max_price",
    maxValue.toString(),
    Array.from(updatedMinParams.entries()).map(([key, value]) => ({ [key]: value })),
    false
  );
  redirect(`/products?${updatedMaxParams}`);
};

const handleReset = async () => {
  "use server";
  const params = new URLSearchParams();
  redirect(`/products?${params.toString()}`);
};

function FilterSidebar({ brands }: { brands: string[] }) {
  return (
    <div className="w-[20%] mb-[100px]">
      <div className="mb-[32px] w-full flex justify-between items-center">
        <h2 className="text-[#121212] font-bold flex items-center gap-[8px] leading-[32px] text-[1.25rem]">
          <IoFilterSharp /> Filter
        </h2>
        <Button
          handleClick={handleReset}
          type="button"
          fontSize="0.8rem"
          padding="px-2 py-2"
          className="flex items-center gap-[4px] !text-[#003285] justify-between bg-[#FFAB00A3]"
        >
          <FaRegTrashAlt />
          Clear
        </Button>
      </div>
      <div>
        <div>
          <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px] mb-[12px]">
            CATEGORIES
          </h3>
          <div className="flex flex-col gap-[8px]">
            <FilterCheckbox
              filterKey="categories"
              filterValue="headband"
              handleChange={async (checked, currentParams) => {
                "use server";
                await handleCheckboxChange(
                  "categories",
                  "headband",
                  checked,
                  currentParams
                );
              }}
            />
            <FilterCheckbox
              filterKey="categories"
              filterValue="earbud"
              handleChange={async (checked, currentParams) => {
                "use server";
                await handleCheckboxChange(
                  "categories",
                  "earbud",
                  checked,
                  currentParams
                );
              }}
            />
            <FilterCheckbox
              filterKey="categories"
              filterValue="earphone"
              handleChange={async (checked, currentParams) => {
                "use server";
                await handleCheckboxChange(
                  "categories",
                  "earphone",
                  checked,
                  currentParams
                );
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px] mt-[32px] mb-[12px]">
            BRANDS
          </h3>
          <div className="flex flex-col gap-[8px]">
            {brands.map((brand, i) => {
              return (
                <FilterCheckbox
                  key={i}
                  filterKey="brands"
                  filterValue={brand}
                  handleChange={async (checked, currentParams) => {
                    "use server";
                    await handleCheckboxChange(
                      "brands",
                      brand,
                      checked,
                      currentParams
                    );
                  }}
                />
              );
            })}
          </div>
        </div>
        {/* <PriceSlider handlePriceChange={handlePriceChange}></PriceSlider> */}
      </div>
    </div>
  );
}

export default FilterSidebar;
