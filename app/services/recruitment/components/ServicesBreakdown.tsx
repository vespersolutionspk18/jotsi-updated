"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "recruitment",
    title: "End-to-End Recruitment",
    description: "Complete recruitment lifecycle management from job posting to offer acceptance. We handle sourcing, screening, interviewing, and selection to find candidates who excel in both skills and culture fit.",
    details: [
      "Job description development",
      "Multi-channel candidate sourcing",
      "Resume screening and shortlisting",
      "Interview coordination and scheduling",
      "Reference and background checks",
      "Offer negotiation and closing"
    ],
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800"
  },
  {
    id: "executive",
    title: "Executive Search",
    description: "Specialized headhunting for C-suite and senior leadership positions. We leverage our extensive network and proven methodologies to identify and attract top-tier executive talent.",
    details: [
      "Confidential executive searches",
      "Leadership assessment and profiling",
      "Succession planning support",
      "Board member recruitment",
      "Compensation benchmarking",
      "Executive onboarding programs"
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
  },
  {
    id: "volume",
    title: "Volume Hiring",
    description: "Efficient large-scale recruitment for businesses experiencing rapid growth or seasonal demands. We streamline the process to hire quality candidates quickly without compromising standards.",
    details: [
      "Mass recruitment campaigns",
      "Campus hiring programs",
      "Assessment center management",
      "Automated screening processes",
      "Bulk onboarding coordination",
      "Recruitment process outsourcing (RPO)"
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
  },
  {
    id: "hr-management",
    title: "HR Management Services",
    description: "Comprehensive HR support covering the entire employee lifecycle. From policy development to performance management, we ensure your HR functions run smoothly and compliantly.",
    details: [
      "HR policy development",
      "Employee handbook creation",
      "Performance management systems",
      "Compensation and benefits design",
      "Employee relations support",
      "HR compliance and audits"
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800"
  },
  {
    id: "talent",
    title: "Talent Development",
    description: "Build stronger teams through strategic talent development initiatives. We design and implement programs that enhance skills, boost engagement, and prepare future leaders.",
    details: [
      "Training needs assessment",
      "Leadership development programs",
      "Career pathing and planning",
      "Mentorship program design",
      "Skills gap analysis",
      "Employee engagement surveys"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
  },
  {
    id: "outsourced",
    title: "Outsourced HR Department",
    description: "Complete HR department functionality without the overhead. Perfect for small to medium businesses that need professional HR support without building an internal team.",
    details: [
      "Full HR department services",
      "Payroll processing and administration",
      "Benefits administration",
      "Compliance management",
      "Employee self-service portals",
      "HR analytics and reporting"
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Comprehensive <span className="text-jotsi">recruitment & HR</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From finding the perfect candidate to managing your entire HR function, 
          we provide end-to-end solutions that build world-class teams.
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