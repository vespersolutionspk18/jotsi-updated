"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "listing",
    title: "Listing Management",
    description: "Maximize property visibility and attract quality tenants or buyers with comprehensive listing management across all major platforms and marketing channels.",
    details: [
      "MLS listing creation and updates",
      "Property photography coordination",
      "Virtual tour and video management",
      "Listing syndication across platforms",
      "Property description writing",
      "Competitive market analysis"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
  },
  {
    id: "tenant",
    title: "Tenant Management",
    description: "Build strong tenant relationships while ensuring consistent rent collection and property care. We handle all aspects of tenant interaction professionally.",
    details: [
      "Tenant screening and background checks",
      "Lease preparation and renewals",
      "Rent collection and accounting",
      "Maintenance request coordination",
      "Move-in/move-out inspections",
      "Tenant communication management"
    ],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800"
  },
  {
    id: "transaction",
    title: "Transaction Coordination",
    description: "Ensure smooth real estate transactions from contract to closing. Our coordinators manage all details, deadlines, and documentation for seamless deals.",
    details: [
      "Contract preparation and review",
      "Escrow and title coordination",
      "Inspection scheduling",
      "Document management",
      "Closing coordination",
      "Commission processing"
    ],
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800"
  },
  {
    id: "property",
    title: "Property Administration",
    description: "Keep your properties running efficiently with comprehensive administrative support covering maintenance, compliance, and financial management.",
    details: [
      "Vendor management and coordination",
      "Maintenance scheduling and tracking",
      "Property inspection reports",
      "Insurance and compliance management",
      "Utility account management",
      "Property tax administration"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  },
  {
    id: "marketing",
    title: "Marketing & Lead Generation",
    description: "Drive property interest and generate qualified leads through strategic marketing campaigns and professional brand management.",
    details: [
      "Social media marketing",
      "Email campaign management",
      "Lead capture and nurturing",
      "Open house coordination",
      "Marketing material design",
      "Website and SEO management"
    ],
    image: "https://images.unsplash.com/photo-1565784655006-3c8e1b5fe184?w=800"
  },
  {
    id: "financial",
    title: "Financial Management",
    description: "Maintain accurate financial records and maximize property profitability with comprehensive accounting and reporting services.",
    details: [
      "Rent roll management",
      "Operating expense tracking",
      "Financial reporting and analysis",
      "Budget preparation",
      "Tax document preparation",
      "Investor reporting"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">real estate support</span> services
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From property listings to tenant management, our specialists provide comprehensive 
          support that maximizes your portfolio&apos;s performance and value.
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