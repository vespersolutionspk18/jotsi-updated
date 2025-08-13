"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"per-unit" | "portfolio">("per-unit");

  const packages = [
    {
      name: "Essential",
      description: "Basic support for small landlords",
      perUnitPrice: 89,
      portfolioPrice: 1999,
      units: billingCycle === "per-unit" ? "Per unit/month" : "Up to 30 units",
      features: [
        "Tenant screening and placement",
        "Rent collection",
        "Basic maintenance coordination",
        "Monthly owner statements",
        "Listing management",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Full-service property management",
      perUnitPrice: 129,
      portfolioPrice: 4999,
      units: billingCycle === "per-unit" ? "Per unit/month" : "Up to 75 units",
      features: [
        "Everything in Essential",
        "24/7 emergency response",
        "Property inspections",
        "Vendor management",
        "Legal compliance support",
        "Marketing campaigns",
        "Financial reporting",
        "Dedicated property manager"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Institutional-grade portfolio management",
      perUnitPrice: 179,
      portfolioPrice: 9999,
      units: billingCycle === "per-unit" ? "Per unit/month" : "Unlimited units",
      features: [
        "Everything in Professional",
        "Asset management strategy",
        "Capital improvement planning",
        "Investor reporting",
        "Market analysis",
        "Transaction support",
        "Custom technology integration",
        "Priority support",
        "Quarterly business reviews"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Flexible <span className="text-jotsi">property management</span> pricing
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Whether you own one rental property or manage a large portfolio, 
          our pricing scales to meet your needs.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("per-unit")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "per-unit" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Per Unit
          </button>
          <button
            onClick={() => setBillingCycle("portfolio")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "portfolio" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Portfolio Plans
          </button>
          {billingCycle === "portfolio" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Save up to 30%</span>
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
                  ${billingCycle === "per-unit" ? pkg.perUnitPrice : pkg.portfolioPrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  /month
                </span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                {pkg.units}
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