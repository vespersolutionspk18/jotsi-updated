import React from "react";
import Header from "@/components/Header";

const Hero = () => {
  return (
    <div
      className="relative min-h-[80vh] w-full flex flex-col justify-between p-4 md:p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/group.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative z-10 flex flex-col gap-8 pb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter max-w-5xl">
          Building the <span className="text-yellow-400">future of work</span>, 
          one partnership at a time
        </h1>
        <p className="w-full md:w-[60%] lg:w-[50%] text-white/80 text-lg leading-relaxed">
          At Jotsi, we believe that every business deserves access to world-class talent and support. 
          Our mission is to connect ambitious companies with exceptional professionals who share their 
          vision for growth, innovation, and success.
        </p>
      </div>
    </div>
  );
};

export default Hero;
