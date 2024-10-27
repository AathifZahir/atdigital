// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/assets/Logo.png"
            alt="AT Digital Logo"
            className="h-auto w-40 mr-2"
          />
        </a>
      </div>
      <div className="flex space-x-8 text-sm">
        <a href="/" className="hover:underline">
          SERVICES
        </a>
        <a href="/" className="hover:underline">
          ABOUT US
        </a>
        <a href="/" className="hover:underline">
          CONTACT US
        </a>
        <a href="/" className="hover:underline">
          CAREERS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
