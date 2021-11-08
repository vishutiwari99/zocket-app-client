import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col items-start mb-2 pl-1 bg-myblue-indigoDark rounded-3xl  max-w-5xl mx-auto">
      <div className="p-10 flex flex-col items-end  ml-4 ">
        <h1 className="text-5xl text-white font-semibold z-20">
          3 easy steps to run the ad.
        </h1>
        <div>
          <img src="/images/underline.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center relative">
        <div className="ml-16">
          <div class="flex relative pb-12">
            <div class="h-full w-10 ml-1 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 opacity-50 border-r-2 border-dashed pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-12 h-12 p-3  rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <h1 className="text-3xl font-semibold">1.</h1>
            </div>
            <div class="flex-grow pl-4">
              <h2 class="font-semibold  text-xl text-white mb-1 tracking-wider">
                Link your FB page
              </h2>
              <p class="leading-relaxed text-white text-sm opacity-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div class="h-full w-10 ml-1 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 opacity-50  border-r-2 border-dashed   pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-12 h-12  p-3 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <h1 className="text-3xl font-semibold">2.</h1>
            </div>
            <div class="flex-grow pl-4">
              <h2 class="font-semibold  text-xl text-white mb-1 tracking-wider">
                Choose your Contents
              </h2>
              <p class="leading-relaxed text-white text-sm opacity-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div class="flex-shrink-0 w-12 h-12 p-3 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <h1 className="text-3xl font-semibold">3.</h1>
            </div>
            <div class="flex-grow pl-4">
              <h2 class="font-semibold  text-xl text-white mb-1 tracking-wider">
                Run your Ad
              </h2>
              <p class="leading-relaxed text-white text-sm opacity-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
            </div>
          </div>
        </div>
        <div className=" absolute right-0 bg-myblue-indigoDark  bottom-0 rounded-br-3xl">
          <img
            className="rounded-br-3xl "
            src="/images/cellphone2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
