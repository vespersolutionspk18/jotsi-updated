"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "developers",
    title: "Software Developers",
    description: "Full-stack, frontend, backend, and mobile developers proficient in modern frameworks and languages. Our developers bring production-ready code quality and best practices from day one.",
    details: [
      "React, Angular, Vue.js developers",
      "Node.js, Python, Java, .NET experts",
      "Mobile developers (iOS, Android, React Native)",
      "API development and integration",
      "Microservices architecture",
      "Code review and refactoring"
    ],
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineers",
    description: "Streamline your deployment pipeline and infrastructure with experts in CI/CD, containerization, and cloud platforms. We help you achieve faster, more reliable releases.",
    details: [
      "AWS, Azure, GCP certified engineers",
      "Kubernetes and Docker specialists",
      "CI/CD pipeline implementation",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Monitoring and logging solutions",
      "Security and compliance automation"
    ],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800"
  },
  {
    id: "data",
    title: "Data & AI Specialists",
    description: "Unlock insights from your data with machine learning engineers, data scientists, and analysts who transform raw data into competitive advantages.",
    details: [
      "Machine learning model development",
      "Data pipeline architecture",
      "Business intelligence and analytics",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics and forecasting"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Experts",
    description: "Protect your digital assets with security professionals who identify vulnerabilities, implement defenses, and ensure compliance with industry standards.",
    details: [
      "Security assessments and audits",
      "Penetration testing",
      "Security architecture design",
      "Incident response planning",
      "Compliance (SOC 2, HIPAA, GDPR)",
      "Security training and awareness"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
  },
  {
    id: "support",
    title: "IT Support & Administration",
    description: "Keep your systems running smoothly with experienced IT professionals who provide helpdesk support, system administration, and infrastructure management.",
    details: [
      "24/7 helpdesk support",
      "System and network administration",
      "Database management",
      "User account management",
      "Hardware and software troubleshooting",
      "Documentation and knowledge base"
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
  },
  {
    id: "qa",
    title: "QA & Testing Engineers",
    description: "Ensure flawless software delivery with comprehensive testing strategies, automation frameworks, and quality assurance processes that catch issues before they reach users.",
    details: [
      "Manual and automated testing",
      "Test automation frameworks (Selenium, Cypress)",
      "Performance and load testing",
      "Mobile app testing",
      "API testing",
      "Test plan development and execution"
    ],
    image: "https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Complete <span className="text-jotsi">technology staffing</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From individual developers to entire tech teams, we provide the specialized 
          talent you need to innovate, scale, and maintain competitive advantage.
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