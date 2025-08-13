"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"hourly" | "monthly">("monthly");

  const packages = [
    {
      name: "Starter",
      description: "Perfect for short-term projects and specific tasks",
      hourlyPrice: 45,
      monthlyPrice: 6000,
      features: [
        "Junior to mid-level developers",
        "Minimum 20 hours/week",
        "Standard support hours",
        "Weekly status reports",
        "Slack/email communication",
        "Basic project management"
      ],
      highlighted: false
    },
    {
      name: "Scale",
      description: "For growing teams needing consistent expertise",
      hourlyPrice: 75,
      monthlyPrice: 10000,
      features: [
        "Senior developers & architects",
        "Full-time dedication (40hrs/week)",
        "Priority support & escalation",
        "Daily standups included",
        "Direct integration with your team",
        "Technical leadership",
        "Code review & mentoring"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete tech teams for enterprise projects",
      hourlyPrice: 125,
      monthlyPrice: 18000,
      features: [
        "Full team composition",
        "Tech leads & architects",
        "24/7 support coverage",
        "Dedicated account manager",
        "Custom SLAs",
        "On-site visits available",
        "Strategic consulting",
        "Compliance & security clearance"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Transparent <span className="text-jotsi">pricing</span> for every need
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Whether you need one developer or an entire team, our flexible pricing 
          scales with your requirements. No hidden fees, no surprises.
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
            Monthly
          </button>
          {billingCycle === "monthly" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Save 20%</span>
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
                <span className="text-sm">From</span>
                <span className={`text-4xl font-normal tracking-tight ${
                  pkg.highlighted ? "text-white" : "text-black"
                }`}>
                  ${billingCycle === "hourly" ? pkg.hourlyPrice : pkg.monthlyPrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  {billingCycle === "hourly" ? "/hour" : "/month"}
                </span>
              </div>
              {billingCycle === "monthly" && (
                <p className="text-sm text-yellow-600 mt-1">
                  Per developer, full-time
                </p>
              )}
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