"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"parttime" | "fulltime">("parttime");

  const packages = [
    {
      name: "Basic",
      description: "Light support for individuals and small teams",
      parttimePrice: 299,
      fulltimePrice: 999,
      hours: billingCycle === "parttime" ? "10 hours/month" : "40 hours/week",
      features: [
        "Dedicated virtual assistant",
        "Email and calendar management",
        "Basic administrative tasks",
        "Data entry and organization",
        "Standard business hours",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Comprehensive support for growing businesses",
      parttimePrice: 599,
      fulltimePrice: 1999,
      hours: billingCycle === "parttime" ? "20 hours/month" : "40 hours/week",
      features: [
        "Senior-level assistant",
        "Executive support services",
        "Project management assistance",
        "Customer support handling",
        "Research and reporting",
        "Priority response time",
        "Phone and video support"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Executive",
      description: "Premium support for executives and enterprises",
      parttimePrice: 1299,
      fulltimePrice: 3999,
      hours: billingCycle === "parttime" ? "40 hours/month" : "Dedicated team",
      features: [
        "Executive assistant team",
        "24/7 availability",
        "Complex project coordination",
        "Board meeting support",
        "Travel planning and booking",
        "Personal task management",
        "Backup assistant coverage",
        "Custom workflow development"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Flexible <span className="text-jotsi">pricing</span> for every need
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Choose between part-time support for specific tasks or full-time assistants 
          for comprehensive administrative coverage.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("parttime")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "parttime" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Part-Time
          </button>
          <button
            onClick={() => setBillingCycle("fulltime")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "fulltime" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Full-Time
          </button>
          {billingCycle === "fulltime" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Best Value</span>
          )}
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-lg p-8 ${
              pkg.highlighted 
                ? "bg-black text-white border-2 border-jotsi scale-105" 
                : "bg-stone-50 border border-stone-200"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-jotsi text-black px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-2xl font-normal tracking-tight mb-2 ${
                pkg.highlighted ? "text-white" : "text-black"
              }`}>
                {pkg.name}
              </h3>
              <p className={`text-sm ${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                {pkg.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-normal tracking-tight ${
                  pkg.highlighted ? "text-white" : "text-black"
                }`}>
                  ${billingCycle === "parttime" ? pkg.parttimePrice : pkg.fulltimePrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  /month
                </span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                {pkg.hours}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <BsCheckCircleFill className={`text-jotsi mt-0.5 flex-shrink-0`} />
                  <span className={`text-sm ${pkg.highlighted ? "text-white/90" : "text-stone-700"}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              variant={pkg.highlighted ? "yellow" : "outline"} 
              size="lg" 
              className="w-full"
            >
              Get Started
              <BsArrowRight className="ml-2" />
            </Button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Packages;