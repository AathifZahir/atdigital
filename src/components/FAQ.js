// FAQ.js
import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      title: "Lorem Ipsum Dolor Sit Amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, orci nec malesuada ultricies, urna libero vulputate eros, sed accumsan justo sapien sed purus.",
    },
    {
      title: "Consectetur Adipiscing Elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, orci nec malesuada ultricies, urna libero vulputate eros, sed accumsan justo sapien sed purus.",
    },
    {
      title: "Quisque Scelerisque Orci Nec Malesuada?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, orci nec malesuada ultricies, urna libero vulputate eros, sed accumsan justo sapien sed purus.",
    },
    {
      title: "Vestibulum Ante Ipsum Primis In Faucibus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, orci nec malesuada ultricies, urna libero vulputate eros, sed accumsan justo sapien sed purus.",
    },
  ];

  return (
    <div className="w-4/5 mx-auto p-4">
      <h1 className="text-2xl text-bluish-purple text-center font-poppins font-semibold mb-6">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div className="mb-4 w-full" key={index}>
          {" "}
          {/* Move key here */}
          <Accordion title={faq.title} answer={faq.answer} />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
