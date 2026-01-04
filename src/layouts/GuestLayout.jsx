import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import {ArrowRight} from 'lucide-react'


const GuestLayout = () => {
  return (
    <div >
        <Header className='  ' />
        <main className='px-2 lg:px-12  '>
            <Outlet />
        </main>
        <Footer className={`px-0`} />

       <a
          href="#" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-6 z-50 bg-sitewhite rounded-full shadow-lg  p-2 px-3 hover:scale-110 transition-transform 
          duration-300 flex flex-row gap-3 items-center justify-center 
          "
        >
          <img
            src="/assets/whatsapp.svg"
            alt="WhatsApp"
            className="w-6 h-6 object-contain"
          />
          <h1 className='font-primary text-sm text-siteblack'>Chat with us</h1>
        </a>

    </div>
  )
}

export default GuestLayout
