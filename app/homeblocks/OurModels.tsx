import React from 'react'
import { BsFillLightningFill } from "react-icons/bs";

const OurModels = () => {
  return (
    <div className="pt-26 pb-5 px-16 flex flex-row gap-5 w-full bg-black items-center">
     <div className="bg-white rounded-lg p-7 aspect-square flex flex-col gap-5 w-1/3 relative">
        <h5 className="text-5xl font-normal tracking-tighter">Uncompromising Standards</h5>
        <p className="text-lg"> We enforce quality through multi-stage peer reviews, stringent QA protocols, and comprehensive talent vetting.<br></br><br></br>This commitment mitigates risk and guarantees every deliverable meets the highest standards of accuracy and precision.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <BsFillLightningFill className="text-black text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 aspect-square flex flex-col gap-5 w-1/3 relative">
        <h5 className="text-5xl font-normal tracking-tighter">Seamless Strategic Integration</h5>
        <p className="text-lg">We function as a strategic partner, aligning our solutions directly with your core business objectives for maximum impact.<br></br><br></br>Our integrated model provides a single point of accountability and delivers a unified, efficient solution.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <BsFillLightningFill className="text-black text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 aspect-square flex flex-col gap-5 w-1/3 relative">
        <h5 className="text-5xl font-normal tracking-tighter">Measurable Business Impact</h5>
        <p className="text-lg">We leverage elite global talent and advanced technology to create powerful efficiencies that significantly reduce overhead.<br></br><br></br>These efficiencies directly enhance your profitability and provide a clear, sustainable competitive advantage.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <BsFillLightningFill className="text-black text-4xl" />
        </div>
     </div>
    </div>
  )
}

export default OurModels
