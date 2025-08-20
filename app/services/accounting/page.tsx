import React from 'react'
import Hero from './components/Hero'
import ServicesBreakdown from './components/ServicesBreakdown'
import WhyChooseUs from './components/WhyChooseUs'

import FAQ from './components/FAQ'
import CTA from '@/components/CTA'

const AccountingPage = () => {
  return (
    <>
      <Hero />
      <ServicesBreakdown />
      <WhyChooseUs />
      
      <FAQ />
      <div className="bg-black w-full h-10"></div>
      <CTA />
    </>
  )
}

export default AccountingPage