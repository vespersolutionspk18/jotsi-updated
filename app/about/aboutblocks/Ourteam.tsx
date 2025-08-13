import React from "react";
import { BsPatchCheckFill, BsGlobeAmericas, BsPeopleFill } from "react-icons/bs";

const Ourteam = () => {
  return (
    <div className="bg-stone-100 p-4 md:p-10 lg:p-20 flex flex-col">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter mb-6">
          Led by industry <span className="text-jotsi">veterans</span>,
          powered by global talent
        </h2>
        <p className="text-stone-600 max-w-3xl mx-auto text-lg">
          Our leadership team brings decades of experience from Fortune 500 companies, 
          leading consultancies, and successful startups. Together, we&apos;ve built a culture 
          of excellence, innovation, and client success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-8 flex flex-col gap-5 relative">
          <div className="bg-jotsi p-3 rounded-md w-fit">
            <BsPatchCheckFill className="text-black text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tighter">
            Expert Leadership
          </h3>
          <p className="text-stone-600">
            Our C-suite executives bring 100+ years of combined experience across 
            HR, technology, operations, and business strategy from leading global organizations.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 flex flex-col gap-5 relative">
          <div className="bg-jotsi p-3 rounded-md w-fit">
            <BsGlobeAmericas className="text-black text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tighter">
            Global Network
          </h3>
          <p className="text-stone-600">
            With team members in 15+ countries and partnerships across 6 continents, 
            we deliver round-the-clock support and access to diverse talent pools.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 flex flex-col gap-5 relative">
          <div className="bg-jotsi p-3 rounded-md w-fit">
            <BsPeopleFill className="text-black text-2xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-normal tracking-tighter">
            Client-First Culture
          </h3>
          <p className="text-stone-600">
            Every team member, from leadership to support staff, is committed to 
            your success. We measure our achievements by the growth we enable for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
