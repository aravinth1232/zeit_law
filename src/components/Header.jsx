import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../assets/logo/logo.svg'
import {ArrowUpRightIcon } from 'lucide-react'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const Navigate = useNavigate();


    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 0)
        })
    }, [])

    const goToContact = ()=>{
        Navigate("/");
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }


    }


  return (
    <header className={`px-12 sticky top-0 z-60 bg-sitewhite flex flex-row justify-between items-center py-6 
    ${isScrolled ? "shadow-md" : ""}
    `}>

        <div className="flex items-center gap-3">
            <Link to="/">
                <img
                className={` object-cover transition-all duration-300
                    ${isScrolled? "w-10 h-10" : "w-12 h-12"}
                    `}
                src={logo} alt="logo" />
            </Link>
            <div 
            className='flex flex-col '
            >
                <h1 className={ ` font-light transition-all duration-300 font-primary 
                    ${isScrolled? "text-2xl" : "text-3xl"}
                    `}>
                    MVS & Co
                </h1>
                <p
                    className={`text-sm font-light font-primary text-siteblack overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${isScrolled
                        ? "opacity-0 max-h-0 -translate-y-2"
                        : "opacity-100 max-h-10 translate-y-0"}
                    `}
                    >
                    since 2000
                    </p>
            </div>

        </div>


        <button
            onClick={goToContact}
            className="group cursor-pointer flex flex-row items-center gap-2 text-sm font-medium 
                        text-siteblack border border-siteblack px-4 py-2 rounded-full 
                        hover:bg-siteblack hover:text-sitewhite transition-all duration-300"
            >
            <h1 className="text-base">Let's Talk</h1>

            <span className="relative w-6 h-6 overflow-hidden">
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
        </button>
    </header>
  )
}

export default Header;
