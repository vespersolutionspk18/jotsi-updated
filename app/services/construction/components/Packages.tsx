"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"project" | "monthly">("project");

  const packages = [
    {
      name: "Basic",
      description: "Essential estimating for smaller projects",
      projectPrice: 299,
      monthlyPrice: 999,
      features: [
        "Material takeoffs",
        "Labor calculations",
        "Basic cost estimate",
        "PDF report delivery",
        "48-hour turnaround",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Comprehensive estimates for serious contractors",
      projectPrice: 599,
      monthlyPrice: 2499,
      features: [
        "Everything in Basic",
        "Detailed line-item breakdown",
        "Subcontractor pricing",
        "Value engineering options",
        "24-hour turnaround",
        "Change order support",
        "Phone support"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Full-service estimating and project support",
      projectPrice: 1299,
      monthlyPrice: 5999,
      features: [
        "Everything in Professional",
        "Dedicated estimating team",
        "Same-day rush service",
        "Bid strategy consultation",
        "Project scheduling",
        "Unlimited revisions",
        "On-site support available",
        "Custom reporting"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Flexible <span className="text-jotsi">pricing</span> for every contractor
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Pay per project or choose a monthly plan for unlimited estimates. 
          No setup fees, no contracts, cancel anytime.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("project")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "project" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Per Project
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "monthly" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Monthly Unlimited
          </button>
          {billingCycle === "monthly" && (
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
                  ${billingCycle === "project" ? pkg.projectPrice : pkg.monthlyPrice}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  {billingCycle === "project" ? "/project" : "/month"}
                </span>
              </div>
              {billingCycle === "monthly" && (
                <p className="text-sm text-yellow-600 mt-1">
                  Unlimited estimates included
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