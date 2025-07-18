"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
}

const servicesData: Record<string, ServiceData> = {
  accounting: {
    id: "talent",
    title: "Strategic Talent Outsourcing Solutions",
    subtitle: "Professional staffing and recruitment services across industries.",
    description: "Scale your team efficiently with our vetted offshore professionals. From administrative support to specialized technical roles, we provide dedicated staff that seamlessly integrate with your operations while reducing overhead by up to 70%.\n\nOur rigorous selection process ensures you get top-tier talent across accounting, data entry, customer service, IT support, and specialized industry roles. Each team member undergoes comprehensive training on North American business practices and your specific workflows, backed by local management to ensure consistent quality and communication.",
    image: "/assets/hero.jpeg",
    route: "/services/talent-workforce-solutions"
  },
  estimation: {
    id: "construction",
    title: "Construction Estimating & Takeoff Services",
    subtitle: "Precision estimating and takeoff services for the construction industry.",
    description: "Bid with confidence and win more profitable projects with our meticulous estimating and material takeoff services. We deliver industry-leading accuracy on tight deadlines (24-48 hours), eliminating financial uncertainty and protecting your margins from the ground up.\n\nOur team of certified estimators and engineers utilizes advanced software to analyze blueprints for residential, commercial, and industrial projects. We specialize in detailed takeoffs for key trades, including structural steel, concrete, and flooring, ensuring every detail is accounted for from blueprint to final bid.",
    image: "/assets/hero.jpeg",
    route: "/services/construction-estimating"
  },
  technology: {
    id: "technology",
    title: " Digital & Innovation Services",
    subtitle: "End-to-end AI, Web, and Software development for modern enterprises.",
    description: "Transform your business operations and gain a decisive competitive edge with our custom technology solutions. We design, build, and deploy powerful software, applications, and AI models that solve your unique challenges and create new opportunities for growth and efficiency.\n\nOur agile development process involves you at every stage, from concept to launch. Whether it's enterprise-grade ERP consulting, custom web and mobile development, or implementing advanced AI/ML models for data analysis, our expert engineers deliver scalable, secure, and future-proof solutions.",
    image: "/assets/callcenter.jpg",
    route: "/services/staffing"
  }
};

const OurServices = () => {
  const [activeService, setActiveService] = useState<string>("accounting");
  const currentService = servicesData[activeService];

  return (
    <div className="bg-stone-100 p-20  flex flex-col tracking-tighter ">
      <div className="flex flex-col lg:flex-row w-full  gap-26 ">
        <div className="flex flex-col lg:w-[35%]">
          <h2 className="text-xl lg:text-5xl mb-4  font-normal tracking-tighter">
           Our Areas of Expertise
          </h2>
          <p className="text-stone-600 mb-8 text-lg mt-4 font-light" >
            We deliver expert-led services that help firms scale efficiently, reduce overhead, and maintain accuracy through industry-grade tools and highly skilled teams.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setActiveService("accounting")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-2 pb-3 transition-all duration-300 ${
                activeService === "accounting"
                  ? "text-black border-yellow-400"
                  : "text-stone-400 border-stone-200 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <span>Talent & Workforce Solutions</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "accounting" ? "rotate-45 text-yellow-500" : ""
              }`}>+</span>
            </button>
            <button
              onClick={() => setActiveService("estimation")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-2 pb-3 transition-all duration-300 ${
                activeService === "estimation"
                  ? "text-black border-yellow-400"
                  : "text-stone-400 border-stone-200 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <span>Construction Estimating & Takeoff Services</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "estimation" ? "rotate-45 text-yellow-500" : ""
              }`}>+</span>
            </button>
            <button
              onClick={() => setActiveService("technology")}
              className={`flex items-center justify-between text-left text-xl font-normal border-b-2 pb-3 transition-all duration-300 ${
                activeService === "technology"
                  ? "text-black border-yellow-400"
                  : "text-stone-400 border-stone-200 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <span>Digital & Innovation Services</span>
              <span className={`text-3xl font-light transition-transform duration-300 ${
                activeService === "technology" ? "rotate-45 text-yellow-500" : ""
              }`}>+</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:w-[65%] gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={800}
                  height={400}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold">{currentService.subtitle}</h3>
              <div className="text-stone-600 font-light text-lg space-y-4">
                {currentService.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="w-fit"><Button className="text-md">Learn More About Our {currentService.title}</Button> </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default OurServices;