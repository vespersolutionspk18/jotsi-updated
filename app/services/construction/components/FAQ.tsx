"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate are your construction estimates?",
      answer: "We maintain a 98% accuracy rate on our estimates. Our team combines 15+ years of field experience with the latest estimating software and current material pricing databases. We account for regional variations, seasonal factors, and market conditions. If significant discrepancies occur due to our error, we provide revision support at no additional cost."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "Standard estimates are delivered within 24-48 hours. For complex projects or large commercial builds, we may need 3-5 business days. Rush service is available for same-day delivery on urgent bids. We'll provide a precise timeline upon reviewing your project documents, and we meet our deadlines 99% of the time."
    },
    {
      question: "What types of construction projects do you estimate?",
      answer: "We handle all project types including residential (single-family, multi-family, renovations), commercial (office, retail, hospitality), industrial (warehouses, manufacturing), institutional (schools, hospitals), and civil/infrastructure projects. Our estimators specialize in different sectors to ensure expertise specific to your project type."
    },
    {
      question: "What software and formats do you work with?",
      answer: "We're proficient in all major estimating platforms including PlanSwift, Bluebeam, On-Screen Takeoff, ProEst, Sage Estimating, and more. We accept plans in PDF, DWG, DWF, and paper formats. Deliverables can be provided in Excel, PDF, or your preferred estimating software format for easy integration with your systems."
    },
    {
      question: "Do you provide takeoffs only or full estimates?",
      answer: "We offer both services. You can choose material takeoffs only (quantities and measurements) or complete estimates including labor, equipment, overhead, and profit margins. We also provide value engineering suggestions, alternate material options, and constructability reviews to help optimize your bids."
    },
    {
      question: "How do you handle change orders and revisions?",
      answer: "We provide quick turnaround on change order pricing, typically within 24 hours. Our team documents all changes, provides detailed cost impacts, and helps you maintain profitability throughout the project. Minor revisions to estimates are included; major scope changes are handled at a discounted rate for existing clients."
    },
    {
      question: "Can you help with bid strategy and analysis?",
      answer: "Yes, beyond numbers, we provide strategic support including bid/no-bid analysis, competitor assessment, margin optimization, and risk evaluation. We help identify the most profitable opportunities and provide insights on how to position your bid competitively while protecting margins."
    },
    {
      question: "What information do you need to start an estimate?",
      answer: "We need project plans/drawings, specifications, project location, bid date, and any special requirements or preferences. The more information you provide, the more accurate our estimate. We have a simple upload portal and checklist to ensure nothing is missed."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer flexible pricing: pay per project based on scope and complexity, or choose a monthly plan for unlimited estimates. Project-based pricing starts at $299 for simple residential to $2,000+ for complex commercial projects. Monthly plans provide better value for contractors bidding regularly."
    },
    {
      question: "Do you provide ongoing project support?",
      answer: "Yes, we offer continuous support throughout your project including progress billing, schedule analysis, cost tracking, and project controls. Our team can attend project meetings virtually, help with submittals, and provide expertise during construction to ensure your project stays profitable."
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
            Frequently asked <span className="text-jotsi">questions</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Get answers to common questions about our construction estimating services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
              >
                <span className="text-lg font-normal tracking-tight pr-4">
                  {faq.question}
                </span>
                <BsChevronDown
                  className={`text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-stone-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;