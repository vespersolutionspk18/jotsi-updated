import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-between p-4 md:p-7 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920')" }}
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
            <span className="text-jotsi text-sm uppercase tracking-wider">HEALTHCARE & MEDICAL OFFICE STAFFING</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tighter mb-6">
            Healthcare support that <span className="text-jotsi">improves outcomes</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            Optimize your practice with specialized medical administrative professionals who 
            understand healthcare workflows. From billing to patient coordination, we ensure 
            your practice runs efficiently while maintaining the highest standards of care.
          </p>
          
          <div className="mb-12">
            <Button variant="yellow" size="lg" className="text-md">
              Optimize Your Practice
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">HIPAA Certified</p>
                <p className="text-white/60 text-sm">100% compliant staff</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">30% Revenue Increase</p>
                <p className="text-white/60 text-sm">Better billing practices</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BsCheckCircleFill className="text-jotsi text-xl mt-1" />
              <div>
                <p className="text-white font-medium">&lt; 2% Denial Rate</p>
                <p className="text-white/60 text-sm">Claims accuracy</p>
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
                <span className="text-white/90">Reduce claim denials by 85% with expert billing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Increase collections by 30% within 90 days</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Cut administrative costs by 40% or more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-jotsi text-xl">→</span>
                <span className="text-white/90">Improve patient satisfaction scores by 25%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;