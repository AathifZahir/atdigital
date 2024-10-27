import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/Hero Image.png')` }}
      >
        <div className="absolute bottom-10 left-10 bg-gradient-to-l from-[#1CBDDD] to-[#4DCA79] text-white p-6 rounded-lg max-w-xs">
          <h2 className="text-2xl font-semibold mb-4">Welcome to AT Digital</h2>
          <p className="mb-4">
            Discover our services and how we can help your business grow!
          </p>
          <a
            href="/services"
            className="bg-white text-purple-600 font-bold py-2 px-4 rounded shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
