import React, { useState } from 'react';
import bg from '../images/images-05.jpg';
import footerImg from '../images/Website-design_3-07.png';
import axios from "axios";

const Footer = () => {
    const [data, setData] = useState({})


    const handleVal = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const loadData = { ...data };
      loadData[field] = value;
      setData(loadData);
      console.log(data);
  }
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          await axios.post("http://localhost:5000/subscribe", data)
              .then(result => console.log(result));
      } catch (error) {
          console.log(error.message);
      }
  
  }
    return (
        <div>
            <footer style={{ backgroundImage: `url(${bg})` }} class="mt-20 text-center lg:text-left lg:px-10 text-white">

                <div class=" py-10 text-left ">
                    <div class="mx-auto container grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
                        <div>
                            <h6 class="uppercase font-semibold mb-4 flex items-center ">
                                The Tomorrow School e.V.
                            </h6>
                            <p className=''>

                                The Tomorrow School is a registered non-profit organization in Hamburg, Germany.

                                <p className='mt-2'> Register number: VR 24153.</p>
                                <p className='mt-2'>Tax Identification No.: 17/440/23048.</p>

                                <p className='mt-6'>
                                    Copyright © 2019 All Rights Reserved
                                </p>
                            </p>
                        </div>
                        <div class="">
                            <h6 class="uppercase font-semibold mb-4">
                                Quick links
                            </h6>
                            <p class="mb-4">
                                <a href="#!" class="text-white">About us</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!" class="text-white">What we do</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!" class="text-white">Join us</a>
                            </p>
                            <p>
                                <a href="#!" class="text-white">Contact us</a>
                            </p>
                        </div>
                        <div class="">
                            <h6 class="uppercase font-semibold mb-4">
                                Contact Us
                            </h6>
                            <p class="mb-4">
                                <a href="#!" class="text-white">+49/162/2589</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!" class="text-white">hello@tomorrow-school-org</a>
                            </p>
                            <p class="mb-4">
                                <a href="#!" class="text-white">www.hello@tomorrow-school-org</a>
                            </p>
                            <div className='flex gap-5'>
                                <p>
                                    <a href="#!" class="text-black">
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="twitter"
                                            class="w-8 h-full bg-white p-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                            ></path>
                                        </svg>
                                    </a>
                                </p>
                                <p>
                                    <a href="" className='text-black'>
                                        <svg aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="facebook-f"
                                            class="w-8 h-full bg-white p-2"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                            ></path>
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="">
                            <h6 class="uppercase font-semibold mb-4 flex  md:justify-start">
                                Newsletter
                            </h6>
                            <form onSubmit={handleSubmit}>
                                <p class="flex items-center md:justify-start mb-4">
                                    <div>
                                        <input onChange={handleVal} type="text" name='first_name' id="first_name" class="ring-2 focus:outline-none ring-gray-500 p-2 text-black " placeholder="first name" required />
                                    </div>
                                </p>
                                <p class="flex items-center md:justify-start mb-4">
                                    <div>

                                        <input onChange={handleVal} type="text" name='last_name' id="last_name" class="ring-2 focus:outline-none ring-gray-500 p-2 text-black " placeholder="last name" required />
                                    </div>
                                </p>
                                <p class="flex items-center md:justify-start mb-4">
                                    <div>

                                        <input onChange={handleVal} type="email" id="email" name='email' class="ring-2 focus:outline-none ring-gray-500 p-2 text-black " placeholder="your email address" required />
                                    </div>
                                </p>

                                <p>
                                    <button class="rounded-none bg-[#f7b944] p-2" type='submit'>Subscribe</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <hr className='pb-4' />
                    <img src={footerImg} alt="" />
                </div>
            </footer>

        </div>
    );
};

export default Footer;