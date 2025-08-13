import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Trained Professionals",
      description: "Agents undergo intensive training in communication, product knowledge, and your specific protocols before handling any customer interaction."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Quality Assurance",
      description: "Regular monitoring, coaching, and feedback loops ensure consistent service quality. We maintain 95%+ customer satisfaction scores."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Quick Deployment",
      description: "Launch a full customer service operation in days, not months. We handle recruitment, training, and infrastructure setup."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Performance Metrics",
      description: "Real-time dashboards track KPIs like response time, resolution rate, CSAT, and NPS. Data-driven insights improve performance."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Scalable Teams",
      description: "Flex capacity up or down based on demand. Handle seasonal peaks, product launches, or growth without missing a beat."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "Multilingual Support",
      description: "Native speakers in English, Spanish, French, and 20+ languages ensure clear communication with diverse customer bases."
    }
  ];

  const stats = [
    { number: "< 30s", label: "Average response time" },
    { number: "95%", label: "Customer satisfaction" },
    { number: "85%", label: "First-call resolution" },
    { number: "50%", label: "Cost reduction" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why brands <span className="text-jotsi">trust Jotsi</span> for customer service
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We transform customer service from a cost center into a competitive advantage 
          with teams that genuinely care about your customers&apos; success.
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