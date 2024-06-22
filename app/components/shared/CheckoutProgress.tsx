import React from "react";
import { FaCheck } from "react-icons/fa";

function CheckoutProgress({
  current,
}: {
  current: "cart" | "checkout" | "complete";
}) {
  return (
    <div className="flex gap-[32px] justify-center mb-[80px]">
      <div
        className={
          "flex gap-[17px] items-center pb-[27px] border-solid w-[256px] border-b-[2px] border-[#141718] " +
          (current === "checkout" || current === 'complete' ? "border-[#38CB89]" : "")
        }
      >
        <div
          className={
            "bg-[#23262F] flex items-center justify-center rounded-[50%] w-[42px] h-[42px] " +
            (current === "checkout" || current === 'complete' ? "bg-[#38CB89]" : "")
          }
        >
          <span
            className={
              "text-[1rem] text-[#FCFCFD] font-semibold leading-[26px] "
              
            }
          >
            {current === 'cart' ? 1 : <FaCheck />}
          </span>
        </div>
        <span className={"font-semibold leading-[26px] text-[1rem] " + (current === "checkout" || current === 'complete' ? "text-[#38CB89]" : "")}>
          Shopping Cart
        </span>
      </div>
      <div
        className={
          `flex gap-[17px] items-center pb-[27px] border-solid w-[256px] border-b-[2px] border-[#141718] ` +
          (current === "cart" ? "opacity-30 " : "") + (current === "complete" ? "border-[#38CB89]" : "") 
        }
      >
        <div className={"bg-[#23262F] flex items-center justify-center rounded-[50%] w-[42px] h-[42px] " + (current === "complete" ? "bg-[#38CB89]" : "")}>
          <span className="text-[1rem] text-[#FCFCFD] font-semibold leading-[26px]">
          {current !== 'complete' ? 2 : <FaCheck />}
          </span>
        </div>
        <span className={"font-semibold leading-[26px] text-[1rem] " + (current === "complete" ? "text-[#38CB89]" : "")}>
          Checkout Details
        </span>
      </div>
      <div
        className={
          `flex gap-[17px] items-center pb-[27px] border-solid w-[256px] border-b-[2px] border-[#141718] ` +
          (current === "cart" || current === 'checkout' ? "opacity-30" : "")
        }
      >
        <div className="bg-[#23262F] flex items-center justify-center rounded-[50%] w-[42px] h-[42px]">
          <span className="text-[1rem] text-[#FCFCFD] font-semibold leading-[26px]">
            3
          </span>
        </div>
        <span className="font-semibold leading-[26px] text-[1rem]">
          Order Complete
        </span>
      </div>
    </div>
  );
}

export default CheckoutProgress;
