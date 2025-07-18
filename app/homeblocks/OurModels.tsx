import React from 'react';
import { BsPatchCheckFill, BsGraphUpArrow } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";

const OurModels = () => {
  return (
    <div className="pt-12 lg:pt-20 pb-5 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-5 w-full bg-black items-stretch">
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-yellow-400">Uncompromising</span> Standards</h5>
        <p className="text-base md:text-lg"> We enforce quality through multi-stage peer reviews, stringent QA protocols, and comprehensive talent vetting.<br></br><br></br>This commitment mitigates risk and guarantees every deliverable meets the highest standards of accuracy and precision.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <BsPatchCheckFill className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-yellow-400">Seamless Strategic</span>  Integration</h5>
        <p className="text-base md:text-lg">We function as a strategic partner, aligning our solutions directly with your core business objectives for maximum impact.<br></br><br></br>Our integrated model provides a single point of accountability and delivers a unified, efficient solution.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <FaProjectDiagram className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-yellow-400">Measurable Business</span>  Impact</h5>
        <p className="text-base md:text-lg">We leverage elite global talent and advanced technology to create powerful efficiencies that significantly reduce overhead.<br></br><br></br>These efficiencies directly enhance your profitability and provide a clear, sustainable competitive advantage.</p>
        <div className="absolute bottom-4 right-4 bg-yellow-400 p-4 rounded-md">
            <BsGraphUpArrow className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
    </div>
  )
}

export default OurModels
