import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-light-purple rounded">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2
          className={`text-xl font-inter font-semibold transition-colors duration-300 ${
            isOpen ? "text-bluish-purple" : "text-black"
          }`}
        >
          {title}
        </h2>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <img
            src={isOpen ? "/imgs/minus.svg" : "/imgs/plus.svg"}
            alt={isOpen ? "Minus icon" : "Plus icon"}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <p className="text-lg font-inter p-4">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
