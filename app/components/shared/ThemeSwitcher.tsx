"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-[50px] h-[25px] cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          className="opacity-0 w-0 h-0 peer"
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className={`absolute inset-0 rounded-full transition-colors duration-300
          ${isDark ? "bg-black" : "bg-gray-300"} peer-checked:bg-black`}>
          <span className={`absolute top-1/2 transform -translate-y-1/2 transition-[left] duration-300
            ${isDark ? "left-[calc(100%-20px)] text-white" : "left-[4px] text-black"} peer-checked:left-[calc(100%-24px)]`}>
            {isDark ? (
              <IoMoonSharp size={17} />
            ) : (
              <IoSunnySharp size={17} />
            )}
          </span>
        </span>
      </label>
    </div>
  );
}
