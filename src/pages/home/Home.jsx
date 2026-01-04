import React from 'react'
import { Link } from 'react-router-dom'
import WhyChooseUs from './WhyChooseUs'
import {ArrowUpRightIcon} from 'lucide-react'
import About from './About'
import Testimonial from './Testimonial'
import Contact from './Contact'
import useInView from '../../hooks/useInView'
import {useNavigate} from 'react-router-dom'
import { scrollToSection } from "../../utils/scrollToSection";
import Footer from '../../components/Footer'

const Home = () => {

  const Navigate = useNavigate();

  const stats = [
  { id: 1, value: "25+", label: "Years Experience" },
  { id: 2, value: "1K+", label: "Cases Won" },
  { id: 3, value: "98%", label: "Client Satisfaction" },
];

  const{ref,inView}=useInView({
    threshold:0.3, once:false
  })


  const goToServices = () =>{
    Navigate("/");
   scrollToSection("services", 0.1);
  }

  return (

    <>
    <div 
    ref={ref}
    className='py-8 flex flex-col items-center justify-center font-primary gap-10 '>

           <div className="
        absolute inset-0 rounded-lg z-20
        bg-[radial-gradient(ellipse_at_top_center,rgba(0,0,0,0.6),transparent_20%)]
      "></div>

        <div className='flex-1 flex flex-col items-center justify-center gap-6'>
            <h1 className={` ${inView ? 'animate-slide-up-heading delay-1' : ''}
            text-4xl font-bold  `}>Welcome to MVS & Co</h1>
            <p className={`text-lg font-light  
              ${inView ? 'animate-slide-up-heading delay-2' : ''}
              `}>
                Your trusted partner in{" "}
                <span className="ml-1 px-2 rounded-lg  relative inline-block -rotate-1 ">
                  <span className='z-50 relative text-sitewhite '>Legal solutions</span>

                  <span className="absolute inset-0 z-30 rounded-lg bg-siteblack shadow-[0_0_20px_rgba(0,0,0,0.8)] "></span>
                </span>
            </p>
          
        </div>

        <div className='grid grid-cols-2 gap-4'>


          {/* card 1  */}
          <div className={`relative z-40 w-full h-[500px] overflow-hidden rounded-lg cursor-pointer group ${inView ? 'animate-slide-up-heading delay-3' : ''}
          
          `}>
              <img src="/assets/hero/hero-image.jpg" alt="hero1" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' />
              
              <div
              className='absolute z-50  inset-0  flex flex-col items-center justify-center gap-5 text-sitewhite bg-black/40 group-hover:bg-black/30 transition-all duration-300'
              >
                <div className=" text-center">
                        <h2 className="text-4xl font-bold font-primary">
                          Our Achievements
                        </h2>
                        <p className="text-lg font-light opacity-80 mt-2">
                          Trusted by clients for decades
                        </p>
                      </div>
               <div className='px-4 absolute  bottom-10  w-full flex flex-row items-center justify-between '>
                  {
                    stats.map((stat) => (
                      <div key={stat.id} className='flex flex-col items-center justify-center gap-2'>
                        <p className='text-3xl font-bold font-primary'>{stat.value}</p>
                        <p className='text-lg font-light font-primary'>{stat.label}</p>
                      </div>
                    ))
                  }
               </div>
              </div>

          </div>


          {/* card 2 */}

          <div className={`relative z-40 w-full h-[500px] overflow-hidden rounded-lg cursor-pointer group ${inView ? 'animate-slide-up-heading delay-4' : ''}
          
          `}>
              <img src="/assets/hero/hero-image2.jpg" alt="hero2" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' />
              
              <div
              className='absolute z-40  inset-0  flex flex-col items-center justify-center gap-5 text-sitewhite bg-black/30 group-hover:bg-black/0 transition-all duration-300'
              >
                <div className=" text-center ">
                        <h2 className="text-4xl font-bold font-primary">
                          Our Practice Areas
                        </h2>
                        <p className="text-lg font-light opacity-80 mt-2">
                         Comprehensive legal services tailored to individuals, businesses, and institutions
                        </p>
                         
                  </div>
                 
              </div>
              

              <div className='px-4 absolute z-50 bottom-10  w-full flex flex-row items-center justify-between '>
                  <button
                    onClick={goToServices}
                    className="w-fit mx-auto cursor-pointer z-50 bg-white text-black px-6 py-2 rounded-full 
                              font-medium flex items-center gap-2
                              hover:bg-gray-200 transition-all duration-300"
                  >
                    View Services 
                  </button> 
              </div>

          </div>
          
         



        </div>

       
    </div>
    
    <About />

    <WhyChooseUs />
    

    <Testimonial />
      <Contact />
    </>
    
  )
}

export default Home
