import React from 'react'
import Hero from './components/Hero'
import ServicesBreakdown from './components/ServicesBreakdown'
import WhyChooseUs from './components/WhyChooseUs'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import CTA from '@/components/CTA'

const TechnologyPage = () => {
  return (
    <>
      <Hero />
      <ServicesBreakdown />
      <WhyChooseUs />
      <Packages />
      <FAQ />
      <div className="bg-black w-full h-10"></div>
      <CTA />
    </>
  )
}

export default TechnologyPage