import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Award-Winning Team",
      description: "Our marketers and creatives have won 50+ industry awards and bring expertise from Fortune 500 campaigns."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Performance Guarantee",
      description: "We're confident in our results. If we don't meet agreed KPIs within 6 months, we'll work for free until we do."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Rapid Campaign Launch",
      description: "Get campaigns live in days, not weeks. Our streamlined processes ensure quick market entry without compromising quality."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Data-Driven Strategies",
      description: "Every decision backed by analytics. We test, measure, and optimize continuously to maximize your marketing ROI."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Full-Service Team",
      description: "Strategists, designers, writers, and analysts working together. No need to manage multiple agencies or freelancers."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Omnichannel Expertise",
      description: "Master all digital channels from SEO to social, email to influencer marketing. Integrated campaigns that deliver."
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI increase" },
    { number: "2M+", label: "Leads generated monthly" },
    { number: "150+", label: "Brands transformed" },
    { number: "24/7", label: "Campaign monitoring" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why brands <span className="text-jotsi">choose Jotsi</span> for marketing
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine creative excellence with analytical rigor to deliver marketing that 
          doesn&apos;t just look good—it performs exceptionally.
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