import React from "react";

const Footer = () => {
  return (
    <div className="bg-bluish-purple text-white p-12 px-24">
      {" "}
      {/* Increase padding here */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/imgs/Logo.png"
              alt="AT DIGITAL"
              className="w-56 h-auto mr-2"
            />
          </div>
          <p className="max-w-md font-lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        <div className="flex space-x-16">
          <div>
            <h2 className="text-xl font-bold mb-2 font-inter mr-14">
              Our Technologies
            </h2>
            <ul>
              <li className="font-inter">ReactJS</li>
              <li className="font-inter">Gatsby</li>
              <li className="font-inter">NextJS</li>
              <li className="font-inter">NodeJS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 font-inter">Our Services</h2>
            <ul>
              <li className="font-inter">Social Media Marketing</li>
              <li className="font-inter">Web & Mobile App Development</li>
              <li className="font-inter">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-8 w-[630px] flex mx-auto" />
      <div className="pt-4 flex justify-center space-x-8">
        <a href="/" className="hover:underline font-inter">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="/" className="hover:underline font-inter">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
