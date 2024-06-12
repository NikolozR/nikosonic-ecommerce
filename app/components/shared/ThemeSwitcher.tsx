"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiSun } from "react-icons/ci";
import { AiFillMoon } from "react-icons/ai";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-[40px] h-fit">
        <input
          type="checkbox"
          checked={isDark}
          className="opacity-0 w-0 h-0 peer"
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className={`cursor-pointer h-[20px] absolute z-20 left-0 right-0 bottom-0 duration-300 rounded-full
           ${isDark ? "bg-darkSwitch" : "bg-lightSwitch"} peer-checked:bg-darkSwitch`}>
          {isDark ? (
            <AiFillMoon className="text-lightSwitch duration-300 absolute rotate-[-90deg] top-[50%] right-0 translate-y-[-50%]" size={20} />
          ) : (
            <CiSun className="text-[#ab7303a3] duration-300 absolute top-[50%] translate-y-[-50%]" size={20} />
          )}
        </span>

      </label>
    </div>
  );
}
