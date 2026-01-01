import React from 'react'
import useInView from '../../hooks/useInView'

const About = () => {


   const{ref,inView}=useInView({
    threshold:0.5, once:false
  })

    const aboutUs = [
        {
          id: 1,
          title: "Who We Are",
          image: "/assets/about/whoweare.svg",
          description:
            "MVS & Co is a full-service legal practice committed to delivering trusted, ethical, and result-driven legal solutions.",
        },
        {
          id: 2,
          title: "Our Mission",
          image: "/assets/about/mission.svg",
          description:
            "To provide clear, strategic, and effective legal guidance while protecting the rights and interests of our clients.",
        },
        {
          id: 3,
          title: "Our Vision",
          image: "/assets/about/vision.svg",
          description:
            "To be a respected legal partner known for integrity, excellence, and long-term client relationships.",
        },
        {
          id: 4,
          title: "Our Values",
          image: "/assets/about/values.svg",
          description:
            "Integrity, professionalism, transparency, and a strong commitment to justice guide everything we do.",
        },
      ];


  return (
    <div 
    ref={ref}
    className='py-8 relative my-10'>
      <div className='relative z-50 flex flex-col items-start justify-center font-primary gap-10 px-4 '>

        <div className='flex flex-col items-start justify-center gap-3'>
          <h1 className={`text-4xl font-bold font-primary ${inView ? 'animate-slide-up-heading delay-1' : ''}`}>About Us</h1>
          <p className={`text-lg font-light font-primary ${inView ? 'animate-slide-up-heading delay-2' : ''}`}>Decades of experience guiding clients through complex legal matters.</p>
        </div>
        
        <div className='grid grid-cols-2 gap-6'>{
            aboutUs.map((item) => (
                <div key={item.id} className={`flex flex-row items-start justify-center gap-4 ${inView ? 'animate-slide-up-heading delay-3' : ''}`}>
                    
                      <img src={item.image} alt={item.title} className='w-10 h-10 object-contain rounded-full cursor-pointer 
                      hover:scale-110 transition-all duration-300
                      ' />
                    <div className='flex flex-col items-start justify-center gap-2'>
                      <h2 className='text-2xl font-bold  font-primary'>{item.title}</h2>
                      <p className='text-lg font-light  font-primary'>{item.description}</p>
                    </div>
                </div>
            ))
            }
        </div>

      </div>

       <div className="
        absolute inset-0 rounded-lg z-40
        bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.6),transparent_60%)]
      "></div>
    </div>
  )
}

export default About
