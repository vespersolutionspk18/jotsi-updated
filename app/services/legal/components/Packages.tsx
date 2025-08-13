"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"hourly" | "monthly">("monthly");

  const packages = [
    {
      name: "Essential",
      description: "Basic legal support for small businesses",
      hourlyPrice: 75,
      monthlyPrice: 1500,
      hours: billingCycle === "hourly" ? "As needed" : "20 hours included",
      features: [
        "Contract review and drafting",
        "Basic compliance monitoring",
        "Document preparation",
        "Legal research support",
        "Email support",
        "48-hour response time"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Comprehensive legal support for growing companies",
      hourlyPrice: 65,
      monthlyPrice: 3500,
      hours: billingCycle === "hourly" ? "Volume discount" : "60 hours included",
      features: [
        "Everything in Essential",
        "Litigation support services",
        "Regulatory compliance management",
        "Employment law support",
        "Priority 24-hour response",
        "Dedicated paralegal team",
        "Monthly compliance reviews",
        "Legal process automation"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Full legal department support",
      hourlyPrice: 55,
      monthlyPrice: 7500,
      hours: billingCycle === "hourly" ? "Best rates" : "Unlimited hours",
      features: [
        "Everything in Professional",
        "Dedicated legal team",
        "Same-day response",
        "Board meeting support",
        "M&A transaction support",
        "Multi-state compliance",
        "Risk management programs",
        "Custom legal tech solutions",
        "Quarterly strategy sessions"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Flexible <span className="text-jotsi">legal support</span> pricing
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Choose hourly support for occasional needs or monthly plans for comprehensive 
          legal coverage. All plans include access to our full range of legal services.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("hourly")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "hourly" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Hourly
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "monthly" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Monthly Plans
          </button>
          {billingCycle === "monthly" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Save up to 40%</span>
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
                  ${billingCycle === "hourly" ? pkg.hourlyPrice : pkg.monthlyPrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  {billingCycle === "hourly" ? "/hour" : "/month"}
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