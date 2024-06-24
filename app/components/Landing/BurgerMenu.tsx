'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerT = useTranslations("Header");
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to handle outside click/touch to close menu
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  // Effect to add/remove event listeners based on menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Dark overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="flex items-center md:hidden">
        <button
          className="text-black dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[50%] sm:w-[40%] h-full bg-white dark:bg-[#241b33] z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        {/* Close button */}
        <div className="flex absolute right-0 p-4">
          <button
            className="text-black dark:text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col gap-4 p-6 justify-center h-full">
          <li>
            <Link
              href="/"
              className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {headerT('home')}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {headerT('products')}
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {headerT('blogs')}
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {headerT('contacts')}
            </Link>
          </li>
          {"Admin" === "Admin" && (
            <li>
              <Link
                href="/admin/products"
                className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {headerT('addProducts')}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
