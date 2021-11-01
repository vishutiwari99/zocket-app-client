import React from "react";

const HeroSection = () => {
  return (
    <div className="relative md:flex items-center">
      <div className="flex-1">
        <div className="absolute flex bg-myorange-light  items-center opacity-2 space-x-2 rounded-lg justify-center ">
          <h1 className="ml-2">
            <img src="/images/discount.svg" alt="discount" />
          </h1>
          <h3 className="text-xs p-1 text-myorange-dark">
            Early bird catches the worm first, Don’t miss out!!
          </h3>
        </div>
        <div>
          <h3 className="text-6xl font-bold mt-6">
            Facebook Ads In 30 Seconds
          </h3>
          <div>
            <img src="/images/yellowpic.svg" alt="" />
          </div>
        </div>
        <p className="text-sm leading-7 opacity-50">
          Grow your business by setting up ads instantly.
          <br /> No expertise needed.
        </p>
        <form className="flex  items-center mt-2">
          <input
            className="shadow appearance-none border rounded-md  p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email ID"
          />
          <button className="bg-blue-600 font-medium text-white p-4 w-30 mx-2 text-sm rounded-lg hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 ">
            Get early access
          </button>
        </form>
      </div>
      <div>
        <img src="/images/fi.png" alt="1" />
      </div>
    </div>
  );
};

export default HeroSection;
