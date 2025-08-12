"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can you get our books up to date?",
      answer: "For most businesses, we can get you completely caught up within 2-4 weeks, regardless of how far behind you are. Simple cases can be done in as little as 1 week. During onboarding, we'll give you a precise timeline based on your specific situation, transaction volume, and complexity."
    },
    {
      question: "What accounting software do you work with?",
      answer: "We're platform agnostic and work with all major accounting software including QuickBooks (Online & Desktop), Xero, Wave, FreshBooks, NetSuite, SAP, and more. If you're not using any software yet, we'll help you choose and implement the best solution for your business needs and budget."
    },
    {
      question: "Will I have a dedicated accountant or different people each time?",
      answer: "You'll have a dedicated accounting team led by a senior accountant who becomes an expert in your business. This ensures consistency, builds deep understanding of your operations, and creates a true partnership. Your team is also backed by specialists in tax, payroll, and CFO services when needed."
    },
    {
      question: "How do you ensure the security of our financial data?",
      answer: "We take security seriously with bank-level 256-bit encryption, SOC 2 Type II compliance, secure document portals, and strict NDAs with all team members. We never share your data with third parties, and all access is logged and monitored. Our security protocols exceed industry standards and are regularly audited."
    },
    {
      question: "What's included in tax preparation services?",
      answer: "Our tax services include federal and state business tax returns, quarterly estimated tax calculations, tax planning strategies, audit support, 1099 preparation, sales tax filing, and year-round tax advisory. We proactively identify deductions and credits to minimize your tax liability legally and ethically."
    },
    {
      question: "Can you help if we're facing an IRS audit?",
      answer: "Absolutely. We provide full audit support including document preparation, IRS correspondence, representation (through our EAs and CPAs), and resolution strategies. If you're already our client, your books will be audit-ready, making the process much smoother. We've successfully helped hundreds of clients through audits."
    },
    {
      question: "How does your pricing compare to hiring in-house?",
      answer: "Our services typically cost 40-60% less than hiring a full-time bookkeeper or accountant when you factor in salary, benefits, training, and software costs. Plus, you get a full team of experts rather than one person, with no sick days, vacations, or turnover disruptions."
    },
    {
      question: "What if we're not satisfied with the service?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with our service in the first month, we'll refund your fees. After that, there are no long-term contracts—you can adjust or cancel services with 30 days notice. Our 99% retention rate speaks to our commitment to client satisfaction."
    },
    {
      question: "Do you work with international businesses?",
      answer: "Yes, we work with businesses operating internationally, handling multi-currency transactions, international tax considerations, transfer pricing documentation, and country-specific compliance requirements. Our team includes specialists in international accounting standards and cross-border operations."
    },
    {
      question: "How do virtual CFO services work?",
      answer: "Our virtual CFOs provide strategic financial leadership through regular video meetings, financial analysis, budgeting, cash flow management, and growth planning. They attend board meetings, help with fundraising, guide major financial decisions, and serve as your trusted financial advisor—all at a fraction of the cost of a full-time CFO."
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
            Frequently asked <span className="text-yellow-400">questions</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Get answers to common questions about our accounting and bookkeeping services.
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