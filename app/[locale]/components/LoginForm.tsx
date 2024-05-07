"use client";
import { useState } from "react";
import Link from "next/link";

function LoginForm({ handleLogin }: loginFormProps) {
  const [{email, password}, setLoginInput] = useState<LogInUser>({ email: "", password: "" });
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="w-fit flex flex-col justify-center">
        <h1 className="text-[40px] leading-[44px] font-medium text-black mb-[24px]">
          Sign In
        </h1>
        <p className="text-[16px] leading-[26px] text-labelGray mb-4">
          Don’t have an accout yet?{" "}
          <Link href="/register">
            <span className="text-[#38CB89] cursor-pointer">Sign Up</span>
          </Link>
        </p>
        <form
          className="flex flex-col gap-[32px] justify-center items-center w-full mb-[34px]"
          action=""
          onSubmit={(e) => {
            e.preventDefault()
            handleLogin(email, password)
          }}
        >
          <input
            type="email"
            className="w-[456px] focus-visible:outline-none focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-labelGray placeholder:text-[16px] placeholder:leading-[26px]"
            placeholder="Your email"
            onChange={(e) =>
              setLoginInput((prev) => {
                return { email: e.target.value, password: prev.password };
              })
            }
          />
          <input
            className="w-[456px] focus-visible:outline-none focus:caret-slate-400 max-w-full border-b-[1px] border-solid border-[#E8ECEF] text-[24px] pb-[12px] placeholder:text-labelGray placeholder:text-[16px] placeholder:leading-[26px]"
            type={"password"}
            placeholder="Password"
            onChange={(e) =>
              setLoginInput((prev) => {
                return { email: prev.email, password: e.target.value };
              })
            }
          />
          <button
            className="bg-[#141718] py-[10px] px-0 block text-center w-full text-[16px] leading-[28px] text-white rounded-md"
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
