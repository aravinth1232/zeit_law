import React from 'react'
import useInView from '../../hooks/useInView'

const Testimonial = () => {


   const{ref,inView}=useInView({
    threshold:0.5, once:false
  })

    const testimonials = [
  {
    id: 1,
    image: "assets/testimonials/review3.webp",
    name: "Ramesh Kumar",
    designation: "Business Owner",
    feedback:
      "MVS & Co provided exceptional legal guidance and handled my case with professionalism and clarity. I felt confident throughout the entire process.",
  },
  {
    id: 2,
    image: "assets/testimonials/review2.webp",
    name: "Priya Sharma",
    designation: "Entrepreneur",
    feedback:
      "The team was extremely knowledgeable and responsive. Their attention to detail and commitment to justice truly set them apart.",
  },
  {
    id: 3,
    image: "assets/testimonials/review3.webp",
    name: "Anand Raj",
    designation: "Corporate Manager",
    feedback:
      "Professional, reliable, and ethical. MVS & Co helped our company navigate complex legal matters with ease and confidence.",
  },
  {
    id: 4,
    image: "assets/testimonials/review2.webp",
    name: "Meena Iyer",
    designation: "Real Estate Consultant",
    feedback:
      "Clear communication and strong representation. I highly recommend MVS & Co for anyone seeking trusted legal support.",
  },
];









  return (
    <div
    ref={ref}
    className='py-10 relative my-10'>

        <div className='relative z-50 flex flex-col items-center justify-center gap-14 px-4 '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                    <h2 className={`text-4xl font-bold font-primary ${inView ? 'animate-slide-up-heading delay-1' : ''}`}>
                    Client Feedback
                </h2>
                <p className={`text-lg font-light font-primary ${inView ? 'animate-slide-up-heading delay-2' : ''}`}>What our clients say about our approach to law, ethics, and results.</p>
            </div>
            
            <div className='relative w-full overflow-hidden'>
                <div className='flex  gap-6 animate-infinite-scroll'>
                    {
                    [...testimonials, ...testimonials].map((testimonial) => (
                        <div key={testimonial.id} className='min-w-[320px] px-4 flex flex-col items-start justify-between gap-5 shadow  cursor-pointer' >
                            <p className='text-lg font-light opacity-80'>{"“"}{testimonial.feedback}{"”"}</p>
                            
                            <div className='flex flex-row items-center justify-center gap-3 '>
                                <img src={testimonial.image} alt={testimonial.name} className='w-10 h-10 rounded-lg object-cover' />
                                <div className='flex flex-col items-start justify-center gap-1'>
                                    <p className='text-md font-bold'>{testimonial.name}</p>
                                    <p className='text-sm font-light opacity-80'>{testimonial.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>

        <div className="
        absolute inset-0 rounded-lg z-40
        bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.3),transparent_50%)]
      "></div>
      
    </div>
  )
}

export default Testimonial
