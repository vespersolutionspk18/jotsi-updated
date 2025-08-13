import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Top 3% Talent",
      description: "Rigorous vetting process including technical assessments, code reviews, and cultural fit evaluations ensures only elite professionals."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Risk-Free Trial",
      description: "14-day trial period with full refund if not satisfied. We're confident in our talent matching and stand behind every placement."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "48-Hour Matching",
      description: "Get matched with pre-vetted candidates within 48 hours. Start interviewing immediately and onboard within a week."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Scale Flexibly",
      description: "Ramp up or down based on project needs. No long-term commitments, just the talent you need when you need it."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Success Team",
      description: "Account managers ensure smooth integration, handle administrative tasks, and provide ongoing support throughout engagement."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Global Talent Pool",
      description: "Access developers across time zones for 24/7 productivity. All with excellent English and collaboration skills."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Vetted tech professionals" },
    { number: "95%", label: "Client retention rate" },
    { number: "48hrs", label: "Average time to match" },
    { number: "60%", label: "Cost savings vs. local" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why companies <span className="text-jotsi">choose Jotsi</span> for tech talent
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We combine rigorous vetting with seamless integration to deliver tech professionals 
          who become true extensions of your team, not just contractors.
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