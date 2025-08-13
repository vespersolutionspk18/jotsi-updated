"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "executive",
    title: "Executive Assistant Services",
    description: "High-level support for executives and business leaders. Our EAs manage complex calendars, coordinate travel, prepare reports, and handle confidential communications with utmost professionalism.",
    details: [
      "Calendar and schedule management",
      "Travel planning and coordination",
      "Meeting preparation and minutes",
      "Email management and prioritization",
      "Expense reporting and reimbursements",
      "Board meeting coordination"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
  },
  {
    id: "admin",
    title: "General Administrative Support",
    description: "Comprehensive administrative assistance for daily business operations. From data entry to document management, we handle the tasks that keep your business running smoothly.",
    details: [
      "Data entry and database management",
      "Document preparation and formatting",
      "File organization and management",
      "Invoice processing and billing support",
      "Customer database maintenance",
      "Office supply management"
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
  },
  {
    id: "project",
    title: "Project Management Support",
    description: "Keep projects on track with dedicated support for planning, coordination, and execution. Our assistants ensure nothing falls through the cracks.",
    details: [
      "Project timeline management",
      "Task assignment and tracking",
      "Team coordination and communication",
      "Progress reporting and updates",
      "Resource allocation support",
      "Deadline monitoring and reminders"
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
  },
  {
    id: "customer",
    title: "Customer Support Administration",
    description: "Enhance customer experience with dedicated support for inquiries, order processing, and relationship management. We ensure every customer interaction is handled professionally.",
    details: [
      "Customer inquiry response",
      "Order processing and tracking",
      "CRM data management",
      "Support ticket handling",
      "Customer feedback collection",
      "Loyalty program administration"
    ],
    image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=800"
  },
  {
    id: "research",
    title: "Research & Analysis",
    description: "Get comprehensive research support for market analysis, competitor monitoring, and data gathering. We provide actionable insights to inform your decisions.",
    details: [
      "Market research and analysis",
      "Competitor monitoring",
      "Industry trend reports",
      "Data collection and organization",
      "Survey creation and analysis",
      "Presentation preparation"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    id: "personal",
    title: "Personal Assistant Services",
    description: "Blend work and life seamlessly with personal assistant support that handles both professional and personal tasks, giving you more time for what matters most.",
    details: [
      "Personal appointment scheduling",
      "Travel and vacation planning",
      "Gift sourcing and purchasing",
      "Event planning and coordination",
      "Personal errands coordination",
      "Household vendor management"
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Comprehensive <span className="text-jotsi">virtual assistant</span> services
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From executive support to personal assistance, our skilled professionals handle 
          every administrative need with precision and reliability.
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