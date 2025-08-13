import React from "react";
import { BsAward, BsShieldCheck, BsLightning, BsGraphUp, BsPeople, BsGlobe2 } from "react-icons/bs";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BsAward className="text-3xl" />,
      title: "Healthcare Specialists",
      description: "Certified medical coders, billers, and administrators with deep healthcare experience across all specialties."
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "HIPAA Compliant",
      description: "100% HIPAA-certified staff with rigorous security protocols, ensuring complete patient data protection."
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Quick Implementation",
      description: "Seamless integration with your existing systems. Full operational support within 48-72 hours."
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Revenue Optimization",
      description: "Increase collections by 30% through improved billing practices, reduced denials, and faster reimbursements."
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Dedicated Teams",
      description: "Consistent support from healthcare professionals who understand your practice's specific needs and workflows."
    },
    {
      icon: <BsGlobe2 className="text-3xl" />,
      title: "EHR Expertise",
      description: "Proficient in Epic, Cerner, Athenahealth, and 50+ other EHR/practice management systems."
    }
  ];

  const stats = [
    { number: "< 2%", label: "Claims denial rate" },
    { number: "30%", label: "Revenue increase" },
    { number: "99.9%", label: "HIPAA compliance" },
    { number: "48hrs", label: "Implementation time" }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Why healthcare providers <span className="text-jotsi">choose Jotsi</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          We understand the unique challenges of healthcare administration and provide 
          specialized support that improves both operational efficiency and patient outcomes.
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