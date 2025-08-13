import React from 'react';
import { BsPatchCheckFill, BsGraphUpArrow } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";

const OurModels = () => {
  return (
    <div className="pt-12 lg:pt-20 pb-5 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-5 w-full bg-black items-stretch">
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-jotsi">Uncompromising</span> Quality</h5>
        <p className="text-base md:text-lg">Our strength lies in our rigorous talent vetting. We pre-screen every professional for skill, reliability, and cultural fit to ensure they are ready to drive results from day one.<br></br><br></br>This commitment guarantees you connect with top-tier talent you can trust.</p>
        <div className="absolute bottom-4 right-4 bg-jotsi p-4 rounded-md">
            <BsPatchCheckFill className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-jotsi"> Strategic</span> Partnership</h5>
        <p className="text-base md:text-lg">We operate as a true extension of your business. By understanding your goals, we tailor our solutions to integrate perfectly with your operations, providing a unified and efficient partnership.<br></br><br></br>Our goal is to feel less like a vendor and more like a part of your team.</p>
        <div className="absolute bottom-4 right-4 bg-jotsi p-4 rounded-md">
            <FaProjectDiagram className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
     <div className="bg-white rounded-lg p-7 flex flex-col gap-5 w-full lg:w-1/3 relative pb-20">
        <h5 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tighter"><span className="text-jotsi">Measurable Business</span> Impact</h5>
        <p className="text-base md:text-lg">Our purpose is to deliver tangible results. By connecting you with elite global talent, we help you reduce overhead and accelerate timelines, freeing you to focus on strategic growth.<br></br><br></br>We measure our success by your success—enhanced profitability and a sustainable competitive edge.</p>
        <div className="absolute bottom-4 right-4 bg-jotsi p-4 rounded-md">
            <BsGraphUpArrow className="text-black text-3xl md:text-4xl" />
        </div>
     </div>
    </div>
  )
}

export default OurModels;