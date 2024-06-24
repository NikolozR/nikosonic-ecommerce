"use client";

import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { setTheme } from "../../actions";

export default function ThemeSwitcher({theme}: {theme: string}) {
  const [ current, setCurrent ] = useState(theme);

  useEffect(() => {
    if (!theme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setCurrent(initialTheme);
      setTheme(initialTheme);
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-[50px] h-[25px] cursor-pointer">
        <input
          type="checkbox"
          checked={current === 'dark'}
          className="opacity-0 w-0 h-0 peer"
          onChange={() => {
            setCurrent(current === 'dark'? 'light' : 'dark');
            setTheme(current === 'dark'? 'light' : 'dark')
          }}
        />
        <span className={`absolute inset-0 rounded-full transition-colors duration-300
          ${current === 'dark' ? "bg-black" : "bg-gray-300"} peer-checked:bg-black`}>
          <span className={`absolute top-1/2 transform -translate-y-1/2 transition-[left] duration-300
            ${current === 'dark' ? "left-[calc(100%-20px)] text-white" : "left-[4px] text-black"} peer-checked:left-[calc(100%-24px)]`}>
            {current === 'dark' ? (
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
