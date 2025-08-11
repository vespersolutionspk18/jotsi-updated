import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white px-6 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div className="text-center lg:text-left w-full lg:w-[60%]">
          <p className="text-orange-600 font-medium">We are Investare</p>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tighter leading-tight mt-2">
            We set out to build <br />
            <span className="text-gray-600 font-semibold">
              a better way to invest
            </span>
          </h1>
        </div>

        <p className="text-gray-500 w-full lg:w-[40%] mt-6 lg:mt-0">
          Together—the investors and partners <br /> of Investare—we are
          reinventing real <br />
          estate investing end-to-end.
        </p>
      </div>

      <div className="flex flex-row mt-12 gap-4">
        <div
          className="h-74 w-[60%] bg-blend-multiply bg-center bg-cover rounded-lg"
          style={{ backgroundImage: "url('/assets/group.jpg')" }}
        ></div>
        <div
          className="h-74 w-[40%] bg-blend-multiply bg-center bg-cover rounded-lg"
          style={{ backgroundImage: "url('/assets/group2.jpg')" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
