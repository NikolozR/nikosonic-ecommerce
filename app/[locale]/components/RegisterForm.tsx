"use client";
import { useState } from "react";
import Link from "next/link";

function RegisterForm({
  handleRegister,
}: registerFormProps) {
  const [{ name, email, password, age }, setLoginInput] =
    useState<RegisterUser>({ name: "", email: "", password: "", age: 0 });
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full px-4 sm:px-0 sm:w-1/2 flex-col justify-center">
        <h1 className="text-[40px] leading-[44px] font-medium text-black mb-[24px] dark:text-white">
          Register
        </h1>
        <p className="text-[16px] leading-[26px] text-neutral-4 mb-4 dark:text-gray-200">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-[#38CB89] font-bold cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
        <form
          className="flex flex-col w-full gap-[32px] justify-center items-center mb-[34px]"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister(name, email, password, age);
          }}
        >
          <input
            type="text"
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            placeholder="Your Name"
            onChange={(e) =>
              setLoginInput((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <input
            type="email"
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            placeholder="Your Email"
            onChange={(e) =>
              setLoginInput((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <input
            type="number"
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            placeholder="Your Age"
            onChange={(e) =>
              setLoginInput((prev) => ({
                ...prev,
                age: Number(e.target.value),
              }))
            }
          />
          <input
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            type={"password"}
            placeholder="Password"
            onChange={(e) =>
              setLoginInput((prev) => ({
                ...prev,
                passowrd: e.target.value,
              }))
            }
          />
          <button
            className="bg-[#141718] dark:bg-[#F3F5F7] py-[10px] px-0 block text-center w-full text-[16px] leading-[28px] text-white dark:text-black rounded-md"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}

export default RegisterForm;
