"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can paralegals provide legal advice?",
      answer: "Our paralegals work under attorney supervision and cannot provide legal advice or represent you in court. However, they can handle document preparation, legal research, compliance monitoring, and administrative tasks that don't require a law license. For matters requiring legal advice, we can connect you with partnering attorneys or work alongside your existing legal counsel."
    },
    {
      question: "What types of contracts can you help with?",
      answer: "We assist with all standard business contracts including NDAs, service agreements, vendor contracts, employment agreements, lease agreements, partnership agreements, licensing agreements, and more. Our paralegals can draft, review, negotiate terms, manage renewals, and maintain your contract database. Complex or high-value contracts may require attorney review, which we can facilitate."
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "Confidentiality is paramount. All team members sign comprehensive NDAs and are trained in attorney-client privilege protocols. We use encrypted communication channels, secure document management systems, and restricted access controls. Our work is conducted in secure environments with regular security audits. We comply with all legal ethics requirements for handling confidential information."
    },
    {
      question: "What compliance regulations do you cover?",
      answer: "We support compliance across major regulations including GDPR, CCPA, HIPAA, SOX, PCI-DSS, ADA, EEOC, FLSA, and industry-specific requirements. Our team monitors regulatory changes, maintains compliance calendars, conducts audits, and helps implement necessary policies and procedures. We cover federal, state, and local regulations, with expertise in multi-state compliance."
    },
    {
      question: "How quickly can you respond to urgent legal matters?",
      answer: "For urgent matters, we offer same-day response and can mobilize resources within hours. Standard turnaround is 24-48 hours for most document reviews and compliance checks. Enterprise clients have access to priority support with guaranteed response times. We maintain on-call teams for time-sensitive litigation support and emergency compliance issues."
    },
    {
      question: "Can you work with our existing legal team?",
      answer: "Absolutely. We frequently work alongside in-house counsel and external law firms, handling overflow work, routine tasks, and specialized projects. Our paralegals integrate seamlessly with your legal team's workflows, use your preferred tools and systems, and follow your established protocols. This partnership model helps maximize your legal team's efficiency."
    },
    {
      question: "What litigation support services do you provide?",
      answer: "We offer comprehensive litigation support including discovery document management, deposition summaries, exhibit preparation, legal research, case chronologies, witness coordination, and trial preparation. Our e-discovery specialists handle large-volume document reviews using advanced technology. We work directly with your litigation attorneys to ensure seamless support throughout the case lifecycle."
    },
    {
      question: "How do you stay current with legal changes?",
      answer: "Our team undergoes continuous education and training. We subscribe to legal update services, attend professional development courses, and maintain memberships in paralegal associations. We use AI-powered legal research tools and regulatory monitoring systems to track changes in real-time. Clients receive proactive alerts about relevant legal changes affecting their business."
    },
    {
      question: "What's the cost savings compared to law firms?",
      answer: "Clients typically save 50-70% compared to traditional law firm rates. Our paralegal services cost a fraction of attorney rates while handling many of the same tasks. There's no partner markup, expensive office overhead, or minimum billing increments. You get enterprise-quality legal support at SMB-friendly prices, with transparent, predictable pricing."
    },
    {
      question: "Do you offer industry-specific legal support?",
      answer: "Yes, we have specialists with deep experience in healthcare, financial services, technology, real estate, manufacturing, and retail. Each industry has unique legal requirements, and our teams understand the specific regulations, standard contracts, and compliance needs of your sector. This specialization ensures more efficient and accurate legal support."
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
            Get answers to common questions about our legal and compliance services.
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