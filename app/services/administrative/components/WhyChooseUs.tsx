import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Highly Trained Professionals",
      description: "College-educated assistants with specialized training in business administration, project management, and industry-specific tools."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Data Security & Confidentiality",
      description: "NDA agreements, secure communication channels, and strict data protection protocols ensure your information remains confidential."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Instant Productivity",
      description: "Pre-trained on major platforms like Microsoft Office, Google Workspace, Slack, and 50+ business tools. No learning curve."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Scalable Support",
      description: "Start with part-time support and scale to full teams. Add or reduce hours instantly based on your workload."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Assistants",
      description: "Work with the same assistant who learns your preferences, processes, and business. Build a true working relationship."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Global Coverage",
      description: "Assistants available across all time zones. Get support during your business hours or maintain 24/7 operations."
    }
  ];

  const stats = [
    { number: "20hrs", label: "Average time saved weekly" },
    { number: "70%", label: "Cost savings vs. local hire" },
    { number: "48hrs", label: "Quick start time" },
    { number: "98%", label: "Client satisfaction rate" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why businesses <span className="text-jotsi">trust Jotsi</span> for virtual support
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We provide more than just task completion—our assistants become valuable team members 
          who understand your business and contribute to your success.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg">
            <div className="text-jotsi mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-normal tracking-tight mb-2">{benefit.title}</h3>
            <p className="text-stone-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-black rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-jotsi text-3xl md:text-4xl font-normal tracking-tight mb-2">
                {stat.number}
              </p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WhyChooseUs;