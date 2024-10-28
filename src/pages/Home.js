import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        <div className="relative lg:h-screen" id="hero">
          <img
            src="/imgs/Hero image.png"
            alt="AT DIGITAL"
            className="w-full h-auto lg:h-screen object-cover"
          />
          <div className="lg:absolute bottom-0 left-0 bg-gradient-to-l from-rich-blue to-interstellar-blue text-white p-10 lg:bottom-10 lg:left-10 lg:max-w-2xl">
            <p className="mb-10 font-inter text-3xl lg:text-5xl font-bold">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>
            <a
              href="/services"
              className="bg-yuzu-jam text-white font-inter p-4 rounded shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
            >
              GET FREE CONSULTATION
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl">
            <Services
              title="Web & Mobile App Development"
              text="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
              link="/service-two"
              imgUrl="/imgs/image 2.png"
              layout="left"
            />
          </div>
          <div className="w-full max-w-5xl">
            <Services
              title="Digital Strategy Consulting"
              text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
              link="/service-two"
              imgUrl="/imgs/image 1.png"
              layout="right"
            />
          </div>
          <div className="w-full max-w-6xl mb-10 mt-10">
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
