"use client";

import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "../providers/ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-[50px] h-[25px] cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          className="opacity-0 w-0 h-0 peer"
          onChange={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        />
        <span className={`absolute inset-0 rounded-full transition-colors duration-300
          ${theme === 'dark' ? "bg-black" : "bg-gray-300"} peer-checked:bg-black`}>
          <span className={`absolute top-1/2 transform -translate-y-1/2 transition-[left] duration-300
            ${theme === 'dark' ? "left-[calc(100%-20px)] text-white" : "left-[4px] text-black"} peer-checked:left-[calc(100%-24px)]`}>
            {theme === 'dark' ? (
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
