import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({click}){
    const [scrolled , setScrolled] = useState(false)
    const [droped , setDroped] = useState(false)
    const [open , setOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          setScrolled(scrollPosition > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
return(
    <nav style={{zIndex:'100'}}  className={`py-5 ${click ? 'lg:fixed' : ''}  w-full bg-${scrolled || open  ? 'black' : 'white'} transition-all duration-500 `}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" flex justify-between  lg:flex-row">
          <a href="/" className="flex items-center w-[200px]">
           <div className='grid grid-cols-1'>
         <div className='w-full flex items-center justify-center'><h1 className={`text-${scrolled || open ? 'white' : 'black'}`} style={{fontWeight:'550'}}>Saimiri</h1></div>   
           <div  className='w-full flex items-center justify-center'><h2 className={`text-${scrolled  || open ? 'white' : 'black'}`} style={{fontWeight:'550'}}>mermer & granit</h2></div> 
           </div>
          </a>
          <button data-collapse-toggle="navbar" type="button" onClick={()=>{setOpen(!open)}} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`${open ? 'unset' : 'hidden'}   w-full lg:flex lg:pl-11 max-lg:py-4`} id="navbar">
          <ul className="flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
            <li>
              <a href="javascript:;" className={`text-${scrolled || open  ? 'white':'gray-500'} text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left `}><Link to="/">Faqa Kryesore</Link></a>
            </li>
           
            <li className="relative">
                <button data-target="megamenu" onClick={()=>{setDroped(!droped)}} className={`dropdown-toggle flex items-center justify-between text-${scrolled || open  ? 'white':'gray-500'}  text-base font-medium hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left  lg:m-0 hover:text-gray-900`}>
               <Link to='/products'>Produktet</Link> 
               
              </button>
              { /* Dropdown menu */ }
          
           
            </li>
            

          </ul>
          <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
           
          <Link to='/contact-us'>
            <button 
            className={` ${scrolled || open ? 'bg-white text-black' : 'bg-black  text-white'} rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-gray-700`}>Na Kontaktoni</button>
          </Link> 
          </div>
        </div>
      </div>
    </div>
  </nav>



)

}