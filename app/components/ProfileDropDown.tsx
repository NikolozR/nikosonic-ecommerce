'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ProfileIcon from '../../public/profile.svg';

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <Image 
        src={ProfileIcon} 
        className="cursor-pointer" 
        width={20} 
        height={20} 
        alt="Profile Icon" 
        onClick={toggleDropDown}
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <a 
              href="/profile" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View Profile
            </a>
            <a 
              href='/api/auth/logout' 
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log Out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
