import React from 'react'
import Img from './Website-design_3-09.png'

const success = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <div className='h-[35rem] w-[45rem] bg-white flex flex-col flex-wrap justify-center items-center border-4 border-slate-600 '>
      <div className='h-auto w-3/4 text-3xl font-serif pb-5'>
          CERTIFICATE OF APPRECIATION <br />
           <h1 className='text-2xl'>FOR DONATION</h1>
      </div>
      <div className='h-auto w-2/3 text-lg font-sans'>
        Presented to
      </div>
      <div className='h-auto w-2/3 text-4xl font-mono p-2 font-bold'>
       MR Ali
      </div>
      <div className='h-auto w-2/3 text-lg pb-5 '>
      For your generous donation to the <br />
      Tomorrow School Organization
      </div>
      <div className='h-auto w-2/3 font-bold'>
      Date
      </div>
      <div className='h-auto w-2/3 flex justify-center items-center'>
       <img className='h-auto w-[11rem] pt-5' src={Img} alt="" />
      </div>
    </div>
  </div>
  )
}

export default success
