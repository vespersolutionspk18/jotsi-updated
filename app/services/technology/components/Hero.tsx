import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-between p-4 md:p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')" }}
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
            <span className="text-jotsi text-sm uppercase tracking-wider">TECHNOLOGY STAFFING & IT SUPPORT</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter mb-6">
            Elite tech talent <span className="text-jotsi">on demand</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            Access vetted developers, engineers, and IT specialists who integrate seamlessly 
            with your team. From React developers to DevOps engineers, we provide the expertise 
            you need to accelerate innovation and scale efficiently.
          </p>
          
          <div className="mb-12">
            <Button variant="yellow" size="lg" className="text-md">
              Find Your Tech Expert
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">Top 3% Talent</p>
                <p className="text-white/60 text-sm">Rigorously vetted experts</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">48-Hour Match</p>
                <p className="text-white/60 text-sm">Quick placement guaranteed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">60% Cost Savings</p>
                <p className="text-white/60 text-sm">vs. local hiring</p>
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
                <span className="text-white/90">Scale your dev team 3x faster without recruitment headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Launch products 40% faster with experienced specialists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Reduce IT issues by 70% with 24/7 proactive support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Access expertise in AI, blockchain, cloud without the overhead</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;