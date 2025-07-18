import React from 'react'
import { Button } from '@/components/ui/button'

import Header from '@/components/Header'

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-between p-7 bg-cover bg-center" style={{backgroundImage: "url('/assets/hero.jpeg')"}}>
      <div className="absolute inset-0 bg-black opacity-66"></div>
      <div className="relative z-10">
        <Header />
        <p className="w-[33%] text-white/75 text-lg leading-snug mt-7">Jotsi delivers expert-led Accounting, Construction Estimating, and Offshore Staffing solutions that help firms scale efficiently, reduce overhead, and maintain accuracy, all powered by industry-grade tools and a highly skilled team.</p>
      </div>
      <div className="relative flex flex-row justify-between z-10">
        <h1 className="w-[60%] text-7xl text-white">Accounting, Estimating &
Offshore Staffing</h1>
<div className="bg-white/7 border-[1px] border-white/12 backdrop-blur-md rounded-md shadow-lg text-white p-4 flex flex-col gap-5 w-[300px]">
    <h5 className="text-lg leading-snug">Award-winning wealth managers handling $500M for discerning professionals</h5>
    <Button className="text-md" variant="yellow">Get Your Free Wealth Estimate</Button>

</div>
      </div>
    </div>
  )
}

export default Hero
