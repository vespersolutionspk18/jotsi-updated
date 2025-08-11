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
    id: "accounting",
    title: "Accounting & Bookkeeping",
    subtitle: "Keep your financials precise and compliant.",
    description: "Our expert bookkeeping and accounting professionals ensure your financials are accurate, compliant, and optimized for strategic decision-making.",
    image: "/assets/accounting.jpeg",
    route: "/services/accounting-bookkeeping"
  },
  construction: {
    id: "construction",
    title: "Construction Estimating & Project Support",
    subtitle: "Win more profitable bids with detailed estimates.",
    description: "Receive accurate material takeoffs and detailed estimates within 24-48 hours, empowering you to bid confidently and maximize your project margins.",
    image: "/assets/construction.jpeg",
    route: "/services/construction-estimating"
  },
  technology: {
    id: "technology",
    title: "Technology Staffing & IT Support",
    subtitle: "Power your innovation with top-tier tech talent.",
    description: "Access skilled IT experts, developers, and support technicians matched to your technology stack, ready to drive your projects forward.",
    image: "/assets/technology.jpeg",
    route: "/services/technology-staffing"
  },
  marketing: {
    id: "marketing",
    title: "Digital Marketing & Creative Services",
    subtitle: "Amplify your brand's voice and reach.",
    description: "Our skilled marketers, content creators, and designers build and execute data-driven campaigns that engage your audience and grow your business.",
    image: "/assets/marketing.jpeg",
    route: "/services/digital-marketing"
  },
  administrative: {
    id: "administrative",
    title: "Administrative & Virtual Assistants",
    subtitle: "Streamline operations with reliable virtual support.",
    description: "Boost your team's productivity with efficient and dedicated virtual assistants who handle daily tasks, scheduling, and administrative duties.",
    image: "/assets/assistants.jpeg",
    route: "/services/administrative-assistants"
  },
  customerService: {
    id: "customerService",
    title: "Customer Service & Call Center Staffing",
    subtitle: "Build loyalty with exceptional customer care.",
    description: "Deliver outstanding customer experiences with our highly-trained call center agents and support staff, focused on satisfaction and retention.",
    image: "/assets/customer-service.jpeg",
    route: "/services/customer-service"
  },
  recruitment: {
    id: "recruitment",
    title: "Recruitment & HR Management",
    subtitle: "Build a world-class team, faster.",
    description: "Our end-to-end recruitment services handle everything from sourcing to onboarding, connecting you with the top-tier talent you need to succeed.",
    image: "/assets/recruitment.jpeg",
    route: "/services/recruitment-hr"
  },
  legal: {
    id: "legal",
    title: "Legal & Compliance Support",
    subtitle: "Navigate complexity with expert legal support.",
    description: "Access specialized paralegal and compliance professionals to help manage regulatory requirements, contracts, and legal documentation with confidence.",
    image: "/assets/legal.jpeg",
    route: "/services/legal-compliance"
  },
  healthcare: {
    id: "healthcare",
    title: "Healthcare & Medical Office Staffing",
    subtitle: "Ensure your practice runs smoothly and efficiently.",
    description: "We provide qualified medical administrative staff and support personnel to handle billing, scheduling, and patient communications.",
    image: "/assets/healthcare.jpeg",
    route: "/services/healthcare-staffing"
  },
  realEstate: {
    id: "realEstate",
    title: "Real Estate & Property Management Support",
    subtitle: "Manage your properties with expert support.",
    description: "Streamline your administrative, leasing, and operational tasks with our support specialists for the real estate industry.",
    image: "/assets/real-estate.jpeg",
    route: "/services/real-estate-support"
  },
  ecommerce: {
    id: "ecommerce",
    title: "eCommerce & Retail Operations",
    subtitle: "Scale your retail operations seamlessly.",
    description: "From inventory management to customer service, our skilled team supports your eCommerce and retail operations to drive growth and efficiency.",
    image: "/assets/ecommerce.jpeg",
    route: "/services/ecommerce-retail"
  }
};


const OurServices = () => {
  const [activeService, setActiveService] = useState<string>("accounting");
  const currentService = servicesData[activeService];

  return (
   <div className="bg-stone-100 p-4 md:p-10 lg:p-20 flex flex-col tracking-tighter">
  <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-26">
    {/* Left Sidebar: Services List */}
    <div className="flex flex-col lg:w-[35%]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-normal tracking-tighter">
        Comprehensive Solutions Across Industries
      </h2>
      <p className="text-stone-600 mb-8 text-lg mt-4 font-light">
        What sets Jotsi apart is our flexibility and unwavering commitment to quality. Whether you're a startup building your first team or an established enterprise seeking specialized expertise, we offer tailored HR solutions across a wide range of industries.
      </p>
      <div className="flex flex-col gap-3">
        {Object.keys(servicesData).map((key) => {
          const service = servicesData[key];
          return (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center justify-between text-left text-lg md:text-xl font-normal border-b-2 pb-3 transition-all duration-300 ${
                activeService === service.id
                  ? "text-black border-yellow-400"
                  : "text-stone-400 border-stone-200 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <span>{service.title}</span>
              <span
                className={`text-2xl md:text-3xl font-light transition-transform duration-300 ${
                  activeService === service.id ? "rotate-45 text-yellow-500" : ""
                }`}
              >
                +
              </span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Right Side: Service Details */}
    <div className="flex flex-col lg:w-[65%] gap-6 mt-10 lg:mt-0">
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
          <h3 className="text-xl md:text-2xl font-semibold">
            {currentService.subtitle}
          </h3>
          <div className="text-stone-600 font-light text-lg space-y-4">
            {currentService.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <div className="w-fit">
            <Button className="text-md">
              <span className="hidden md:inline">
                Learn More About Our {currentService.title}
              </span>
              <span className="md:hidden">Learn More</span>
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>

  );
};

export default OurServices;