import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="bg-black px-16 pb-16">
      <div className="bg-yellow-400 rounded-lg p-10 flex flex-col items-center gap-7 text-center">
        <h5 className="text-black text-5xl">
        Ready to stop settling for <br></br> average returns?
        </h5>
        <p className="text-black text-lg">
            Join 2000+ professionals who&apos;ve already transformed<br></br>their financial future

        </p>
        <Button className="text-md">Get A Free Consultation</Button>
         <p className="text-black text-lg">
           No commitment required. Results guaranteed or money back.

        </p>
      </div>
    </div>
  )
}

export default CTA
