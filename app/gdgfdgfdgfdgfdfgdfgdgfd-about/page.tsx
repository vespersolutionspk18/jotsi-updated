import React from 'react'
import Hero from './aboutblocks/Hero'
import OurStory from './aboutblocks/Ourstory'
import Ourteam from './aboutblocks/Ourteam'
import Testimonials from './aboutblocks/Testimonials'
import CTA from '@/components/CTA'

const page = () => {
  return (
    <>
      <Hero/>
      <OurStory/>
      <Ourteam/>
      <Testimonials/>
      <CTA/>
    </>
  )
}

export default page