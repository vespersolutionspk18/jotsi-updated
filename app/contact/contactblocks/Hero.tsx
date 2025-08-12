import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[60vh] w-full flex flex-col justify-between p-4 md:p-7 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900 to-black opacity-90"></div>
      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8 pb-16">
        <div className="w-full md:w-[65%]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter">
            Let's build something <span className="text-yellow-400">extraordinary</span> together
          </h1>
          <p className="text-white/75 text-lg mt-6 max-w-3xl">
            Whether you need to scale your team, optimize operations, or transform your business processes, 
            we're here to help. Reach out today for a free consultation.
          </p>
        </div>
        <div className="bg-white/7 border-[1px] border-white/12 backdrop-blur-md rounded-md shadow-lg text-white p-6 flex flex-col gap-4 w-full md:w-[300px]">
          <h5 className="text-lg">
            Response time: <span className="text-yellow-400">Within 24 hours</span>
          </h5>
          <p className="text-white/70 text-sm">
            Our team is available Monday through Friday, 9 AM - 6 PM EST
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;