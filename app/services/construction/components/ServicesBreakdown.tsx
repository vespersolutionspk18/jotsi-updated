"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "takeoffs",
    title: "Material Takeoffs",
    description: "Get precise material quantities and measurements from blueprints and specifications. Our detailed takeoffs include all materials, fixtures, and equipment needed for accurate bidding.",
    details: [
      "Digital blueprint analysis",
      "Quantity surveying for all trades",
      "Material list generation",
      "Waste factor calculations",
      "Alternates and value engineering options",
      "BIM model quantity extraction"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
  },
  {
    id: "cost-estimating",
    title: "Cost Estimating",
    description: "Comprehensive cost estimates that account for materials, labor, equipment, and overhead. We provide detailed line-item breakdowns with current market pricing.",
    details: [
      "Labor cost analysis by trade",
      "Material pricing with vendor quotes",
      "Equipment and tool costs",
      "Subcontractor pricing coordination",
      "Overhead and profit calculations",
      "Regional cost adjustments"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
  },
  {
    id: "bid-preparation",
    title: "Bid Preparation & Support",
    description: "Professional bid packages that win contracts. We prepare comprehensive proposals with detailed scope coverage and competitive pricing strategies.",
    details: [
      "Bid document compilation",
      "Scope of work documentation",
      "Exclusions and clarifications",
      "Bid comparison analysis",
      "Value engineering proposals",
      "Presentation materials"
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112c66c088?w=800"
  },
  {
    id: "change-orders",
    title: "Change Order Management",
    description: "Track and document all project changes with detailed cost impacts. We help you maintain profitability through accurate change order pricing and documentation.",
    details: [
      "Change order cost estimates",
      "Impact analysis on schedule",
      "Documentation and tracking",
      "Client negotiation support",
      "Dispute resolution assistance",
      "Historical change tracking"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
  },
  {
    id: "project-controls",
    title: "Project Controls & Scheduling",
    description: "Keep projects on track with comprehensive scheduling and cost control services. Monitor progress, track costs, and identify issues before they impact your bottom line.",
    details: [
      "CPM schedule development",
      "Resource loading and leveling",
      "Cost tracking and reporting",
      "Earned value analysis",
      "Progress monitoring",
      "Risk assessment and mitigation"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: "specialty",
    title: "Specialty Trade Estimating",
    description: "Expert estimating for specific trades including MEP, structural, concrete, and more. Our specialists understand the unique requirements of each trade.",
    details: [
      "Mechanical, Electrical, Plumbing (MEP)",
      "Structural steel and concrete",
      "Sitework and excavation",
      "Roofing and waterproofing",
      "Millwork and finishes",
      "HVAC and fire protection"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">construction estimating</span> services
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From initial takeoffs to final change orders, we provide comprehensive estimating 
          and project support services that help you win profitable work.
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