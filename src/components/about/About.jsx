import React from "react";

const About = () => {
  return (
    <div className="bg-myblue-light rounded-3xl   flex flex-col justify-center mb-4">
      <div className="flex flex-col justify-center items-center mt-6">
        <h2 className="text-4xl font-semibold">What we do for you</h2>
        <small className="text-base opacity-50 ">Our services for you</small>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-1 justify-center h-42">
          <img src="/images/mobile1.png" alt="" />
        </div>
        <div className="flex-1 mr-4">
          <div className="flex items-center h-24 border-l-4 border-yellow-500 my-4 bg-white rounded-r-2xl">
            <div className="mx-2">
              <img src="/images/progress.png" alt="" />
            </div>
            <div className="mx-2 ">
              <h2 className="text-lg font-semibold">Campaign Optimization </h2>
              <p className="text-xs opacity-50">
                Automated campaign optimization helps you get the best return on
                investment for your business.
              </p>
            </div>
          </div>

          <div className="flex items-center  h-24 my-4 rounded-r-2xl ">
            <div className="mx-2">
              <img src="/images/thumb.png" alt="" />
            </div>
            <div className="mx-2 ">
              <h2 className="text-lg font-semibold">
                Create Thumb-stopping Ads
              </h2>
              <p className="text-xs opacity-50">
                Automated campaign optimization helps you get the best return on
                investment for your business.
              </p>
            </div>
          </div>
          <div className="flex items-center  h-24 my-4 rounded-r-2xl ">
            <div className="mx-2">
              <img src="/images/multiplatform.png" alt="" />
            </div>
            <div className="mx-2 ">
              <h2 className="text-lg font-semibold">Multi-platform Ads</h2>
              <p className="text-xs opacity-50">
                Automated campaign optimization helps you get the best return on
                investment for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
