"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "contract",
    title: "Contract Management",
    description: "Comprehensive contract lifecycle management from drafting to execution. Our specialists ensure your agreements protect your interests while maintaining compliance with all applicable laws.",
    details: [
      "Contract drafting and review",
      "Negotiation support",
      "Digital contract management",
      "Renewal tracking and alerts",
      "Vendor agreement management",
      "NDA and confidentiality agreements"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description: "Stay ahead of regulatory changes with proactive compliance management. We monitor, interpret, and implement requirements across multiple jurisdictions and industries.",
    details: [
      "Regulatory monitoring and updates",
      "Compliance audits and assessments",
      "Policy and procedure development",
      "GDPR/CCPA compliance",
      "Industry-specific regulations",
      "Compliance training programs"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: "corporate",
    title: "Corporate Legal Support",
    description: "Essential corporate legal services to keep your business running smoothly. From entity formation to corporate governance, we handle the legal foundation of your business.",
    details: [
      "Entity formation and structuring",
      "Corporate governance documentation",
      "Board meeting preparation",
      "Annual compliance filings",
      "Trademark and IP filings",
      "Business license management"
    ],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800"
  },
  {
    id: "litigation",
    title: "Litigation Support",
    description: "Comprehensive litigation support services that help legal teams manage cases efficiently. Our paralegals handle the time-intensive tasks so attorneys can focus on strategy.",
    details: [
      "Discovery document management",
      "Deposition summaries",
      "Legal research and analysis",
      "Case file organization",
      "E-discovery support",
      "Trial preparation assistance"
    ],
    image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800"
  },
  {
    id: "employment",
    title: "Employment Law Support",
    description: "Navigate complex employment laws with confidence. We help maintain compliant HR practices and protect your business from employment-related legal risks.",
    details: [
      "Employee handbook development",
      "Employment agreement drafting",
      "Wage and hour compliance",
      "EEOC compliance support",
      "Workplace policy development",
      "Termination documentation"
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
  },
  {
    id: "risk",
    title: "Risk Management",
    description: "Identify and mitigate legal risks before they become problems. Our proactive approach helps protect your business from potential liabilities and disputes.",
    details: [
      "Risk assessments and audits",
      "Insurance claim support",
      "Incident documentation",
      "Liability analysis",
      "Crisis management planning",
      "Preventive legal strategies"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Comprehensive <span className="text-jotsi">legal support</span> services
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From contract management to compliance monitoring, our legal professionals provide 
          the support you need to operate confidently and compliantly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Service Selector */}
        <div className="w-full lg:w-[35%]">
          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedService.id === service.id
                    ? "bg-black text-white"
                    : "bg-stone-50 hover:bg-stone-100 text-black"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-normal tracking-tight">{service.title}</span>
                  <span className={`text-2xl transition-transform duration-300 ${
                    selectedService.id === service.id ? "rotate-45 text-jotsi" : ""
                  }`}>
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="w-full lg:w-[65%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-normal tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-stone-700 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Features Grid */}
              <div>
                <h4 className="text-xl font-medium mb-6">What&apos;s included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-jotsi w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-stone-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesBreakdown;