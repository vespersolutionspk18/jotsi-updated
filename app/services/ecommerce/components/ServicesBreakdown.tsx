"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "listing",
    title: "Product Listing & Optimization",
    description: "Maximize visibility and conversions with professionally crafted product listings. We optimize titles, descriptions, images, and keywords to ensure your products rank high and sell fast.",
    details: [
      "SEO-optimized product titles",
      "Compelling product descriptions",
      "Keyword research and optimization",
      "Image editing and enhancement",
      "A+ content and EBC creation",
      "Category and attribute mapping"
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Never oversell or run out of stock with intelligent inventory management. We synchronize stock across all channels and optimize reorder points for maximum efficiency.",
    details: [
      "Multi-channel inventory sync",
      "Stock level monitoring",
      "Reorder point optimization",
      "FBA/FBM inventory management",
      "Seasonal demand forecasting",
      "Dead stock identification"
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800"
  },
  {
    id: "order",
    title: "Order Processing & Fulfillment",
    description: "Ensure fast, accurate order fulfillment that delights customers. We manage the entire process from order receipt to delivery confirmation.",
    details: [
      "Order processing and verification",
      "Shipping label generation",
      "Multi-carrier integration",
      "Dropshipping coordination",
      "Returns and refunds processing",
      "Order tracking and updates"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
  },
  {
    id: "marketplace",
    title: "Marketplace Management",
    description: "Expand your reach across multiple platforms with centralized marketplace management. We handle platform-specific requirements while maintaining consistency.",
    details: [
      "Amazon Seller Central management",
      "eBay store optimization",
      "Walmart Marketplace setup",
      "Etsy shop management",
      "Platform compliance monitoring",
      "Performance metrics optimization"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
  },
  {
    id: "customer",
    title: "Customer Service & Reviews",
    description: "Build customer loyalty with exceptional service and reputation management. We handle inquiries, resolve issues, and maintain stellar ratings.",
    details: [
      "Customer inquiry response",
      "Order status updates",
      "Product Q&A management",
      "Review monitoring and response",
      "Feedback solicitation",
      "Reputation management"
    ],
    image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=800"
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and insights. Track performance, identify opportunities, and optimize for growth.",
    details: [
      "Sales performance analytics",
      "Conversion rate tracking",
      "Competitor analysis",
      "Pricing optimization",
      "Profit margin analysis",
      "Custom dashboard creation"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">eCommerce operations</span> support
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From product listings to customer service, we provide end-to-end support that 
          helps you scale your online business efficiently and profitably.
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