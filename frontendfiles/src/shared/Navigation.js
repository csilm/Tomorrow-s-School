import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/tts-logo.png';
import logo1 from '../images/Website-design_3-09.png';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  }
 
  useEffect(() => {
    if (window.location.pathname == "/" || window.location.pathname=="/home") {
      setNavColor(true);
  }
 },[navColor])
  return (
    <div>

      <nav class={navColor===true ? 'bg-white' : 'bg-[#18181b]'}>

        <div class="ml-auto container">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">

              <button onClick={handleNavbar} type="button" class="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 md:w-48 sm:w-16 items-center">
                {
                  navColor==true ?   <img src={logo} className="w-48 " alt="" /> : <img src={logo1} className="w-48" alt="" />
                }
              
                
              </div>
              <div class="hidden sm:ml-6 sm:block">
                {/*<p className={navColor==false ? 'flex ml-28 space-x-4': 'text-white flex ml-28 space-x-4' } ></p>*/}
                <div className={navColor==false ? 'text-white flex ml-28 space-x-4' : 'flex ml-28 space-x-4'}>
                  <Link to="/" className='flex'><a href="#" class="px-3 py-2 font-medium" aria-current="page">Home</a></Link>

                 <a href="#" class="px-3 py-2 font-medium">About us</a>

                  <a href="#" class="px-3 py-2 font-medium">What we do</a>

                 <Link to="/joinus" className='flex'> <a href="#" class="px-3 py-2 font-medium">join Us</a></Link>

                  <a href="#" class="px-3 py-2 font-medium">Contact us</a>
                  <a href="#" class="font-medium flex align-center justify-center">
                   <button className='bg-[#fab811] p-2'>Donate</button>
                  </a>
                  <div class="flex align-center justify-center  font-medium">
                    <select id="countries" class=" bg-gray-50 border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                      <option selected="">Dn</option>
                      <option value="US">En</option>

                    </select>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 pt-2 pb-3">

            {
              nav && <div>
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">What we do</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join us</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
                <div class="flex align-center justify-center  font-medium">
                    <select id="countries" class=" bg-gray-50 border border-yellow-300 text-yellow-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
                      <option selected="">Dn</option>
                      <option value="US">En</option>

                    </select>

                  </div>
              </div>
            }
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navigation;