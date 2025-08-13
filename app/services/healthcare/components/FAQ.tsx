"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your staff HIPAA certified?",
      answer: "Yes, 100% of our healthcare staff are HIPAA certified and undergo regular compliance training. We maintain strict security protocols including encrypted communications, secure workstations, BAA agreements, and regular audits. Our team is trained in PHI handling, patient privacy, and all aspects of HIPAA compliance. We also carry cyber liability insurance for additional protection."
    },
    {
      question: "Which EHR systems do you work with?",
      answer: "Our staff are trained on all major EHR platforms including Epic, Cerner, Athenahealth, NextGen, eClinicalWorks, Allscripts, Practice Fusion, DrChrono, and many others. We can quickly adapt to proprietary or custom systems with minimal training. Our teams access your systems securely through VPN or remote desktop connections, maintaining full audit trails."
    },
    {
      question: "How quickly can you reduce our claim denial rate?",
      answer: "Most practices see significant improvement within 30-60 days. Our certified coders and billers typically reduce denial rates to under 2% through accurate coding, proper documentation, timely filing, and proactive denial management. We identify and fix root causes of denials, implement prevention strategies, and maintain detailed analytics to track improvement."
    },
    {
      question: "Do you handle prior authorizations?",
      answer: "Yes, we provide comprehensive prior authorization support including initial requests, follow-ups, appeals, and peer-to-peer coordination. Our team knows the specific requirements for different insurers and specialties, maintains authorization tracking systems, and ensures timely submissions to prevent delays in patient care."
    },
    {
      question: "Can you support multiple practice locations?",
      answer: "Absolutely. We support practices with multiple locations, from small multi-site clinics to large hospital systems. Our teams can handle location-specific workflows, coordinate between sites, maintain consistent processes across locations, and provide consolidated or location-specific reporting as needed."
    },
    {
      question: "What specialties do you support?",
      answer: "We support all medical specialties including primary care, cardiology, orthopedics, dermatology, OB/GYN, pediatrics, psychiatry, oncology, and more. Each specialty has unique billing codes, workflows, and requirements. Our teams include specialists with specific experience in your field who understand the nuances of your practice."
    },
    {
      question: "How do you handle patient communications?",
      answer: "We provide multichannel patient communication including phone calls, emails, text messages, and patient portal messages. Our staff are trained in compassionate communication, handle appointment scheduling, insurance questions, billing inquiries, and general support. We maintain HIPAA compliance across all communication channels."
    },
    {
      question: "What's included in revenue cycle management?",
      answer: "Our RCM services cover the entire revenue cycle: patient registration, insurance verification, prior authorizations, charge capture, coding, claim submission, payment posting, denial management, appeals, patient billing, collections, and financial reporting. We typically increase collections by 20-30% while reducing days in AR."
    },
    {
      question: "How do you ensure quality and accuracy?",
      answer: "Quality is ensured through multiple checkpoints: certified coders review all claims, regular audits catch errors before submission, real-time monitoring tracks key metrics, and continuous training keeps staff current. We maintain 99%+ accuracy rates and provide detailed quality reports. Any errors are immediately corrected with root cause analysis to prevent recurrence."
    },
    {
      question: "What are the cost savings compared to in-house staff?",
      answer: "Practices typically save 30-50% compared to in-house staffing when considering salaries, benefits, training, turnover, and overhead. You eliminate recruitment costs, reduce training time, avoid coverage gaps from sick leave or vacations, and can scale up or down based on patient volume. Most practices see ROI within 60-90 days through improved collections alone."
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
            Get answers to common questions about our healthcare staffing services.
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