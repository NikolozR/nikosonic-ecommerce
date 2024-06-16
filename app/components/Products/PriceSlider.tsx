'use client'
import { Slider, SliderRenderThumbProps } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { debounce } from "lodash";

interface PriceSliderProps {
  handlePriceChange: (minValue: number, maxValue: number, currentParams: { [key: string]: string }[]) => void;
}

function PriceSlider({ handlePriceChange }: PriceSliderProps) {
  const searchParams = useSearchParams();
  const [minValue, setMinValue] = useState(() => {
    const minParam = searchParams.get("min_price");
    return minParam ? parseInt(minParam, 10) : 0;
  });
  const [maxValue, setMaxValue] = useState(() => {
    const maxParam = searchParams.get("max_price");
    return maxParam ? parseInt(maxParam, 10) : 1000;
  });

  const debouncedHandlePriceChange = 
    debounce((minValue: number, maxValue: number, currentParams: { [key: string]: string }[]) => {
      handlePriceChange(minValue, maxValue, currentParams);
    }, 300);

  const handleSliderChange = (values: number[] | number) => {
    if (typeof values !== "number") {
      setMinValue(values[0]);
      setMaxValue(values[1]);
      debouncedHandlePriceChange(values[0], values[1], getCurrentSearchParams());
    }
  }

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMinValue(value);
      debouncedHandlePriceChange(value, maxValue, getCurrentSearchParams());
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMaxValue(value);
      debouncedHandlePriceChange(minValue, value, getCurrentSearchParams());
    }
  };

  const getCurrentSearchParams = () => {
    let currentSearchParams: { [key: string]: string }[] = [];
    for (let key of searchParams.keys()) {
      currentSearchParams.push({ [key]: searchParams.get(key) ?? "" });
    }
    return currentSearchParams;
  };

  return (
    <div>
      <h3 className="text-[#121212] font-bold text-[1rem] leading-[26px] mt-[32px] mb-[12px]">
        PRICE
      </h3>
      <div className="flex w-full max-w-full justify-between gap-4 mb-4">
        <div className="relative flex items-center w-1/2 max-w-[120px]">
          <span className="absolute left-2 text-gray-500">Min:</span>
          <input
            type="number"
            className="border border-secondary-300 p-1 pl-12 w-full"
            value={minValue}
            onChange={handleMinInputChange}
            min={0}
            max={1000}
          />
        </div>
        <div className="relative flex items-center w-1/2 max-w-[120px]">
          <span className="absolute left-2 text-gray-500">Max:</span>
          <input
            type="number"
            className="border border-secondary-300 p-1 pl-12 w-full"
            value={maxValue}
            onChange={handleMaxInputChange}
            min={0}
            max={1000}
          />
        </div>
      </div>
      <Slider
        step={1}
        size="sm"
        aria-labelledby="Price"
        minValue={0}
        maxValue={1000}
        defaultValue={[minValue, maxValue]}
        value={[minValue, maxValue]}
        onChange={handleSliderChange}
        hideValue
        classNames={{
          base: "max-w-md gap-3",
          track: "border-s-secondary-100",
          filler: "bg-gradient-to-r from-secondary-100 to-secondary-500",
        }}
        className="max-w-md"
        renderThumb={(props: SliderRenderThumbProps) => {
          return (
            <div
              {...props}
              className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
            </div>
          );
        }}
      />
    </div>
  );
}

export default PriceSlider;
