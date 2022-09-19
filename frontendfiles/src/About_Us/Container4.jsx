import React from 'react'
import '../index.css';
import Img1 from './Resource/LOGO_PITCHDAY-02-min.png';
import Img2 from './Resource/png-transparent-2.png';


const Container4 = () => {
  return (
    <div className='h-auto lg:h-[15rem] overflow-hidden w-full flex flex-row flex-wrap justify-center items-center'>
        <div className='h-auto lg:w-1/4 sm:w-full m-2 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='h-[15rem] w-auto flex justify-center items-center text-3xl font-bold sm:p-20'>Our partners</h1>
        </div>
        <div className='h-auto lg:w-1/4 sm:w-full flex flex-row flex-wrap justify-center items-center sm:p-20'>
        <img className='h-auto w-[16rem]' src={Img1} alt="" />
        </div>
        <div className='h-auto lg:w-1/4 sm:w-full flex flex-col flex-wrap justify-center items-center sm:p-20'>
        <img className='h-auto w-[10rem]' src={Img2} alt="" />
        </div>
       
    </div>
  )
}

export default Container4
