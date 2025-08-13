import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Real Estate Experts",
      description: "Licensed professionals with deep knowledge of local markets, regulations, and industry best practices across residential and commercial sectors."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Compliance Assured",
      description: "Stay compliant with fair housing laws, local regulations, and industry standards. We handle all documentation and legal requirements."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Rapid Response",
      description: "24/7 emergency support and same-day response for urgent matters. Your properties and tenants are always covered."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Revenue Optimization",
      description: "Increase NOI by 15-20% through strategic pricing, reduced vacancy, and operational efficiency improvements."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Teams",
      description: "Work with the same property specialists who understand your portfolio, market, and investment goals."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Technology Powered",
      description: "Proficient in Yardi, AppFolio, Buildium, MRI, and all major property management platforms."
    }
  ];

  const stats = [
    { number: "95%", label: "Average occupancy rate" },
    { number: "< 14 days", label: "Average days to lease" },
    { number: "40%", label: "Cost reduction" },
    { number: "4.8/5", label: "Tenant satisfaction" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why property owners <span className="text-jotsi">choose Jotsi</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine real estate expertise with operational excellence to maximize your 
          property performance while minimizing your management burden.
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