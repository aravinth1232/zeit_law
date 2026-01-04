import React from 'react'
import { Linkedin, Instagram, Facebook } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Footer = () => {


  const socials = [
    { id: 1, href: "#", icon: Instagram  },
    { id: 2, href: "#", icon: Linkedin  },
    
  ];


   const {pathname} = useLocation();


  return (
    <div className={`
     ${pathname != "/"  ? "hidden "  : "flex"}
    px-12 py-4 bg-siteblack text-white flex flex-row justify-between items-center`}>
      <div>
        <h1 className='text-lg font-light font-primary'>MVS & Co</h1>
        <p className='text-sm font-light font-primary'> &copy; 2025 All Rights Reserved.</p>
      </div>
    
      <div className='flex flex-row justify-between items-center gap-12'>
        <div className='flex flex-row justify-between items-center gap-8 '>
            <h1 className='text-sm font-light font-primary underline-effect'>Privacy Policy</h1>
            <h1 className='text-sm font-light font-primary underline-effect'>Terms of Service</h1>
        </div>

        <div className='flex flex-row justify-between items-center gap-3 rounded-full pr-8'>
            {
              socials.map(({id,href,icon: Icon}) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  className='border-2 border-white rounded-full p-2 hover:bg-white hover:text-black transition-all duration-300'
                  rel="noopener noreferrer"
                >
                  <Icon strokeWidth={2} size={20} />
                </a>
              ))
            }
        </div>

      </div>

    </div>
  )
}

export default Footer
