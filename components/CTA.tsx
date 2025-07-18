import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="bg-black px-4 md:px-8 lg:px-16 pb-4 md:pb-8 lg:pb-16">
      <div className="bg-yellow-400 rounded-lg p-6 md:p-10 flex flex-col items-center gap-6 md:gap-7 text-center">
        <h5 className="text-black text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter max-w-3xl">
          Ready to stop settling for average results?
        </h5>
        <p className="text-black/65 text-base md:text-lg max-w-md">
            Join countless others who&apos;ve already transformed their financial future.
        </p>
        <Button className="text-md">Get A Free Consultation</Button>
         <p className="text-black text-lg md:text-xl font-normal ">
           No commitment required. Results guaranteed or money back.
        </p>
      </div>
    </div>
  )
}

export default CTA
