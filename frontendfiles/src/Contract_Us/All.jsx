import React from 'react'
import Img from './images-06.jpg'

const All = () => {
  return (
    <div className=' w-full flex flex-wrap flex-row lg:p-[5rem] justify-center items-center'>
      <div className='flex justify-start flex-col items-start w-full p-10 lg:pl-[15rem]'>
        <h1 className='text-4xl font-bold font-serif'>Get in touch</h1>
        <p className='text-xl font-serif'>Contact us. We’d love to hear from you.</p>
      </div>
      <div className='h-auto lg:h-[30rem] w-full flex flex-wrap flex-row justify-between items-center'>

        <div className=' lg:w-1/2 md:w-full sm:w-full flex flex-col justify-end flex-wrap items-end' >
            <img src={Img} className='h-full lg:w-2/3 sm:w-full md:w-full p-5' alt="" srcset="" />
        </div>
        <div className=' lg:w-1/2 p-10 md:w-full sm:w-full flex flex-col justify-start flex-wrap items-start' >
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 ' type="text" name="" id="" placeholder='Enter name'/>
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-14 m-2 ' type="text" name="" id="" placeholder='Enter Email'/>
            <input className='rounded-md w-full border-2 border-gray-500 lg:w-3/4 p-5 h-[10rem] m-2 ' type="textarea" name="" id="" placeholder='Enter message'/>
            <input className='rounded-md w-[7rem] h-[2.5rem] hover:bg-yellow-500 hover:text-white border-2 border-yellow-500 m-2 ' type="submit" value="Submit" />
        </div>
      </div>
    </div>
  )
}

export default All
