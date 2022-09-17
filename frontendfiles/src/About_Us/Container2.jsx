import React from 'react'
import '../index.css';
import Img1 from './Resource/7756-adb-2014-bgd-aa-d0a8467.jpg';
import Img2 from './Resource/download.jfif';
import Img3 from './Resource/images.jfif';

const Container2 = () => {
  return (
    <div className='flex flex-row flex-wrap h-auto w-full justify-center items-center'>
      <div className='flex flex-row flex-wrap h-auto w-full justify-center items-center'>
        <div className='flex flex-col md:w-fulls lg:w-1/2 mt-10 mb-10 items-center'>
        <h1 className='text-3xl p-5 font-bold'>THE TOMORROW SCHOOL</h1>
        <h3 className='w-[25rem]'>We want to help improve the education environment for children in Bangladesh. And the story starts with Alemayehu, my father.</h3>
        </div>
        <div className='lg:w-1/2 md:w-full'>
        <img className=' w-full' src={Img1} alt="" />
        </div>
        
      </div>
      <div className='flex flex-row-reverse flex-wrap h-auto w-full justify-center items-center'>
      <div className='flex flex-col md:w-fulls lg:w-1/2 mt-10 mb-10 items-center'>
        <h2 className='text-2xl p-5 font-bold'>Education made my father who he is today</h2>
        <p className='w-[35rem]'> an academic, a self-starter, an entrepreneur, a thinker, a reader, a philosopher, a teacher, a traveller, a loving father and grandfather. He has truly lived up to the meaning of his name: Alemayehu – “he who has seen the world”.

          This is my father’s story – and it can be so many other kids’ story as well. Without this school, my father would not have had a better tomorrow, a brighter future. Without this school, I would not be here – and have the chance today to help make the world a little bit better.</p>

        </div>
       
        <div className='md:w-fulls lg:w-1/2'>
        <img src={Img2} className='h-[32rem] w-full' alt="" />
        </div>
      </div>
      <div className='flex flex-row flex-wrap h-auto w-full justify-center items-center'>
      <div className='flex flex-col md:w-fulls lg:w-1/2 mt-10 mb-10 items-center'>
        <h2 className='text-2xl p-5 font-bold'>Education made my father who he is today</h2>
        <p className='w-[35rem] '> an academic, a self-starter, an entrepreneur, a thinker, a reader, a philosopher, a teacher, a traveller, a loving father and grandfather. He has truly lived up to the meaning of his name: Alemayehu – “he who has seen the world”.

          This is my father’s story – and it can be so many other kids’ story as well. Without this school, my father would not have had a better tomorrow, a brighter future. Without this school, I would not be here – and have the chance today to help make the world a little bit better.</p>

        </div>
       <div className='md:w-full lg:w-1/2 '>
       <img src={Img3} className='h-[32rem] w-full' alt="" />
       </div>
    </div>
    </div>
  )
}

export default Container2;
