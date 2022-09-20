import React from 'react';
import '../index.css';
import Img1 from './Resource/images-08-min-210x284.png';
import Img2 from './Resource/images-06-min-210x284.png';
import Img3 from './Resource/images-07-min-210x284.png';


const Container3 = () => {
  return (
    <div className=' h-auto w-full flex flex-row flex-wrap justify-center items-center bg-yellow-500 pt-20 pb-20'>
      <div className=' h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='text-3xl font-bold p-5'>
        Meet <br />
        our <br />
        team
        </h1>

      </div>
      <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left'>
       <img className='' src={Img1} alt="" />
       <h1 className='text-2xl font-bold p-2'>Mel</h1>
      <h3 className='text-lg font-bold p-2'>Founder and 1. Chairwoman</h3>
      <p className='p-4'>Mel went back to her German-Ethiopian roots and founded the idea of THE TOMORROW SCHOOL to honor her family story and to give back to her heritage. She’s a mother, a daughter, a sister, a traveller, a yogi. Strong-willed and driven she was last seen running her own company as a Digital Marketing Consultant and Project Manager for large brands, start-ups and agencies. Mel lives in Hamburg, Germany.</p>
      </div>
      <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left'>
      <img src={Img2} alt="" />
      <h1 className='text-2xl font-bold p-2 text-left'>Lasse</h1>
      <h3 className='text-lg font-bold p-2'>Co-Founder, 2. Chairman & Legal Advisor</h3>
      <p className='p-4'>Mel went back to her German-Ethiopian roots and founded the idea of THE TOMORROW SCHOOL to honor her family story and to give back to her heritage. She’s a mother, a daughter, a sister, a traveller, a yogi. Strong-willed and driven she was last seen running her own company as a Digital Marketing Consultant and Project Manager for large brands, start-ups and agencies. Mel lives in Hamburg, Germany.</p>
      </div>
      <div className='h-auto lg:w-[22rem] sm:w-full m-2 flex flex-col flex-wrap justify-center items-center text-left'>
      <img src={Img3} alt="" />
      <h1 className='text-2xl font-bold p-2'>Alemayehu</h1>
      <h3 className='text-lg font-bold p-2'>Member of Honor</h3>
      <p className='p-4'>Alex is Melanie’s father and source of heritage, family, vision and inspiration to THE TOMORROW SCHOOL. He encourages and supports the purpose and mission at all times. His story, experience and advice keeps THE TOMORROW SCHOOL always on track to create a better tomorrow with expanded opportunities for the children in Ethiopia. The organization would have never been founded if it wasn’t for him.</p>
      </div>
    </div>
  )
}

export default Container3;