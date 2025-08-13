import React from "react";
import { Button } from "@/components/ui/button";
import { BsCheckCircleFill } from "react-icons/bs";

const Packages = () => {
  const packages = [
    {
      name: "Marketplace Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for launching or optimizing a single marketplace presence",
      features: [
        "1 marketplace platform",
        "Up to 50 product listings",
        "Basic inventory management",
        "Order processing (up to 500/month)",
        "Customer service support",
        "Monthly performance report",
        "Email support"
      ],
      highlight: false
    },
    {
      name: "Multi-Channel Growth",
      price: "$2,999",
      period: "/month",
      description: "Scale across multiple platforms with centralized management",
      features: [
        "Up to 5 marketplace platforms",
        "Up to 500 product listings",
        "Advanced inventory sync",
        "Unlimited order processing",
        "Priority customer service",
        "Review management",
        "Weekly analytics reports",
        "Pricing optimization",
        "Dedicated account manager"
      ],
      highlight: true
    },
    {
      name: "Enterprise Operations",
      price: "Custom",
      period: "",
      description: "Complete eCommerce operations for established brands",
      features: [
        "Unlimited marketplaces",
        "Unlimited product listings",
        "Full inventory management",
        "Warehouse integration",
        "24/7 customer support team",
        "Complete review management",
        "Real-time analytics dashboard",
        "Dynamic pricing strategies",
        "Dedicated operations team",
        "International expansion support"
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-stone-50 p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Choose your <span className="text-jotsi">growth package</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto">
          Flexible plans that scale with your business. Start small and upgrade as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-xl p-8 ${
              pkg.highlight
                ? "bg-black text-white scale-105 shadow-2xl"
                : "bg-white"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-jotsi text-black px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-2xl font-normal tracking-tight mb-2 ${
                pkg.highlight ? "text-white" : "text-black"
              }`}>
                {pkg.name}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className={`text-4xl font-normal tracking-tight ${
                  pkg.highlight ? "text-jotsi" : "text-black"
                }`}>
                  {pkg.price}
                </span>
                <span className={`ml-2 ${
                  pkg.highlight ? "text-white/60" : "text-stone-600"
                }`}>
                  {pkg.period}
                </span>
              </div>
              <p className={`text-sm ${
                pkg.highlight ? "text-white/80" : "text-stone-600"
              }`}>
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <BsCheckCircleFill className={`text-lg flex-shrink-0 mt-0.5 ${
                    pkg.highlight ? "text-jotsi" : "text-green-500"
                  }`} />
                  <span className={`text-sm ${
                    pkg.highlight ? "text-white/90" : "text-stone-700"
                  }`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant={pkg.highlight ? "yellow" : "outline"}
              size="lg"
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-stone-600 mb-4">
          All packages include: Platform onboarding • Technical setup • Training & documentation
        </p>
        <p className="text-sm text-stone-500">
          No setup fees • Month-to-month contracts • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Packages;