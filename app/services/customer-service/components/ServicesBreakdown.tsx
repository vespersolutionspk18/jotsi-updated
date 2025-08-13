"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "inbound",
    title: "Inbound Call Center",
    description: "Professional agents handle incoming calls with empathy and efficiency. From customer inquiries to technical support, we ensure every caller receives prompt, helpful service that resolves their needs.",
    details: [
      "Customer inquiry handling",
      "Order processing and tracking",
      "Technical support (Tier 1 & 2)",
      "Appointment scheduling",
      "Product information and sales",
      "Complaint resolution"
    ],
    image: "https://images.unsplash.com/photo-1556741533-974f8e3d0183?w=800"
  },
  {
    id: "outbound",
    title: "Outbound Call Services",
    description: "Strategic outbound campaigns that drive results. Our agents excel at sales, lead generation, and customer outreach while maintaining professionalism and compliance with all regulations.",
    details: [
      "Sales and lead generation",
      "Appointment setting",
      "Market research surveys",
      "Customer retention calls",
      "Collections and recovery",
      "Follow-up and feedback calls"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
  },
  {
    id: "omnichannel",
    title: "Omnichannel Support",
    description: "Seamless customer service across all channels. Whether customers reach out via phone, email, chat, or social media, they receive consistent, high-quality support.",
    details: [
      "Live chat support",
      "Email response management",
      "Social media monitoring",
      "SMS/text support",
      "Video call support",
      "Ticketing system management"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
  },
  {
    id: "technical",
    title: "Technical Support",
    description: "Expert technical assistance for software, hardware, and IT issues. Our trained specialists resolve complex problems while maintaining excellent customer communication.",
    details: [
      "Software troubleshooting",
      "Hardware diagnostics",
      "Account management support",
      "Installation assistance",
      "Remote desktop support",
      "Escalation management"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800"
  },
  {
    id: "sales",
    title: "Sales & Retention",
    description: "Convert inquiries into sales and keep customers coming back. Our agents are trained in consultative selling and relationship building to maximize revenue opportunities.",
    details: [
      "Inbound sales conversion",
      "Upselling and cross-selling",
      "Customer win-back campaigns",
      "Subscription renewals",
      "Loyalty program management",
      "Churn prevention strategies"
    ],
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800"
  },
  {
    id: "backoffice",
    title: "Back Office Support",
    description: "Behind-the-scenes support that keeps your operations running smoothly. From data processing to quality assurance, we handle the details that matter.",
    details: [
      "Order processing and fulfillment",
      "Data entry and validation",
      "Claims processing",
      "Quality assurance monitoring",
      "Refund and return processing",
      "Documentation and reporting"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">customer service</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From inbound support to sales campaigns, we provide comprehensive call center 
          services that enhance customer satisfaction and drive business growth.
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