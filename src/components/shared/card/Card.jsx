import React from "react";

const Card = ({ title, message, image }) => {
  return (
    <div className="p-4 md:w-1/3 ">
      <div className="flex rounded-3xl h-full  bg-white border-2 p-8 flex-col">
        <div className="flex flex-col mb-3 ">
          <div className="mb-2">
            <img src={image} alt="call" />
          </div>
          <h2 className="text-gray-900 text-2xl font-semibold  ">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
