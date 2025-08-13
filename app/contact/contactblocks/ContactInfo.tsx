import React from "react";
import { BsEnvelope, BsTelephone, BsClock, BsGlobe } from "react-icons/bs";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <BsEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@jotsi.com", "support@jotsi.com"],
      bgColor: "bg-jotsi"
    },
    {
      icon: <BsTelephone className="text-2xl" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      bgColor: "bg-jotsi"
    },
    {
      icon: <BsClock className="text-2xl" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM EST", "Saturday - Sunday: Closed"],
      bgColor: "bg-jotsi"
    },
    {
      icon: <BsGlobe className="text-2xl" />,
      title: "Global Support",
      details: ["24/7 for existing clients", "15+ countries coverage"],
      bgColor: "bg-jotsi"
    }
  ];

  return (
    <div className="bg-stone-100 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Multiple ways to <span className="text-jotsi">connect</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto">
          Choose the communication method that works best for you. 
          Our team is ready to assist with your inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white rounded-lg p-6 flex flex-col gap-4">
            <div className={`${method.bgColor} p-3 rounded-md w-fit`}>
              <div className="text-black">{method.icon}</div>
            </div>
            <h3 className="text-xl font-normal tracking-tight">{method.title}</h3>
            <div className="flex-grow">
              {method.details.map((detail, idx) => (
                <p key={idx} className="text-stone-600 text-sm mb-1">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-black rounded-lg p-8 md:p-12 text-center">
        <h3 className="text-white text-3xl md:text-4xl font-normal tracking-tighter mb-4">
          Prefer face-to-face meetings?
        </h3>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          We&apos;re happy to meet in person or via video conference. 
          Schedule a meeting at your convenience and let&apos;s discuss how we can help transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-jotsi text-black px-6 py-3 rounded-md hover:bg-jotsi/90 transition-colors">
            Schedule In-Person Meeting
          </button>
          <button className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/20 transition-colors">
            Book Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;