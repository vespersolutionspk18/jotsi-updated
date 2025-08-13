import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Industry Experts",
      description: "Our estimators have 15+ years of field experience across residential, commercial, and industrial construction projects."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Accuracy Guarantee",
      description: "98% accuracy rate with detailed documentation. We stand behind our estimates and provide revision support if needed."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "24-48 Hour Delivery",
      description: "Fast turnaround without compromising quality. Rush service available for urgent bids with same-day options."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Win More Bids",
      description: "Our clients report 30% higher win rates with our detailed, professional estimates that instill confidence."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Support",
      description: "Work with the same estimating team who understands your business, bidding style, and project preferences."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "All Software Platforms",
      description: "Proficient in PlanSwift, Bluebeam, On-Screen Takeoff, ProEst, and 20+ other estimating platforms."
    }
  ];

  const stats = [
    { number: "$500M+", label: "Projects estimated annually" },
    { number: "10,000+", label: "Estimates delivered" },
    { number: "98%", label: "Accuracy rate" },
    { number: "24hrs", label: "Average turnaround" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why contractors <span className="text-jotsi">choose Jotsi</span> for estimating
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine field experience with cutting-edge technology to deliver estimates that 
          win bids and protect margins. Here&apos;s what makes us different.
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