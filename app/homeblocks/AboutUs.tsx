import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-white w-full p-4 md:p-10 flex flex-col md:flex-row justify-between gap-10 md:gap-4">
      <div className="flex flex-col justify-between gap-10 md:gap-0 w-full md:w-[25%]">
        <h5 className="text-lg md:text-xl text-stone-600">
          What sets Jotsi apart is our flexibility and unwavering commitment to quality. We are your one-stop solution for all human resources and business support needs.
        </h5>
        <h5 className="text-lg md:text-xl text-stone-600">
          A Strategic Partner for Your Growth.
        </h5>
      </div>
      <div className="flex flex-col justify-between w-full md:w-[66%]">
        <h5 className="text-3xl md:text-5xl font-normal tracking-tighter">
          Delivering <span className="text-jotsi">comprehensive support</span> across industries to help you build, scale, and succeed.
        </h5>
        
        <div className="flex mt-8 md:mt-16 rounded-sm flex-col md:flex-row w-full border-[1px] border-stone-300 text-stone-600 divide-y md:divide-y-0 md:divide-x divide-stone-300">
            <div className="p-5 w-full md:w-1/3 flex flex-col gap-4 md:gap-26 justify-between ">
                <h5 className="text-black text-3xl md:text-4xl">50+</h5>
               <h5 className="text-lg">Satisfied Clients</h5>
            </div>
            <div className="p-5 w-full md:w-1/3 flex flex-col gap-4 md:gap-26 justify-between ">
                <h5 className="text-black text-3xl md:text-4xl">200+</h5>
               <h5 className="text-lg">Successful Projects</h5>
            </div>
            <div className="p-5 w-full md:w-1/3 flex flex-col gap-4 md:gap-26 justify-between ">
                <h5 className="text-black text-3xl md:text-4xl">99%</h5>
               <h5 className="text-lg">Client Retention</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs