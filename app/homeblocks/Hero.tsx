import React from "react";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-between p-4 md:p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-66"></div>
      <div className="relative z-10">
        <Header />
        <p className="w-full md:w-1/2 lg:w-[40%] text-white/75 text-lg leading-snug mt-7">
          Jotsi is your comprehensive, one-stop solution for all human resources and business support needs. We specialize in providing top-tier talent and outsourced services across key sectors, including accounting, construction estimating, and technology. Our strength lies in understanding the unique demands of each industry and connecting businesses with skilled professionals who drive real results.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between z-10 gap-8 mt-8 md:mt-0">
        <h1 className="w-full md:w-[60%] text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter">
           <span className="text-yellow-400">Jotsi</span>: Your All-in-One Partner for Business Growth.
        </h1>
        <div className="bg-white/7 border-[1px] h-fit border-white/12 backdrop-blur-md rounded-md shadow-lg text-white p-4 flex flex-col gap-10 w-full md:w-[300px]">
          <h5 className="text-lg leading-snug">
           Top-tier talent and outsourced solutions, tailored for your industry.
          </h5>
          <Button className="text-md" variant="yellow">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;