import React from "react";

const OurStory = () => {
  return (
    <div className="bg-white w-full p-4 md:p-10 lg:p-20 flex flex-col gap-16">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
        <div className="flex flex-col justify-between gap-10 md:gap-0 w-full md:w-[30%]">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter">
            Our <span className="text-jotsi">Story</span>
          </h2>
          <div className="text-lg md:text-xl text-stone-600">
            Founded in 2019 with a simple yet powerful vision
          </div>
        </div>
        <div className="flex flex-col justify-between w-full md:w-[65%]">
          <div className="text-stone-700 text-lg leading-relaxed space-y-6">
            <p>
              Jotsi was born from a fundamental belief: exceptional talent shouldn&apos;t be limited by geography, 
              and growing businesses shouldn&apos;t have to compromise on quality to manage costs. Our founders 
              recognized a gap in the market for a truly comprehensive HR and business support partner.
            </p>
            <p>
              Starting with just three clients in the construction industry, we quickly earned a reputation 
              for delivering not just staffing solutions, but strategic partnerships that drive real business growth. 
              Today, we serve over 50 satisfied clients across multiple industries, from startups to Fortune 500 companies.
            </p>
            <p>
              What sets us apart isn&apos;t just our global talent network or our industry expertise—it&apos;s our 
              unwavering commitment to understanding each client&apos;s unique needs and culture. We don&apos;t just 
              fill positions; we build teams that integrate seamlessly with your operations and share your vision for success.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md border-[1px] border-stone-300 divide-y md:divide-y-0 md:divide-x divide-stone-300">
        <div className="p-8 flex flex-col gap-4 justify-between">
          <h3 className="text-black text-4xl md:text-5xl font-normal tracking-tighter">2019</h3>
          <p className="text-lg text-stone-600">Founded with a mission to democratize access to global talent</p>
        </div>
        <div className="p-8 flex flex-col gap-4 justify-between">
          <h3 className="text-black text-4xl md:text-5xl font-normal tracking-tighter">10+</h3>
          <p className="text-lg text-stone-600">Industries served with specialized expertise</p>
        </div>
        <div className="p-8 flex flex-col gap-4 justify-between">
          <h3 className="text-black text-4xl md:text-5xl font-normal tracking-tighter">24/7</h3>
          <p className="text-lg text-stone-600">Support available across all time zones</p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
