import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bluish-purple text-white flex items-center justify-between p-6">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/imgs/Logo.png"
            alt="AT Digital Logo"
            className="h-auto w-56 ml-12"
          />
        </a>
      </div>
      {/* Hamburger Menu Icon for md and below */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Menu Links for larger screens */}
      <div className="hidden md:flex space-x-8 text-sm">
        <a href="/" className="hover:underline font-inter">
          SERVICES
        </a>
        <a href="/" className="hover:underline font-inter">
          ABOUT US
        </a>
        <a href="/" className="hover:underline font-inter">
          CONTACT US
        </a>
        <a href="/" className="hover:underline font-inter">
          CAREERS
        </a>
      </div>
      {/* Dropdown Menu for md and below */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black self-end mb-4"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-start">
            <a href="/" className="hover:underline font-inter py-2 text-black">
              SERVICES
            </a>
            <a href="/" className="hover:underline font-inter py-2 text-black">
              ABOUT US
            </a>
            <a href="/" className="hover:underline font-inter py-2 text-black">
              CONTACT US
            </a>
            <a href="/" className="hover:underline font-inter py-2 text-black">
              CAREERS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
