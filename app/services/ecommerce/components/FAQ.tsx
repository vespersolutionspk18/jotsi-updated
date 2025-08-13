"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which eCommerce platforms do you support?",
      answer: "We support all major platforms including Amazon (Seller Central & Vendor Central), eBay, Walmart Marketplace, Shopify, WooCommerce, BigCommerce, Etsy, Facebook Marketplace, Google Shopping, and 20+ other platforms. We also handle platform-specific requirements like Amazon FBA, eBay Managed Payments, and Walmart WFS. Our team stays updated with platform changes and new marketplace opportunities."
    },
    {
      question: "How quickly can you scale our operations?",
      answer: "Most clients see significant improvements within 30 days. We can onboard your existing catalog within 48 hours, optimize listings within a week, and expand to new marketplaces within 2 weeks. Our proven processes and experienced teams enable rapid scaling - many clients triple their sales velocity within 90 days through improved operations and multi-channel expansion."
    },
    {
      question: "Do you handle international selling?",
      answer: "Yes, we specialize in international expansion. We manage listings in multiple languages, handle currency conversions, coordinate international shipping, manage customs documentation, and ensure compliance with international regulations. We've helped clients expand to 30+ countries with localized listings, pricing strategies, and customer service in native languages."
    },
    {
      question: "How do you handle inventory across multiple channels?",
      answer: "We use advanced inventory management systems that sync stock levels in real-time across all platforms. This prevents overselling, automatically adjusts quantities after each sale, manages buffer stock, handles pre-orders and backorders, and provides forecasting for reorder points. Our system integrates with your warehouse or 3PL for seamless operations."
    },
    {
      question: "What about product photography and content?",
      answer: "We provide complete content services including product photography coordination, image editing and enhancement, infographics and lifestyle images, A+ Content and Enhanced Brand Content, video creation for listings, 360-degree product views, and size charts/comparison tables. Our content meets each platform's specific requirements while maintaining brand consistency."
    },
    {
      question: "How do you optimize for search and conversions?",
      answer: "Our optimization process includes comprehensive keyword research, title and bullet point optimization, backend search term management, category selection, competitive pricing analysis, and A/B testing. We continuously monitor performance metrics and adjust strategies based on data. Most clients see 40-60% improvement in conversion rates within 60 days."
    },
    {
      question: "Can you handle our customer service?",
      answer: "Absolutely. We provide comprehensive customer service including pre-sale inquiries, order status updates, returns and refunds processing, product Q&A management, review responses, and dispute resolution. Our team maintains response times under 2 hours during business hours and handles escalations professionally to maintain your reputation."
    },
    {
      question: "What reporting and analytics do you provide?",
      answer: "You'll receive detailed analytics including daily sales dashboards, channel performance comparisons, profit margin analysis, inventory turnover reports, customer behavior insights, competitive intelligence, and custom KPI tracking. Access real-time data through our client portal and receive weekly summaries with actionable recommendations for growth."
    },
    {
      question: "Do you handle promotional campaigns and advertising?",
      answer: "Yes, we manage all promotional activities including Amazon PPC and DSP campaigns, eBay Promoted Listings, Google Shopping campaigns, social media advertising, email marketing, seasonal promotions, and flash sales. We optimize ad spend for maximum ROI and coordinate promotions across channels for maximum impact."
    },
    {
      question: "What happens if a marketplace suspends our account?",
      answer: "We have extensive experience with account reinstatement. Our team monitors account health metrics to prevent issues, maintains compliance with all platform policies, responds immediately to performance notifications, prepares and submits appeals when needed, and implements corrective action plans. We maintain a 95% success rate in account reinstatements."
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
            Get answers to common questions about our eCommerce operations services.
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