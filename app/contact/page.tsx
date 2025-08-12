import React from 'react'
import Hero from './contactblocks/Hero'
import ContactForm from './contactblocks/ContactForm'
import ContactInfo from './contactblocks/ContactInfo'
import Locations from './contactblocks/Locations'

const ContactPage = () => {
  return (
    <>
      <Hero />
      <ContactForm />
      <ContactInfo />
      <Locations />
      <div className="bg-black w-full h-10"></div>
    </>
  )
}

export default ContactPage