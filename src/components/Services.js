// Services.js
import React from "react";

const Services = ({ title, text, link, imgUrl, layout = "left" }) => {
  const isRightLayout = layout === "right";

  return (
    <div
      className={`flex items-center ${
        isRightLayout ? "flex-row-reverse" : "flex-row"
      } mb-10 space-x-10`}
    >
      <div className="flex-1">
        <img src={imgUrl} alt={title} className="w-full h-auto" />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-semibold font-poppins mb-2 text-bluish-purple">
          {title}
        </h2>
        <p className="mb-10 text-base font-inter">{text}</p>
        <a
          href={link}
          className="bg-yuzu-jam text-white font-inter py-2 px-4 rounded hover:bg-bluish-purple transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Services;
