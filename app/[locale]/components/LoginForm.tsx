"use client";
import { useState } from "react";
import Link from "next/link";

function LoginForm({ handleLogin }: loginFormProps) {
  const [{email, password}, setLoginInput] = useState<LogInUser>({ email: "", password: "" });
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full px-4 sm:px-0 sm:w-1/2 flex-col justify-center">
        <h1 className="text-[40px] leading-[44px] font-medium text-black mb-[24px] dark:text-white">
          Sign In
        </h1>
        <p className="text-[16px] leading-[26px] text-neutral-4 mb-4 dark:text-gray-200">
          Don’t have an accout yet?{" "}
          <Link href="/register">
            <span className="text-[#38CB89] font-bold cursor-pointer">Sign Up</span>
          </Link>
        </p>
        <form
          className="flex flex-col w-full gap-[32px] justify-center items-center mb-[34px]"
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(email, password)
          }}
        >
          <input
            type="email"
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            placeholder="Your email"
            onChange={(e) =>
              setLoginInput((prev) => {
                return { email: e.target.value, password: prev.password };
              })
            }
          />
          <input
            className="w-[100%] focus-visible:outline-none bg-transparent focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-neutral-4 placeholder:text-[16px] placeholder:leading-[26px]"
            type={"password"}
            placeholder="Password"
            onChange={(e) =>
              setLoginInput((prev) => {
                return { email: prev.email, password: e.target.value };
              })
            }
          />
          <button
            className="bg-[#141718] dark:bg-[#F3F5F7] py-[10px] px-0 block text-center w-full text-[16px] leading-[28px] text-white dark:text-black rounded-md"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;
