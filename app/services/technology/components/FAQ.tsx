"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you vet your technology professionals?",
      answer: "Our vetting process is comprehensive and rigorous. Candidates go through technical assessments specific to their expertise, live coding sessions, system design interviews, and soft skills evaluation. We verify their portfolio, check references, and assess cultural fit. Only the top 3% of applicants make it through our screening, ensuring you get truly exceptional talent."
    },
    {
      question: "How quickly can developers start working on our project?",
      answer: "We can match you with pre-vetted candidates within 48 hours. After your interview and selection (typically 2-3 days), developers can start immediately or on your preferred date. For urgent needs, we offer same-week placements with developers who are immediately available. The entire process from request to productive work typically takes less than a week."
    },
    {
      question: "What if the developer isn't a good fit?",
      answer: "We offer a 14-day risk-free trial period. If you're not completely satisfied with the developer's performance, we'll either provide a replacement at no additional cost or give you a full refund. After the trial period, we still guarantee smooth transitions with 2-week notice for any changes. Our 95% retention rate shows that mismatches are rare."
    },
    {
      question: "Can developers work in our time zone?",
      answer: "Absolutely. We have talent across all major time zones and can match you with developers who work during your business hours. Many of our developers are flexible and adjust their schedules to overlap with your team. We also have developers specifically available for US, European, and Asian business hours."
    },
    {
      question: "How do you handle IP and confidentiality?",
      answer: "All our developers sign comprehensive NDAs before starting any engagement. We can also work with your specific confidentiality agreements. Intellectual property rights are clearly assigned to you from day one. We use secure communication channels and can work within your security protocols, including VPNs, secure repositories, and compliance requirements."
    },
    {
      question: "What technologies and skills do you cover?",
      answer: "We cover the entire technology spectrum: frontend (React, Angular, Vue), backend (Node.js, Python, Java, .NET), mobile (iOS, Android, React Native, Flutter), DevOps (AWS, Azure, GCP, Kubernetes), data engineering, AI/ML, blockchain, and more. We also have specialists in emerging technologies and can source niche expertise within 72 hours."
    },
    {
      question: "How does communication and collaboration work?",
      answer: "Our developers integrate seamlessly with your existing workflows. They're proficient with all major collaboration tools (Slack, Teams, Jira, GitHub, etc.) and follow your communication protocols. They participate in standups, sprint planning, and code reviews just like in-house team members. All developers have excellent English communication skills."
    },
    {
      question: "Can we hire developers permanently?",
      answer: "Yes, we offer hire-to-permanent options. After working with a developer for a minimum period (typically 6 months), you can transition them to full-time employment with a one-time conversion fee. This try-before-you-hire approach ensures you're making the right long-term decision."
    },
    {
      question: "How does pricing compare to hiring locally?",
      answer: "Our clients typically save 40-60% compared to local hiring when you factor in recruitment costs, benefits, overhead, and time-to-hire. You get senior-level expertise at mid-level local rates, with no recruitment fees, no benefits overhead, and the flexibility to scale up or down as needed."
    },
    {
      question: "Do you provide team augmentation or complete project teams?",
      answer: "Both. We can provide individual developers to augment your existing team or assemble complete project teams including developers, designers, QA engineers, and project managers. For larger engagements, we can even provide technical leadership and architecture guidance. We scale from one developer to 50+ person teams."
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
            Get answers to common questions about our technology staffing services.
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