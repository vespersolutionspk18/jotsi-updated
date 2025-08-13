import Image from 'next/image'
import React from 'react'

const OurClients = () => {
  return (
    <div className="p-4 md:p-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
      <h5 className="w-full lg:w-[40%] text-3xl md:text-5xl font-normal tracking-tighter text-center lg:text-left">
        Proud to partner with industry <span className="text-jotsi">leaders</span> and innovators.
      </h5>
      <div className="w-full lg:w-[60%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/nexuslogo.jpeg" alt="Nexus Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
            <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/innovatrix.png" alt="Innovatrix Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
            <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/ecmdclogo.png" alt="ECMDCLO Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
             <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/vesperlogo.svg" alt="Vesper Logo" width={70} height={60} className="object-contain max-h-full max-w-full" />
            </div>
             <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/rmlogo.jpeg" alt="RM Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
             <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/integralogo.png" alt="Integra Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
             <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/rhyno.avif" alt="Rhyno Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
             <div className="border-[1px] border-stone-300 h-[80px] rounded-md flex items-center justify-center p-2">
              <Image src="/assets/lancelogo.jpeg" alt="Lance Logo" width={170} height={100} className="object-contain max-h-full max-w-full" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients
