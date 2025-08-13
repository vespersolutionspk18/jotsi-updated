"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does the recruitment process typically take?",
      answer: "Our average time-to-fill is 21 days from job posting to offer acceptance, significantly faster than the industry average of 42 days. For executive positions, expect 30-45 days. Volume hiring can be completed in as little as 2 weeks with our streamlined processes. Rush services are available for urgent needs, with qualified candidates presented within 48-72 hours."
    },
    {
      question: "What industries and roles do you specialize in?",
      answer: "We recruit across all industries with specialized teams for technology, healthcare, finance, manufacturing, retail, and professional services. We fill positions from entry-level to C-suite, including technical roles, sales, operations, administration, and executive leadership. Our recruiters have industry-specific expertise and maintain extensive networks in their specializations."
    },
    {
      question: "What's included in your screening process?",
      answer: "Our comprehensive screening includes resume review, initial phone screening, skills assessments relevant to the role, behavioral interviews, technical evaluations where applicable, reference checks (minimum 3), background verification, and cultural fit assessment. For executive roles, we add psychometric testing, leadership assessments, and extensive background investigations."
    },
    {
      question: "How does your guarantee work?",
      answer: "We offer a replacement guarantee that varies by service level: 30 days for Essential, 90 days for Professional, and 180 days for Enterprise packages. If a placed candidate leaves or is terminated within the guarantee period, we'll find a replacement at no additional cost. This demonstrates our confidence in our screening process and commitment to long-term success."
    },
    {
      question: "Can you handle confidential searches?",
      answer: "Absolutely. We regularly conduct confidential searches for sensitive positions, including C-suite replacements, competitive hires, and reorganization-related roles. We maintain strict confidentiality protocols, use blind postings when needed, and can work through NDAs. Our executive search team specializes in discreet, professional handling of sensitive recruitments."
    },
    {
      question: "How do you ensure diversity in hiring?",
      answer: "Diversity hiring is built into our process. We use bias-free job descriptions, source from diverse talent pools, partner with diversity-focused organizations, and track diversity metrics throughout the funnel. Our recruiters are trained in unconscious bias recognition. We help clients build inclusive hiring practices that attract diverse candidates and create equitable selection processes."
    },
    {
      question: "What's the difference between contingency and retained search?",
      answer: "Contingency search means you pay only when we successfully place a candidate (typically 15-20% of annual salary). It's ideal for standard positions with multiple potential candidates. Retained search involves an upfront fee with the remainder due upon placement, best for executive or hard-to-fill roles requiring dedicated resources. Retained searches receive priority attention and deeper market research."
    },
    {
      question: "Do you provide HR services beyond recruitment?",
      answer: "Yes, we offer comprehensive HR management including policy development, employee handbooks, performance management systems, compensation planning, benefits administration, compliance support, training and development, and employee relations. We can serve as your complete outsourced HR department or supplement your existing team with specific expertise."
    },
    {
      question: "How do you source candidates?",
      answer: "We use multi-channel sourcing including our extensive database of pre-vetted candidates, professional networks and referrals, job boards and career sites, social media recruiting, university partnerships, professional associations, passive candidate outreach, and AI-powered talent matching. Our average role receives 200+ qualified applications through our targeted approach."
    },
    {
      question: "What makes your recruitment process faster?",
      answer: "Speed comes from our streamlined process: pre-vetted talent pools ready for immediate deployment, dedicated recruitment teams preventing bottlenecks, automated initial screening saving days, parallel processing of multiple candidates, established relationships for quick reference checks, and technology that accelerates every step. We also maintain clear communication to prevent delays in decision-making."
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
            Get answers to common questions about our recruitment and HR services.
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