"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of properties do you manage?",
      answer: "We manage all property types including single-family homes, multi-family units, apartments, condominiums, townhouses, commercial properties, retail spaces, and mixed-use developments. Our teams have specialized expertise for different property types, ensuring optimal management strategies whether you own one rental home or a diverse portfolio."
    },
    {
      question: "How do you handle tenant screening?",
      answer: "Our comprehensive screening process includes credit checks, criminal background verification, employment and income verification, previous landlord references, eviction history searches, and social media screening. We use industry-leading screening services and follow all fair housing laws. Our thorough process results in quality tenants with 95%+ on-time payment rates."
    },
    {
      question: "What's included in property maintenance coordination?",
      answer: "We handle all maintenance aspects including 24/7 emergency response, routine maintenance scheduling, vendor sourcing and management, quality control inspections, warranty tracking, and preventive maintenance programs. We have pre-vetted vendor networks ensuring competitive pricing and quality work. Owners approve expenses above set thresholds while we handle day-to-day decisions."
    },
    {
      question: "How do you market vacant properties?",
      answer: "Our marketing strategy includes professional photography, virtual tours, detailed listings on 50+ platforms including Zillow, Apartments.com, and local MLS, social media campaigns, email marketing to our tenant database, and yard signs. We optimize pricing based on market analysis and typically achieve 95% occupancy rates with average vacancy periods under 14 days."
    },
    {
      question: "What financial reporting do you provide?",
      answer: "Owners receive comprehensive monthly statements showing all income and expenses, rent rolls, maintenance reports, and account balances. Year-end tax documents include 1099s and detailed expense categorization. We provide real-time access to owner portals where you can view statements, track maintenance, and monitor property performance 24/7."
    },
    {
      question: "How do you handle rent collection and late payments?",
      answer: "We offer multiple payment options for tenants including online portals, ACH transfers, and traditional methods. For late payments, we follow strict protocols: immediate late notices, consistent follow-up, late fee assessment, and eviction proceedings when necessary. Our systems result in 98%+ collection rates and minimize delinquencies."
    },
    {
      question: "Can you manage properties in different states?",
      answer: "Yes, we manage properties nationwide with teams familiar with local and state regulations. We understand varying landlord-tenant laws, licensing requirements, and market conditions across different regions. Our technology platform enables seamless multi-state portfolio management with consistent service standards regardless of location."
    },
    {
      question: "What are your management fees?",
      answer: "Our fees are transparent and competitive, typically 8-10% of collected rent for full-service management, with volume discounts for larger portfolios. Leasing fees are usually 50-100% of first month's rent. There are no hidden fees - maintenance markups, technology fees, or surprise charges. Everything is clearly outlined in our management agreement."
    },
    {
      question: "How do you handle emergencies?",
      answer: "We provide 24/7 emergency response through dedicated hotlines and on-call teams. We have protocols for all emergency types with pre-authorized spending limits for urgent repairs. Our vendor network includes emergency responders for plumbing, electrical, HVAC, and security issues. Owners are notified immediately of major incidents while we handle the immediate response."
    },
    {
      question: "Can I still be involved in property decisions?",
      answer: "Absolutely! You set the level of involvement you prefer. Some owners want approval on all decisions while others prefer hands-off management. We accommodate your preferences with customizable approval thresholds, regular communication schedules, and transparent reporting. You always maintain final say on major decisions like tenant selection, large repairs, and property improvements."
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
            Get answers to common questions about our property management services.
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