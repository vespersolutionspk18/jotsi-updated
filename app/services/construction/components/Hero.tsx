import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-between p-4 md:p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920')" }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-jotsi/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-end justify-between gap-12 pb-16">
        <div className="w-full lg:w-[60%]">
          <div className="mb-6">
            <span className="text-jotsi text-sm uppercase tracking-wider">CONSTRUCTION ESTIMATING & PROJECT SUPPORT</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter mb-6">
            Win more bids with <span className="text-jotsi">precision estimates</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            Get accurate takeoffs and detailed estimates within 24-48 hours. Our construction 
            specialists combine field expertise with cutting-edge software to help you bid 
            competitively while protecting your margins.
          </p>
          
          <div className="mb-12">
            <Button variant="yellow" size="lg" className="text-md">
              Get Your First Estimate
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">98% Accuracy</p>
                <p className="text-white/60 text-sm">Industry-leading precision</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">24-48 Hour Delivery</p>
                <p className="text-white/60 text-sm">Fast turnaround guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">All Trades Covered</p>
                <p className="text-white/60 text-sm">Residential to commercial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[35%]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
            <h3 className="text-white text-2xl font-normal tracking-tight mb-6">
              Quick wins we deliver
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Win 30% more bids with accurate, competitive estimates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Reduce estimating time from days to hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Catch costly errors before they impact your margins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Scale bidding capacity without adding overhead</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;