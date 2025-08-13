"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we see results from digital marketing?",
      answer: "Results vary by channel and strategy. PPC campaigns can drive traffic immediately, while SEO typically takes 3-6 months for significant organic growth. Social media engagement improves within weeks, and email marketing shows results from the first campaign. We set realistic timelines and provide weekly updates so you can track progress from day one."
    },
    {
      question: "What makes your approach different from other agencies?",
      answer: "We combine creative excellence with data-driven decision making. Unlike agencies that focus on vanity metrics, we optimize for real business outcomes—leads, sales, and ROI. Our integrated team approach means all channels work together synergistically. Plus, we offer performance guarantees and transparent pricing with no hidden fees or long-term contracts."
    },
    {
      question: "How do you measure marketing success and ROI?",
      answer: "We track comprehensive metrics tailored to your goals: conversion rates, cost per acquisition, lifetime value, ROAS (return on ad spend), organic traffic growth, engagement rates, and ultimately, revenue impact. You'll receive detailed dashboards showing exactly how every marketing dollar performs, with clear attribution across all channels."
    },
    {
      question: "Can you work with our existing marketing team?",
      answer: "Absolutely! We excel at augmenting in-house teams. Whether you need specialized expertise, additional bandwidth, or strategic guidance, we integrate seamlessly with your existing workflows. We can handle specific channels while your team focuses on others, or provide training to upskill your team in new areas."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we work across all industries, we have deep expertise in e-commerce, SaaS, healthcare, financial services, real estate, and professional services. Our team includes specialists who understand industry-specific challenges, regulations, and opportunities. We tailor strategies to your industry's unique customer journey and competitive landscape."
    },
    {
      question: "How involved do we need to be in the marketing process?",
      answer: "As involved as you want to be. Some clients prefer weekly strategy sessions and approval on all content, while others want monthly reports and hands-off execution. We adapt to your preferences, but typically recommend bi-weekly check-ins to ensure alignment and share insights that inform broader business decisions."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we believe in earning your business every month. We offer month-to-month agreements with 30-day notice for cancellation. While marketing success requires consistency (we recommend minimum 6-month commitments for best results), we don't lock you into lengthy contracts. Our 90% retention rate speaks to the value we deliver."
    },
    {
      question: "How do you handle creative and content production?",
      answer: "We have a full in-house creative team handling everything from copywriting to video production. This includes blog posts, social media content, ad creatives, landing pages, email templates, infographics, and video content. All content is original, on-brand, and optimized for both engagement and conversion."
    },
    {
      question: "What's your process for getting started?",
      answer: "We begin with a comprehensive audit of your current marketing, competitor analysis, and goal-setting session. Within the first week, we develop a customized strategy and 90-day action plan. By week two, initial campaigns are live. We maintain momentum with quick wins while building toward long-term sustainable growth."
    },
    {
      question: "Can you manage our entire marketing budget?",
      answer: "Yes, we can manage budgets from $1,000 to $1 million+ per month. We optimize budget allocation across channels based on performance data, ensuring every dollar works as hard as possible. We provide full transparency on media spend, management fees, and ROI, with regular reallocation to maximize results."
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
            Get answers to common questions about our digital marketing services.
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