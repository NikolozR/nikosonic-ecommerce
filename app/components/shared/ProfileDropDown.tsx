"use client";
import { useState, useEffect, useRef, MouseEventHandler } from "react";
import { CgProfile } from "react-icons/cg";
import ThemeSwitcher from "./ThemeSwitcher";

function ProfileDropDown({ isAuthorized, theme }: { isAuthorized: boolean, theme: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <CgProfile className="cursor-pointer dark:hidden hidden lg:block" color="black" onClick={toggleDropDown} size={24}  />
      <CgProfile className="cursor-pointer dark:hidden lg:hidden" color="black" onClick={toggleDropDown} size={16}  />
      <CgProfile className="cursor-pointer hidden dark:lg:block" color="white" onClick={toggleDropDown} size={24}  />
      <CgProfile className="cursor-pointer hidden dark:block dark:lg:hidden" color="white" onClick={toggleDropDown} size={20}  />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 z-50 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
              <span className="text-sm text-gray-700">Theme</span>
              <ThemeSwitcher theme={theme}></ThemeSwitcher>
            </div>
            {isAuthorized ? (
              <>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View Profile
                </a>
                <a
                  href="/api/auth/logout"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log Out
                </a>
              </>
            ) : (
              <>
                <a
                  href="/api/auth/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log In
                </a>
                <a
                  href="/api/auth/signup"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
