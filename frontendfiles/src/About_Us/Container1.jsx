import React from 'react';
import '../index.css';
import Img from './Resource/Primary_Schools_in_Bangladesh_to_Go_Digital.jpg';
const Container1 = () => {
  return (
    <div className='h-full w-full'>
       <img className='object-contain object-center h-full w-full' src={Img} alt="" />
    </div>
  )
}

export default Container1
