import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "eCommerce Experts",
      description: "Certified professionals with expertise across Amazon, eBay, Shopify, and 20+ platforms. We know what sells and how."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Platform Compliance",
      description: "Stay compliant with marketplace rules and avoid suspensions. We monitor policy changes and ensure adherence."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Quick Scale-Up",
      description: "Launch on new marketplaces in days, not weeks. Our streamlined processes enable rapid expansion."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Data-Driven Growth",
      description: "Advanced analytics identify opportunities, optimize pricing, and maximize profitability across all channels."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Teams",
      description: "Work with eCommerce specialists who understand your products, brand, and growth objectives."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Global Reach",
      description: "Sell internationally with multi-language support, currency management, and cross-border logistics expertise."
    }
  ];

  const stats = [
    { number: "3x", label: "Average sales growth" },
    { number: "99.9%", label: "Order accuracy" },
    { number: "< 2hrs", label: "Response time" },
    { number: "4.8+", label: "Seller ratings" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why sellers <span className="text-jotsi">choose Jotsi</span> for growth
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine eCommerce expertise with operational excellence to help you sell more, 
          work less, and scale profitably across all channels.
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