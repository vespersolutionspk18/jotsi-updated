import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Experienced Professionals",
      description: "Certified paralegals and compliance specialists with 10+ years experience working under attorney supervision."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Confidentiality Guaranteed",
      description: "Strict NDAs, secure document handling, and attorney-client privilege protocols protect your sensitive information."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "24-Hour Turnaround",
      description: "Fast response times on urgent matters. Most document reviews and compliance checks completed within 24 hours."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "60% Cost Reduction",
      description: "Get the same quality legal support at a fraction of traditional law firm costs, without compromising expertise."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Teams",
      description: "Work with the same legal professionals who understand your business, industry, and specific legal needs."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Multi-Jurisdictional",
      description: "Support across all 50 states and international jurisdictions, with expertise in cross-border compliance."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Legal documents processed" },
    { number: "99.8%", label: "Accuracy rate" },
    { number: "24hrs", label: "Average turnaround" },
    { number: "60%", label: "Cost savings" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why businesses <span className="text-jotsi">trust Jotsi</span> for legal support
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We provide enterprise-level legal support with the flexibility and affordability 
          that growing businesses need to stay protected and compliant.
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