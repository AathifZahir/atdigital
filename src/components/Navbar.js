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
            className="h-auto w-56 lg:ml-12 md:ml-6 sm:ml-0"
          />
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <div className="flex flex-col justify-between h-6">
              <div className="w-8 h-1 bg-white rounded"></div>
              <div className="w-8 h-1 bg-white rounded my-1"></div>
              <div className="w-8 h-1 bg-white rounded"></div>
            </div>
          )}
        </button>
      </div>
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
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-4">
          <div className="absolute font-inter top-4 left-4 text-black ">
            <a href="/">HOME</a>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black self-end mb-4"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-start">
            <a href="/" className="hover:underline font-inter py-4 text-black">
              SERVICES
            </a>
            <a href="/" className="hover:underline font-inter py-4 text-black">
              ABOUT US
            </a>
            <a href="/" className="hover:underline font-inter py-4 text-black">
              CONTACT US
            </a>
            <a href="/" className="hover:underline font-inter py-4 text-black">
              CAREERS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
