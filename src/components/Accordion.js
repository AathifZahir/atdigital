// Accordion.js
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-light-purple">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-inter font-semibold">{title}</h2>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="text-lg p-4 font-inter">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
