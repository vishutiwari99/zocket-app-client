import React from "react";
import Card from "../shared/card/Card";
import call from "../../assests/services/calls.png";
import enquiries from "../../assests/services/enquiries.png";
import followers from "../../assests/services/followers.png";
import result from "../../assests/services/result.png";
import reward from "../../assests/services/reward.png";

const data = [
  {
    id: 1,
    image: call,
    title: "Get more customer calls",
    message: "Drive more phone calls to your business with the calls campaign.",
  },
  {
    id: 2,
    image: enquiries,
    title: "Receive more enquiries",
    message: "Instantly respond to customer enquiries and keep track of them.",
  },
  {
    id: 3,
    image: followers,
    title: "Gain more followers",
    message: "Increase your business’ reach and gain more followers.",
  },
  {
    id: 4,
    image: result,
    title: "Track your Ad results",
    message: "Track and compare how well your ads are performing over time.",
  },
  {
    id: 5,
    image: reward,
    title: "Earn rewards",
    message: "Earn scratch cards every time you run ads.",
  },
];
const Services = () => {
  return (
    <div className="flex flex-col items-center mt-16 ">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-4xl font-semibold mb-1">Why choose Zocket?</h2>
        <small className="text-sm  opacity-50">
          Choose and build your business in few seconds
        </small>
      </div>
      <div class="text-gray-600 body-font ">
        <div class="container px-2 py-5 mx-auto">
          <div class="flex flex-wrap -m-4  max-w-5xl">
            {data.map((item) => (
              <Card
                id={item.id}
                image={item.image}
                title={item.title}
                message={item.message}
              />
            ))}
            <div className="p-4 md:w-1/3 ">
              <div className="flex rounded-3xl h-full  bg-white  p-8 flex-col">
                <div className="flex flex-col mb-3 ">
                  <h2 className="text-gray-900 text-2xl font-semibold  ">
                    Take a step forward to make your business grow.
                  </h2>
                </div>

                <button className="bg-blue-600 font-medium text-white p-2 w-30 mx-2 text-sm rounded-lg hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 ">
                  <h5 className="text-sm">Check the app</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
