import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowUpRightIcon} from 'lucide-react'
import useInView from '../../hooks/useInView'


const WhyChooseUs = () => {
  
  const{ref,inView}=useInView({
    threshold:0.4, once:false
  })
  
  const practiceAreas = [
  {
    id: 1,
    title: "Corporate Law",
    description: "Legal support for businesses, contracts, compliance, and corporate governance.",
  },
  {
    id: 2,
    title: "Civil Litigation",
    description: "Expert representation in disputes, claims, and civil court proceedings.",
  },
  {
    id: 3,
    title: "Criminal Defense",
    description: "Strong defense strategies protecting your rights at every stage.",
  },
  {
    id: 4,
    title: "Family Law",
    description: "Sensitive handling of divorce, custody, and family-related matters.",
  },
  {
    id: 5,
    title: "Property & Real Estate",
    description: "Trusted legal advice for property transactions and disputes.",
  },
  {
    id: 6,
    title: "Intellectual Property",
    description: "Protection of trademarks, copyrights, and intellectual assets.",
  },
];


  return (
    <div ref={ref} className='py-8   relative  rounded-lg my-10'>

          <div id="services" className={`flex flex-row z-50 relative font-primary gap-8 ${inView ? 'animate-slide-up-heading delay-1' : ''}`}>
            <div className='w-[500px] h-[500px] rounded-lg overflow-hidden '>
                <img src="/assets/whychoose/whychoose.png" alt="whychoose" className='w-full h-full object-contain hover:scale-110 transition-all duration-300 cursor-pointer' />
            </div>

            <div className='flex-1  flex flex-col items-center justify-around gap-8 px-4 py-4 shadow'>

                <div className={`flex flex-col items-center justify-center gap-3 `}>
                  <h1 className={`text-4xl font-bold ${inView ? 'animate-slide-up delay-2' : ''}`}> Why Choose MVS & Co</h1>
                  <p className={`text-lg font-light text-center ${inView ? 'animate-slide-up delay-3' : ''}`}>
                    We are a law firm that values your rights and your needs. We are here to help you navigate the legal landscape and find the solutions that best fit your situation.
                  </p>
                </div>
              
                <div className={`grid grid-cols-2 gap-5 `}>
                  {practiceAreas.map((area) => (
                    <div key={area.id} className={`flex flex-row items-center gap-6 group cursor-pointer ${inView ? 'animate-slide-up delay-4' : ''}`}>
                      <span className="relative w-6 h-6 overflow-hidden ">
                            {/* First Arrow */}
                            <ArrowUpRightIcon
                            className="absolute inset-0 w-6 h-6 
                                        transition-all duration-300 
                                        group-hover:-translate-y-4 group-hover:opacity-0"
                            />
            
                            {/* Second Arrow */}
                            <ArrowUpRightIcon
                            className="absolute inset-0 w-6 h-6 opacity-0 translate-y-4
                                        transition-all duration-300 
                                        group-hover:translate-y-0 group-hover:opacity-100"
                            />
                        </span>
                      <div className='flex flex-col '>
                        <h2 className='text-lg font-bold'>{area.title}</h2>
                        <p className='text-sm font-light'>{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

            </div>
          </div>
         
       <div className="
        absolute inset-0 rounded-lg z-40
        bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.6),transparent_60%)]
      "></div>
        
        
    </div>
  )
}

export default WhyChooseUs
