"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "billing",
    title: "Medical Billing & Coding",
    description: "Maximize revenue with expert billing and coding services. Our certified coders ensure accurate claim submission, reducing denials and accelerating reimbursements while maintaining full compliance.",
    details: [
      "ICD-10, CPT, and HCPCS coding",
      "Claims submission and tracking",
      "Denial management and appeals",
      "Insurance verification",
      "Prior authorization support",
      "Revenue cycle optimization"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
  },
  {
    id: "patient",
    title: "Patient Coordination",
    description: "Enhance patient experience with seamless coordination services. From scheduling to follow-ups, we ensure patients receive timely care while reducing no-shows and improving satisfaction.",
    details: [
      "Appointment scheduling and reminders",
      "Patient intake and registration",
      "Insurance eligibility verification",
      "Referral coordination",
      "Follow-up care management",
      "Patient portal support"
    ],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800"
  },
  {
    id: "ehr",
    title: "EHR Management",
    description: "Optimize your electronic health records system for efficiency and compliance. Our specialists ensure accurate documentation, meaningful use compliance, and seamless data management.",
    details: [
      "EHR data entry and maintenance",
      "Clinical documentation support",
      "System optimization and training",
      "Meaningful use reporting",
      "Quality measure tracking",
      "Interoperability management"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
  },
  {
    id: "telehealth",
    title: "Telehealth Support",
    description: "Enable seamless virtual care delivery with comprehensive telehealth support. We handle the technical and administrative aspects so providers can focus on patient care.",
    details: [
      "Virtual appointment scheduling",
      "Platform setup and management",
      "Patient technical support",
      "Documentation and billing",
      "Consent and compliance management",
      "Follow-up coordination"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
  },
  {
    id: "practice",
    title: "Practice Management",
    description: "Streamline your entire practice operations with comprehensive administrative support. We handle the business side of healthcare so you can focus on patient care.",
    details: [
      "Staff scheduling and coordination",
      "Supply and inventory management",
      "Credentialing and licensing support",
      "Quality reporting and compliance",
      "Financial reporting and analysis",
      "Vendor management"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
  },
  {
    id: "specialty",
    title: "Specialty-Specific Support",
    description: "Tailored administrative support for specific medical specialties. Our teams understand the unique workflows, billing codes, and requirements of your practice area.",
    details: [
      "Specialty-specific billing codes",
      "Prior authorization expertise",
      "Clinical trial coordination",
      "Surgical scheduling support",
      "Lab result management",
      "Specialty registry reporting"
    ],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">healthcare administrative</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From medical billing to practice management, our HIPAA-certified professionals 
          provide the specialized support your healthcare organization needs.
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