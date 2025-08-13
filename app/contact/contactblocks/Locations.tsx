import React from "react";
import { BsGeoAltFill } from "react-icons/bs";

const Locations = () => {
  const offices = [
    {
      city: "New York",
      country: "USA",
      address: "123 Business Avenue, Suite 500",
      zip: "New York, NY 10001",
      type: "Headquarters",
      image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=400"
    },
    {
      city: "London",
      country: "UK",
      address: "456 Commerce Street, Floor 3",
      zip: "London, EC2A 4BX",
      type: "Regional Office",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400"
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "789 Trade Center, Office 1200",
      zip: "Dubai, Business Bay",
      type: "Regional Office",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "321 Marina Boulevard, Level 15",
      zip: "Singapore 018982",
      type: "APAC Hub",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400"
    }
  ];

  return (
    <div className="bg-white p-4 md:p-10 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-[35%]">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter mb-6">
            Global presence, <span className="text-jotsi">local expertise</span>
          </h2>
          <p className="text-stone-600 text-lg mb-8">
            With offices strategically located across major business hubs, 
            we&apos;re always within reach to provide the support you need, when you need it.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="bg-jotsi p-2 rounded-md mt-1">
                <BsGeoAltFill className="text-black text-lg" />
              </div>
              <div>
                <h3 className="font-medium mb-1">4 Global Offices</h3>
                <p className="text-stone-600 text-sm">
                  Strategically located to serve clients worldwide
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-jotsi p-2 rounded-md mt-1">
                <BsGeoAltFill className="text-black text-lg" />
              </div>
              <div>
                <h3 className="font-medium mb-1">15+ Countries</h3>
                <p className="text-stone-600 text-sm">
                  Remote teams and partners across the globe
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-jotsi p-2 rounded-md mt-1">
                <BsGeoAltFill className="text-black text-lg" />
              </div>
              <div>
                <h3 className="font-medium mb-1">24/7 Coverage</h3>
                <p className="text-stone-600 text-sm">
                  Round-the-clock support across all time zones
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[65%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="border border-stone-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${office.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-jotsi text-black text-xs px-2 py-1 rounded">
                      {office.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-normal tracking-tight mb-1">
                    {office.city}, {office.country}
                  </h3>
                  <p className="text-stone-600 text-sm">
                    {office.address}<br />
                    {office.zip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;