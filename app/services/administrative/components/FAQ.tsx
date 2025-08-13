"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What tasks can a virtual assistant handle?",
      answer: "Virtual assistants can handle a wide range of tasks including email management, calendar scheduling, data entry, research, travel planning, customer support, social media management, bookkeeping support, project coordination, and personal tasks. Essentially, any task that can be done remotely on a computer can be delegated to a VA. We match you with assistants who have experience in your specific needs."
    },
    {
      question: "How quickly can I get started with a virtual assistant?",
      answer: "You can have a virtual assistant working for you within 48 hours. The process is simple: tell us your needs, we match you with pre-vetted candidates, you interview and select your preferred assistant, and they can start immediately. We handle all the onboarding logistics, provide initial training on your preferences, and ensure a smooth transition."
    },
    {
      question: "Are virtual assistants available in my time zone?",
      answer: "Yes, we have assistants available across all time zones globally. Whether you need someone working during your business hours, providing after-hours coverage, or maintaining 24/7 operations, we can accommodate. Many of our assistants are also flexible and willing to adjust their schedules to match your needs perfectly."
    },
    {
      question: "How do you ensure quality and reliability?",
      answer: "All our virtual assistants go through rigorous screening including skills assessments, background checks, and reference verification. They receive ongoing training and performance monitoring. We maintain quality through regular check-ins, performance reviews, and client feedback. If an assistant doesn't meet expectations, we provide immediate replacement at no additional cost."
    },
    {
      question: "How does communication with my assistant work?",
      answer: "Communication is seamless through your preferred channels - email, Slack, Microsoft Teams, Zoom, or phone. Your assistant integrates with your existing communication tools and follows your protocols. You can communicate as frequently as needed, from constant collaboration to daily check-ins or weekly updates, depending on your preference."
    },
    {
      question: "Can I hire multiple virtual assistants?",
      answer: "Absolutely! Many clients start with one assistant and expand to a team as they experience the benefits. You can have specialized assistants for different functions - an executive assistant for high-level support, a customer service VA for client interactions, and an administrative VA for general tasks. We help coordinate teams for maximum efficiency."
    },
    {
      question: "What about data security and confidentiality?",
      answer: "Security is our top priority. All assistants sign comprehensive NDAs before starting work. We use secure communication channels, encrypted file sharing, and can work within your existing security protocols. Assistants can use VPNs, access your systems through secure remote desktop connections, and follow any compliance requirements you have."
    },
    {
      question: "How does pricing work compared to hiring locally?",
      answer: "You save 60-70% compared to hiring locally when you factor in salary, benefits, office space, equipment, and training costs. With our virtual assistants, you pay only for productive hours with no overhead. There's no paid time off, sick leave, or benefits to manage. You can scale up or down instantly based on your needs."
    },
    {
      question: "Can virtual assistants handle industry-specific tasks?",
      answer: "Yes, we have assistants with experience across various industries including real estate, healthcare, legal, e-commerce, finance, and technology. They understand industry-specific terminology, software, and processes. During matching, we ensure your assistant has relevant background or provide specialized training for your industry."
    },
    {
      question: "What if I need coverage when my assistant is unavailable?",
      answer: "We provide backup coverage to ensure continuity. For critical roles, we can assign a backup assistant who's briefed on your processes. For full-time assistants, we ensure coverage during vacations or sick days. You'll never experience disruption in support, maintaining consistent productivity."
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
            Get answers to common questions about our virtual assistant services.
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