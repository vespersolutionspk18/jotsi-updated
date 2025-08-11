import React from 'react'
import Hero from './aboutblocks/Hero'
import OurStory from './aboutblocks/Ourstory'
import Ourteam from './aboutblocks/Ourteam'
import Testimonials from './aboutblocks/Testimonials'

const page = () => {
  return (
    <div>
      <Hero/>
      <OurStory/>
      <Ourteam/>
      <Testimonials/>
    </div>
  )
}

export default page