import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Certified Professionals",
      description: "Our team includes CPAs, EAs, and certified bookkeepers with 10+ years of experience across diverse industries."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Bank-Level Security",
      description: "256-bit encryption, SOC 2 compliance, and strict confidentiality protocols protect your sensitive financial data."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Fast Turnaround",
      description: "Get your books updated daily, financial reports within 24 hours, and tax returns prepared weeks ahead of deadlines."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Proactive Insights",
      description: "Beyond compliance, we identify opportunities for tax savings, cost reduction, and revenue optimization."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Team",
      description: "Work with the same accounting professionals who learn your business inside out, not a rotating cast of strangers."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Technology Agnostic",
      description: "We work with QuickBooks, Xero, NetSuite, SAP, and 50+ other platforms—or help you choose the right one."
    }
  ];

  const stats = [
    { number: "$2.5M+", label: "Tax savings identified annually" },
    { number: "500+", label: "Businesses transformed" },
    { number: "99.9%", label: "Accuracy guarantee" },
    { number: "48hrs", label: "Average onboarding time" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why businesses <span className="text-jotsi">trust Jotsi</span> with their finances
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine deep accounting expertise with modern technology and a genuine commitment 
          to your success. Here&apos;s what sets us apart.
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