"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const packages = [
    {
      name: "Essentials",
      description: "Perfect for startups and small businesses",
      monthlyPrice: 1500,
      annualPrice: 1350,
      features: [
        "SEO optimization & monitoring",
        "Social media management (3 platforms)",
        "Monthly content creation (8 posts)",
        "Basic email marketing",
        "Google Ads management (up to $2k/mo)",
        "Monthly performance reports"
      ],
      highlighted: false
    },
    {
      name: "Growth",
      description: "For businesses ready to scale rapidly",
      monthlyPrice: 3500,
      annualPrice: 3150,
      features: [
        "Everything in Essentials",
        "Advanced SEO & content strategy",
        "Social media (unlimited platforms)",
        "Weekly content creation (20+ posts)",
        "Marketing automation setup",
        "PPC management (unlimited budget)",
        "Video content creation",
        "Influencer outreach"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Dominate",
      description: "Comprehensive marketing for market leaders",
      monthlyPrice: 7500,
      annualPrice: 6750,
      features: [
        "Everything in Growth",
        "Dedicated marketing team",
        "Daily content creation",
        "Full creative services",
        "Advanced analytics & attribution",
        "Conversion rate optimization",
        "PR and media outreach",
        "Custom app development",
        "24/7 campaign management"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Marketing packages that <span className="text-jotsi">deliver ROI</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Choose a package that fits your goals and budget. All plans include strategy, 
          execution, and detailed analytics to track your success.
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
                  ${billingCycle === "monthly" ? pkg.monthlyPrice.toLocaleString() : pkg.annualPrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  /month
                </span>
              </div>
              {billingCycle === "annual" && (
                <p className="text-sm text-yellow-600 mt-1">
                  Billed ${(pkg.annualPrice * 12).toLocaleString()} annually
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