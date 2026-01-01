import React from 'react'
import useInView from '../../hooks/useInView'

const Contact = () => {


     const{ref,inView}=useInView({
            threshold:0.3, once:false
        })

        
  return (
    <div id='contact'
    ref={ref}
    className='py-8 relative my-10'>
    
      <div className="flex flex-col gap-14 px-4 w-3/4 mx-auto">
  
            {/* Heading */}
            <div className="text-center">
                <h1 className={`text-3xl md:text-4xl font-bold font-primary ${inView ? 'animate-slide-up-heading delay-1' : ''}`}>
                Contact Our Legal Team
                </h1>
                <p className={`text-lg font-light opacity-80 mt-3 ${inView ? 'animate-slide-up-heading delay-2' : ''}`}>
                Reach out to our team for confidential legal consultation and expert guidance.
                </p>
            </div>

            {/* Form */}
            <form className="w-full flex flex-col gap-6">

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                        focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                        transition-all"
            />

            <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                        focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                        transition-all"
            />
            </div>

            {/* Phone */}
            <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                        focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                        transition-all"
            />

            {/* Agency */}
            <input
            type="text"
            placeholder="Agency Name (Optional)"
            className="w-full rounded-lg border border-gray-300 px-4 py-3
                        focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                        transition-all"
            />

            {/* Message */}
            <textarea
            rows="5"
            placeholder="Your Message (Optional)"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none
                        focus:outline-none focus:border-black focus:ring-1 focus:ring-black
                        transition-all"
            />

            {/* Submit */}
            <div className='flex flex-col gap-4'>
                <button
                type="submit"
                className="self-center mt-4 px-8 py-3 rounded-full cursor-pointer
                            bg-siteblack text-white font-medium
                            hover:bg-siteblack/80 transition-all duration-300"
                >
                Request Consultation
                </button>

                {/* Privacy note */}
                <p className="text-sm opacity-60 text-center ">
                All communications are strictly confidential.
                </p>
            </div>

        </form>
        </div>
    </div>
  )
}

export default Contact
