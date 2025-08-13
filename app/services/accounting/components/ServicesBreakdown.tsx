"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "bookkeeping",
    title: "Daily Bookkeeping",
    description: "Maintain accurate, up-to-date financial records with our meticulous daily bookkeeping services. We handle transaction recording, categorization, bank reconciliations, and ensure your books are always audit-ready.",
    details: [
      "Transaction recording and categorization",
      "Bank and credit card reconciliations",
      "Accounts receivable/payable management",
      "Expense tracking and reporting",
      "Digital receipt management",
      "Multi-currency transactions"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting",
    description: "Get clear visibility into your financial performance with comprehensive reporting that transforms raw data into actionable business intelligence.",
    details: [
      "Monthly, quarterly, and annual statements",
      "Profit & loss analysis",
      "Balance sheet preparation",
      "Cash flow statements",
      "Custom KPI dashboards",
      "Variance analysis and forecasting"
    ],
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800"
  },
  {
    id: "tax",
    title: "Tax Preparation & Planning",
    description: "Maximize deductions, ensure compliance, and strategically plan for tax efficiency with our expert tax professionals who stay current with ever-changing regulations.",
    details: [
      "Business tax return preparation",
      "Quarterly tax estimates",
      "Tax planning strategies",
      "Audit support and representation",
      "Sales tax compliance",
      "International tax considerations"
    ],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800"
  },
  {
    id: "payroll",
    title: "Payroll Processing",
    description: "Ensure your team is paid accurately and on time while maintaining compliance with all federal, state, and local regulations.",
    details: [
      "Automated payroll processing",
      "Direct deposit management",
      "Tax withholding calculations",
      "Benefits administration",
      "Time tracking integration",
      "Year-end W-2 and 1099 preparation"
    ],
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800"
  },
  {
    id: "cfo",
    title: "Virtual CFO Services",
    description: "Access C-level financial expertise without the C-level cost. Our virtual CFOs provide strategic guidance to drive growth and profitability.",
    details: [
      "Strategic financial planning",
      "Budget development and monitoring",
      "Cash flow optimization",
      "Investment analysis",
      "Board reporting packages",
      "M&A support and due diligence"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: "cleanup",
    title: "Catch-up & Cleanup",
    description: "Behind on your books? We'll get you caught up quickly and accurately, no matter how far behind you are.",
    details: [
      "Historical transaction reconstruction",
      "Account reconciliation",
      "Error identification and correction",
      "Missing documentation recovery",
      "System migration support",
      "Process improvement recommendations"
    ],
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Comprehensive <span className="text-jotsi">accounting solutions</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From daily bookkeeping to strategic CFO services, we provide the full spectrum of 
          financial support your business needs to thrive.
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