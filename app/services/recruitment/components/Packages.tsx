"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"per-hire" | "retained">("per-hire");

  const packages = [
    {
      name: "Essential",
      description: "Perfect for occasional hiring needs",
      perHirePrice: "18%",
      retainedPrice: 2500,
      priceNote: billingCycle === "per-hire" ? "of annual salary" : "per month",
      features: [
        "Job posting and advertising",
        "Resume screening",
        "Initial phone screenings",
        "3 qualified candidates per role",
        "30-day guarantee",
        "Basic background checks"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "For companies with regular hiring needs",
      perHirePrice: "15%",
      retainedPrice: 5000,
      priceNote: billingCycle === "per-hire" ? "of annual salary" : "per month + 10% success fee",
      features: [
        "Everything in Essential",
        "Unlimited candidates per role",
        "Skills assessments",
        "Reference checking",
        "90-day guarantee",
        "Salary negotiation support",
        "Onboarding assistance",
        "Dedicated recruitment team"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete recruitment & HR partnership",
      perHirePrice: "12%",
      retainedPrice: 10000,
      priceNote: billingCycle === "per-hire" ? "of annual salary" : "per month + custom success fee",
      features: [
        "Everything in Professional",
        "Executive search services",
        "Full HR management",
        "Employer branding",
        "Campus recruitment",
        "Diversity hiring programs",
        "180-day guarantee",
        "Custom reporting & analytics",
        "Quarterly business reviews"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Flexible <span className="text-jotsi">pricing models</span> for every need
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Choose between contingency-based pricing for individual hires or retained 
          services for ongoing recruitment support.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("per-hire")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "per-hire" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Per Hire
          </button>
          <button
            onClick={() => setBillingCycle("retained")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "retained" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Retained Service
          </button>
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
                  {billingCycle === "per-hire" ? pkg.perHirePrice : `$${pkg.retainedPrice.toLocaleString()}`}
                </span>
              </div>
              <p className={`text-sm mt-1 ${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                {pkg.priceNote}
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