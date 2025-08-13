"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"per-provider" | "practice">("practice");

  const packages = [
    {
      name: "Solo Practice",
      description: "Perfect for individual practitioners",
      perProviderPrice: 999,
      practicePrice: 2999,
      size: billingCycle === "per-provider" ? "1-2 providers" : "Up to 5 providers",
      features: [
        "Medical billing and coding",
        "Appointment scheduling",
        "Insurance verification",
        "Basic EHR support",
        "Patient communications",
        "Monthly reporting"
      ],
      highlighted: false
    },
    {
      name: "Group Practice",
      description: "Comprehensive support for multi-provider practices",
      perProviderPrice: 799,
      practicePrice: 7999,
      size: billingCycle === "per-provider" ? "3-10 providers" : "Up to 20 providers",
      features: [
        "Everything in Solo Practice",
        "Prior authorization support",
        "Denial management",
        "Revenue cycle optimization",
        "Quality measure reporting",
        "Dedicated account manager",
        "Telehealth support",
        "Custom workflows"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Healthcare System",
      description: "Enterprise solutions for hospitals and clinics",
      perProviderPrice: 599,
      practicePrice: 19999,
      size: billingCycle === "per-provider" ? "10+ providers" : "Unlimited providers",
      features: [
        "Everything in Group Practice",
        "Multi-location support",
        "Specialty-specific teams",
        "Clinical documentation improvement",
        "Compliance monitoring",
        "24/7 support coverage",
        "Custom integrations",
        "Analytics dashboard",
        "On-site training available"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Scalable <span className="text-jotsi">healthcare staffing</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          From solo practitioners to large healthcare systems, our flexible pricing 
          scales with your practice size and needs.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("per-provider")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "per-provider" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Per Provider
          </button>
          <button
            onClick={() => setBillingCycle("practice")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "practice" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Practice Plans
          </button>
          {billingCycle === "practice" && (
            <span className="text-yellow-600 text-sm font-medium px-2">Better Value</span>
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
                  ${billingCycle === "per-provider" ? pkg.perProviderPrice.toLocaleString() : pkg.practicePrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  /month
                </span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                {pkg.size}
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