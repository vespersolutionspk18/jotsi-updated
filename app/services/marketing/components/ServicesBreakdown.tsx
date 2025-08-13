"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "seo",
    title: "SEO & Content Marketing",
    description: "Dominate search results with strategic SEO and compelling content that attracts, engages, and converts your target audience. We combine technical optimization with creative storytelling.",
    details: [
      "Keyword research and strategy",
      "On-page and technical SEO",
      "Content creation and optimization",
      "Link building and outreach",
      "Local SEO optimization",
      "Performance tracking and reporting"
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800"
  },
  {
    id: "ppc",
    title: "PPC & Paid Advertising",
    description: "Maximize ROI with laser-targeted paid campaigns across Google, Facebook, LinkedIn, and more. We optimize every dollar for maximum impact and conversions.",
    details: [
      "Google Ads management",
      "Facebook & Instagram advertising",
      "LinkedIn B2B campaigns",
      "Retargeting and remarketing",
      "Landing page optimization",
      "A/B testing and optimization"
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800"
  },
  {
    id: "social",
    title: "Social Media Management",
    description: "Build engaged communities and amplify your brand across all social platforms. We create content that resonates and strategies that drive real business results.",
    details: [
      "Content calendar development",
      "Community management",
      "Influencer partnerships",
      "Social media advertising",
      "Analytics and insights",
      "Crisis management"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800"
  },
  {
    id: "creative",
    title: "Creative & Design Services",
    description: "Stand out with stunning visuals and compelling creative that captures attention and drives action. From branding to video production, we bring your vision to life.",
    details: [
      "Brand identity design",
      "Graphic design and infographics",
      "Video production and editing",
      "Web design and UX/UI",
      "Motion graphics and animation",
      "Photography and visual content"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
  },
  {
    id: "email",
    title: "Email Marketing & Automation",
    description: "Nurture leads and drive sales with sophisticated email campaigns and automation workflows that deliver the right message at the perfect moment.",
    details: [
      "Email campaign strategy",
      "Marketing automation setup",
      "Newsletter design and writing",
      "Drip campaign development",
      "Segmentation and personalization",
      "Performance optimization"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
  },
  {
    id: "analytics",
    title: "Analytics & Conversion Optimization",
    description: "Turn data into actionable insights that improve performance across all channels. We track, analyze, and optimize every aspect of your digital marketing.",
    details: [
      "Google Analytics setup and tracking",
      "Conversion rate optimization",
      "Heat mapping and user behavior",
      "Custom dashboard creation",
      "ROI analysis and reporting",
      "Marketing attribution modeling"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  }
];

const ServicesBreakdown = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
          Full-service <span className="text-jotsi">digital marketing</span> solutions
        </h2>
        <p className="text-stone-600 text-lg max-w-3xl">
          From SEO to social media, PPC to content creation, we provide integrated marketing 
          services that work together to amplify your brand and accelerate growth.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Service Selector */}
        <div className="w-full lg:w-[35%]">
          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  selectedService.id === service.id
                    ? "bg-black text-white"
                    : "bg-stone-50 hover:bg-stone-100 text-black"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-normal tracking-tight">{service.title}</span>
                  <span className={`text-2xl transition-transform duration-300 ${
                    selectedService.id === service.id ? "rotate-45 text-jotsi" : ""
                  }`}>
                    +
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Service Details */}
        <div className="w-full lg:w-[65%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-3xl font-normal tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-stone-700 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Features Grid */}
              <div>
                <h4 className="text-xl font-medium mb-6">What&apos;s included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-jotsi w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-stone-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesBreakdown;