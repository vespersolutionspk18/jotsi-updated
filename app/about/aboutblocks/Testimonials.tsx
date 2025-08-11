import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex flex-row bg-gray-50 gap-3 items-center  justify-center p-2  ">
<div className= " flex flex-col bg-white  w-[1/4] gap-1  items-center p-15 justify-center rounded-2xl px-8  " >
<Image className="rounded-full aspect-square" src={'/assets/girl1.jpg'} alt='' width={80} height={80}/>
<p className="font-medium ">
    Mike Simrogan 
</p>
<div className="border-b border-gray-400 p-1 ">
<p className=" text-center text-purple-300 font-light">
    Founder and Ceo
</p>
<p className="text-center">
    Duis aute irure dolor <br/>in reprehenderit in voluptate.
</p>
</div>
</div>
<div className= " flex flex-col bg-white  w-[1/4] gap-1 items-center p-15 justify-center rounded-2xl px-8  " >
<Image className="rounded-full aspect-square" src={'/assets/guy2.jpg'} alt='' width={80} height={80}/>
<p className="font-medium ">
    Mike Simrogan 
</p>
<div className="border-b border-gray-400 p-1 ">
<p className=" text-center text-purple-300 font-light">
   Retired EVP & CCO 
</p>
<p className="text-center">
    Duis aute irure dolor <br/>in reprehenderit in voluptate.
</p>
</div>
</div>
<div className= " flex flex-col bg-white  w-[1/4] gap-1 items-center p-15 justify-center rounded-2xl px-8  " >
<Image className="rounded-full aspect-square" src={'/assets/girl4.jpg'} alt='' width={80} height={80}/>
<p className="font-medium ">
    Mike Simrogan 
</p>
<div className="border-b border-gray-400 p-1 ">
<p className=" text-center text-purple-300 font-light">
 VP & Operations
</p>
<p className="text-center">
    Duis aute irure dolor <br/>in reprehenderit in voluptate.
</p>
</div>
</div>
<div className= " flex flex-col bg-white  w-[1/4] gap-1 items-center p-15 justify-center rounded-2xl px-8  " >
<Image className="rounded-full aspect-square" src={'/assets/guy3.jpg'} alt='' width={80} height={80}/>
<p className="font-medium ">
  Mike Simrogan 
</p>
<div className="border-b border-gray-400 p-1 ">
<p className=" text-center text-purple-300 font-light">
   Cheif Marketing Officer
</p>
<p className="text-center">
    Duis aute irure dolor <br/>in reprehenderit in voluptate.
</p>
</div>
</div>
        

    </div>
  )
}

export default Testimonials