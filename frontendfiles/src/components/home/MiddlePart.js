import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../Contract_Us/images-06.jpg';
import img from '../../images/images-03.jpg';
const MiddlePart = () => {
    return (
        <>
            <div className='mt-10 flex gap-10 flex-wrap flex-row items-center text-left container mx-auto'>
                <div>
                    <iframe width="550" height="350" src="https://www.youtube.com/embed/_Id9yqJUNNw" title="The Tomorrow School - Our Story" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className='lg:w-1/2 w-full'>
                    <p className='text-5xl font-bold mb-4'>The Tomorrow School e.V.
                        What we do</p>
                    <p>is a German non-profit organization with the purpose of improving the education environment of children in Ethiopia.
                        <br />
                        To empower the children to pursue their dreams, we want to give them a headstart on the basis of their education built on four initial programs.
                        Read more about each of our programs.</p>
                </div>
            </div>
            <div className='bg-[#fab811] text-left p-10 mt-4 w-full lg:w-4/5'>
                <div className='flex justify-around items-center'>
                    <p className='text-4xl text-[#2e353e] font-bold'>How can <br /> you help?</p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Make <br />a donation </p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Donate <br />
                        your birthday
                    </p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Sponcer <br />a project</p>
                </div>
            </div>

            <div className=' w-full  flex flex-wrap flex-row justify-center items-center'>

                <div className='h-full sm:w-full md:w-full p-5 h-auto lg:h-[30rem] w-full flex flex-wrap flex-row justify-between items-center'>
                    <div className='text-left lg:w-1/2 p-10 md:w-full sm:w-full flex flex-col justify-start flex-wrap items-start' >
                        <p className='text-2xl font-bold'> Do the difficult things while they are easy and do the great things while they are small.
                            A journey of a thousand miles must begin with a single step.

                            </p>
                            -Lao Tzu-
                        <p className='text-xl mt-4'>While our mission embraces to provide educational foundation for every child in Ethiopia, we’re kicking-off our first projects with the Woliso Liben Elementary School in the in the Oromia region, Ethiopia. Why?
                        <Link to="/aboutus" className='font-bold text-[#fab811]'>Read our story here.</Link>
                        </p>
                    </div>

                    <div className=' lg:w-1/2 md:w-full sm:w-full flex flex-col justify-end flex-wrap items-end' >
                        <img src={img} className='h-full sm:w-full md:w-full p-5' alt="" srcset="" />
                    </div>

                </div>
            </div>
            <div className=' w-full flex flex-wrap flex-row lg:p-[5rem] justify-center items-center'>
      <div className='flex justify-start flex-col items-start w-full p-10 lg:pl-[15rem]'>
        <h1 className='text-4xl font-bold font-serif'>Get in touch</h1>
        <p className='text-xl font-serif'>Contact us. We’d love to hear from you.</p>
      </div>
      <div className='h-auto lg:h-[30rem] w-full flex flex-wrap flex-row justify-between items-center'>

        <div className=' lg:w-1/2 md:w-full sm:w-full flex flex-col justify-end flex-wrap items-end' >
            <img src={img2} className='h-full lg:w-2/3 sm:w-full md:w-full p-5' alt="" srcset="" />
        </div>
        <div className=' lg:w-1/2 p-10 md:w-full sm:w-full flex flex-col justify-start flex-wrap items-start' >
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 ' type="text" name="" id="" placeholder='Enter name'/>
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 ' type="text" name="" id="" placeholder='Enter Email'/>
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-[10rem] m-2 ' type="textarea" name="" id="" placeholder='Enter message'/>
            <input className='rounded-md w-[7rem] h-[2.5rem] hover:bg-yellow-500 hover:text-white border-2 border-yellow-500 m-2 ' type="submit" value="Submit" />
        </div>
      </div>
    </div>
        </>
    );
};

export default MiddlePart;