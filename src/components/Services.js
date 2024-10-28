import React from "react";

const Services = ({ title, text, link, imgUrl, layout = "left" }) => {
  const isRightLayout = layout === "right";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isRightLayout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center mb-10 space-y-6 md:space-y-0 md:space-x-10`}
    >
      <div className="w-full md:w-1/2">
        <img src={imgUrl} alt={title} className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-2xl font-semibold font-poppins mb-2 text-bluish-purple">
          {title}
        </h2>
        <p className="mb-6 text-base font-inter">{text}</p>
        <a
          href={link}
          className="bg-yuzu-jam text-white font-inter py-2 px-4 rounded hover:bg-bluish-purple transition duration-300 inline-block"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Services;
