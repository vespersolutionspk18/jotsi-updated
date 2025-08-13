import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Industry Expertise",
      description: "Specialized recruiters with deep knowledge across industries. We understand the unique talent needs and challenges of your sector."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Quality Guarantee",
      description: "90-day replacement guarantee on all placements. Rigorous vetting ensures candidates succeed long-term in their roles."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Speed to Hire",
      description: "Average time-to-fill of 21 days vs. industry average of 42 days. Pre-vetted talent pools enable rapid deployment."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Data-Driven Approach",
      description: "Advanced analytics and AI-powered matching ensure better candidate fit, reducing turnover by 40%."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Teams",
      description: "Experienced recruitment teams who become extensions of your HR department, understanding your culture deeply."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Global Reach",
      description: "Access talent worldwide with local expertise. We source from 50+ countries while ensuring compliance."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Successful placements" },
    { number: "21 days", label: "Average time-to-fill" },
    { number: "90%", label: "One-year retention" },
    { number: "50%", label: "Cost per hire savings" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why companies <span className="text-jotsi">trust Jotsi</span> for recruitment
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine advanced technology with human expertise to find not just qualified 
          candidates, but the perfect cultural and strategic fits for your organization.
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