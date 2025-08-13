"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 499,
      annualPrice: 449,
      features: [
        "Monthly bookkeeping",
        "Bank reconciliation",
        "Financial statements",
        "Expense categorization",
        "Year-end preparation",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      description: "For scaling businesses with complex needs",
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        "Everything in Starter",
        "Weekly bookkeeping",
        "Accounts receivable/payable",
        "Payroll processing (up to 20)",
        "Tax preparation & filing",
        "Monthly video calls",
        "Custom reporting"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive support for established companies",
      monthlyPrice: 2499,
      annualPrice: 2249,
      features: [
        "Everything in Growth",
        "Daily bookkeeping",
        "Unlimited payroll processing",
        "Virtual CFO services",
        "Board reporting packages",
        "Multi-entity support",
        "Dedicated account team",
        "24/7 priority support"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Transparent <span className="text-jotsi">pricing</span> that scales with you
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          No hidden fees, no surprises. Choose the package that fits your business today, 
          and upgrade seamlessly as you grow.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
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
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "annual" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Annual
          </button>
          {billingCycle === "annual" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Save 10%</span>
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
                  ${billingCycle === "monthly" ? pkg.monthlyPrice : pkg.annualPrice}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  /month
                </span>
              </div>
              {billingCycle === "annual" && (
                <p className="text-sm text-yellow-600 mt-1">
                  Billed ${pkg.annualPrice * 12} annually
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