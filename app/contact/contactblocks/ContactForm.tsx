"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    "Accounting & Bookkeeping",
    "Construction Estimating",
    "Technology Staffing",
    "Digital Marketing",
    "Administrative Support",
    "Customer Service",
    "Recruitment & HR",
    "Legal & Compliance",
    "Healthcare Staffing",
    "Real Estate Support",
    "eCommerce Operations",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-[40%]">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-6">
            Start the <span className="text-jotsi">conversation</span>
          </h2>
          <p className="text-stone-600 text-lg mb-8">
            Fill out the form and our team will get back to you within 24 hours. 
            We&apos;re excited to learn about your business and discuss how we can help you grow.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-4 border-jotsi pl-4">
              <h3 className="text-xl font-normal tracking-tight mb-2">Free Consultation</h3>
              <p className="text-stone-600">
                No obligations. Just a friendly conversation about your needs and how we can help.
              </p>
            </div>
            <div className="border-l-4 border-jotsi pl-4">
              <h3 className="text-xl font-normal tracking-tight mb-2">Custom Solutions</h3>
              <p className="text-stone-600">
                Every business is unique. We&apos;ll create a tailored plan that fits your specific requirements.
              </p>
            </div>
            <div className="border-l-4 border-jotsi pl-4">
              <h3 className="text-xl font-normal tracking-tight mb-2">Transparent Pricing</h3>
              <p className="text-stone-600">
                Clear, upfront pricing with no hidden fees. Know exactly what you&apos;re investing in.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Service Interested In *
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-jotsi focus:border-transparent resize-none"
                placeholder="Tell us about your project and how we can help..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-sm text-stone-500">
                * Required fields
              </p>
              <Button type="submit" variant="yellow" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;