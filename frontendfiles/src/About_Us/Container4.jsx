import React from 'react'
import '../index.css';
import Img1 from './Resource/LOGO_PITCHDAY-02-min.png';
import Img2 from './Resource/png-transparent-2.png';


const Container4 = () => {
  return (
    <div className='h-auto w-full flex flex-row flex-wrap justify-center items-center pt-20 pb-20'>
        <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='h-[20rem] w-auto justify-center text-3xl font-bold'>Our partners</h1>
        </div>
        <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center pt-20s'>
        <img className='h-auto w-[16rem]' src={Img1} alt="" />
        </div>
        <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center pt-20'>
        <img className='h-auto w-[16rem]' src={Img2} alt="" />
        </div>
    </div>
  )
}

export default Container4
