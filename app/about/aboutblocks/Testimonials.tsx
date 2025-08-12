import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  const leaders = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      image: "/assets/guy2.jpg",
      bio: "20+ years in global HR and operations at Microsoft and McKinsey"
    },
    {
      name: "Sarah Chen",
      role: "Chief Operating Officer",
      image: "/assets/girl1.jpg",
      bio: "Former VP of Operations at Amazon, expert in scaling global teams"
    },
    {
      name: "David Thompson",
      role: "Chief Technology Officer",
      image: "/assets/guy3.jpg",
      bio: "Led engineering teams at Google and Uber, pioneer in remote work technology"
    },
    {
      name: "Emily Williams",
      role: "Chief People Officer",
      image: "/assets/girl4.jpg",
      bio: "Built talent programs at Meta and Salesforce, certified organizational psychologist"
    }
  ];

  return (
    <div className="bg-black p-4 md:p-10 lg:p-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter text-white mb-6">
          Meet our <span className="text-yellow-400">leadership</span>
        </h2>
        <p className="text-white/70 max-w-3xl mx-auto text-lg">
          Visionaries who understand the challenges of scaling businesses and the power of exceptional talent
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-white/7 border-[1px] border-white/12 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center gap-4">
            <Image 
              className="rounded-full aspect-square object-cover" 
              src={leader.image} 
              alt={leader.name} 
              width={120} 
              height={120}
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-normal tracking-tight">
                {leader.name}
              </h3>
              <p className="text-yellow-400 text-sm">
                {leader.role}
              </p>
              <p className="text-white/60 text-sm mt-2">
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Testimonials