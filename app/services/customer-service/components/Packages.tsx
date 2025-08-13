"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";

const Packages = () => {
  const [billingCycle, setBillingCycle] = useState<"per-agent" | "dedicated">("per-agent");

  const packages = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      perAgentPrice: 1200,
      dedicatedPrice: 8000,
      minAgents: billingCycle === "per-agent" ? "3 agents minimum" : "5-agent team",
      features: [
        "Inbound call handling",
        "Email and chat support",
        "Business hours coverage",
        "Basic CRM integration",
        "Weekly reporting",
        "Quality monitoring"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "For growing businesses with higher volumes",
      perAgentPrice: 1600,
      dedicatedPrice: 15000,
      minAgents: billingCycle === "per-agent" ? "5 agents minimum" : "10-agent team",
      features: [
        "Everything in Starter",
        "24/7 support coverage",
        "Outbound calling",
        "Advanced CRM integration",
        "Real-time analytics",
        "Dedicated team lead",
        "Custom scripts and workflows",
        "Monthly business reviews"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete call center solutions at scale",
      perAgentPrice: 2000,
      dedicatedPrice: 30000,
      minAgents: billingCycle === "per-agent" ? "10 agents minimum" : "20+ agent team",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom training programs",
        "Omnichannel support",
        "AI-powered insights",
        "Priority escalation",
        "SLA guarantees",
        "White-label options",
        "On-site visits quarterly"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Scalable <span className="text-jotsi">pricing</span> for every business
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto mb-8">
          Whether you need a few agents or an entire call center, our flexible pricing 
          scales with your customer service needs.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 bg-stone-100 p-1 rounded-full">
          <button
            onClick={() => setBillingCycle("per-agent")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "per-agent" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Per Agent
          </button>
          <button
            onClick={() => setBillingCycle("dedicated")}
            className={`px-6 py-2 rounded-full transition-all ${
              billingCycle === "dedicated" 
                ? "bg-black text-white" 
                : "text-stone-600 hover:text-black"
            }`}
          >
            Dedicated Team
          </button>
          {billingCycle === "dedicated" && (
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
                  ${billingCycle === "per-agent" ? pkg.perAgentPrice.toLocaleString() : pkg.dedicatedPrice.toLocaleString()}
                </span>
                <span className={`${pkg.highlighted ? "text-white/70" : "text-stone-600"}`}>
                  {billingCycle === "per-agent" ? "/agent/month" : "/month"}
                </span>
              </div>
              <p className="text-sm text-yellow-600 mt-1">
                {pkg.minAgents}
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