import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-white w-full p-10 flex flex-row justify-between">
      <div className="flex flex-col justify-between w-[25%]">
        <h5 className="text-xl text-stone-600">Founded in 2018, managing $500M+ with 98% retention; now nationwide.</h5>
        <h5 className="text-xl text-stone-600">Same Personal Approach. Just Bigger Impact</h5>

      </div>
      <div className="flex flex-col justify-between w-[66%]">
        <h5 className="text-5xl">Why <span className="text-yellow-400">2000+ professionals</span> across the nation trust us to expertly manage wealth.</h5>
        
        <div className="flex mt-16 rounded-sm flex-row w-full border-[1px] border-stone-300 text-stone-600">
            <div className="p-5    w-1/3 flex flex-col gap-26 justify-between ">
                <h5 className="text-black text-4xl">2000+</h5>
               <h5 className="text-lg">Professionals trust us</h5>
            </div>
            <div className="p-5 border-x-[1px] border-x-stone-300 w-1/3 flex flex-col gap-26 justify-between ">
                <h5 className="text-black text-4xl">$500M+</h5>
               <h5 className="text-lg">Professionals trust us</h5>
            </div>
            <div className="p-5  w-1/3 flex flex-col gap-26 justify-between ">
                <h5 className="text-black text-4xl">98%</h5>
               <h5 className="text-lg">Professionals trust us</h5>
            </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
