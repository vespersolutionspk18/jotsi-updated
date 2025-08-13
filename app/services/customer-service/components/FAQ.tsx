"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we launch a customer service team?",
      answer: "We can have a basic team operational within 48-72 hours for immediate needs. For full deployment with custom training and integration, the typical timeline is 1-2 weeks. This includes agent selection, training on your products/services, system setup, and quality assurance processes. We maintain a pool of pre-trained agents ready for rapid deployment."
    },
    {
      question: "What languages do your agents speak?",
      answer: "We offer support in over 20 languages with native or near-native speakers. Primary languages include English, Spanish, French, German, Portuguese, Italian, Dutch, and various Asian languages. All agents are tested for language proficiency and cultural understanding. We can build dedicated teams for specific language requirements within your customer base."
    },
    {
      question: "How do you ensure quality and consistency?",
      answer: "Quality is maintained through multiple layers: comprehensive initial training, ongoing coaching, real-time monitoring, and regular quality audits. We record calls for training purposes, use speech analytics to identify improvement areas, and maintain scorecards for each agent. Team leads review performance daily, and we provide you with detailed quality reports and recordings for transparency."
    },
    {
      question: "Can agents work with our existing systems?",
      answer: "Yes, our agents are trained on all major CRM and helpdesk platforms including Salesforce, Zendesk, HubSpot, Freshdesk, and custom systems. We provide secure remote access to your tools or can work with API integrations. Training on your specific systems is included in onboarding, and we document all processes for consistency."
    },
    {
      question: "How do you handle peak seasons and volume fluctuations?",
      answer: "We're built for flexibility. Our model allows rapid scaling up or down based on your needs. For predictable peaks (holidays, product launches), we pre-train additional agents. For unexpected spikes, we can deploy backup teams within hours. You only pay for the capacity you use, with no penalties for scaling adjustments."
    },
    {
      question: "What metrics and reporting do you provide?",
      answer: "You receive comprehensive real-time and historical reporting including: call volume, average handle time, first-call resolution, customer satisfaction scores, agent performance metrics, and custom KPIs specific to your business. Access dashboards 24/7, receive automated daily/weekly reports, and join monthly business reviews to discuss performance and improvements."
    },
    {
      question: "How do you protect customer data and ensure compliance?",
      answer: "Data security is paramount. All agents sign strict NDAs and undergo security training. We're PCI DSS compliant for payment processing, GDPR compliant for data protection, and HIPAA compliant for healthcare clients. We use encrypted connections, secure workstations, and can implement additional security measures based on your requirements."
    },
    {
      question: "What if we're not satisfied with an agent's performance?",
      answer: "We guarantee satisfaction with our service. If an agent isn't meeting expectations despite coaching, we'll replace them immediately at no cost. Our team leads monitor performance continuously and proactively address issues before they impact service. We also maintain backup agents familiar with your account for seamless transitions."
    },
    {
      question: "Can you handle technical support, not just basic customer service?",
      answer: "Absolutely. We have specialized technical support teams with IT backgrounds who can handle Tier 1 and Tier 2 support. They're trained in troubleshooting, remote diagnostics, and technical communication. For complex issues, we establish clear escalation paths to your in-house technical team while handling all initial diagnostics and common resolutions."
    },
    {
      question: "How does pricing compare to building an in-house team?",
      answer: "Our services typically cost 40-60% less than in-house teams when you factor in salaries, benefits, training, management overhead, technology, and facilities. There's no recruitment costs, no downtime for sick days or turnover, and you can scale instantly. Plus, you get 24/7 coverage and multilingual support that would be extremely expensive to build internally."
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
            Get answers to common questions about our customer service solutions.
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