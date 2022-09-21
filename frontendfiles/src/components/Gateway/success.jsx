import React from 'react';
import { Button } from "reactstrap";
import jsPDF from 'jspdf';
import Img from '../Donate/static/Website-design_3-09.png'
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export const Success = () => {
const params= useLocation();

const [data,setData]=useState();
useEffect(()=>{
  const fetch=async()=>{
  await  axios.get(`http://localhost:5000/donation/${params.state.id}`).then(result=>setData(result.data.data[0]));
  }
  fetch();
},[params.state])
  const pdfRef = useRef(null);

  const pdfGenerate = () => {
    const content = pdfRef.current;

    const doc = new jsPDF({
      orientation : 'l',
      unit: 'px',
      format : [745, 590]
    });
    doc.html(content, {
      callback: function (doc) {
        doc.save('sample.pdf');
      }
    });
  };

  return (
    <div>
      <div className='h-screen w-full flex justify-center items-center'>
        <div ref={pdfRef} className='h-[35rem] w-[45rem] m-3 bg-white flex flex-col flex-wrap justify-center items-center border-4 border-slate-600 '>
          <div className='h-auto w-3/4 text-3xl font-serif text-center pb-5'>
            CERTIFICATE OF APPRECIATION <br />
            <h1 className='text-2xl text-center'>FOR DONATION</h1>
          </div>
          <div className='h-auto w-2/3 text-lg text-center font-sans'>
            Presented to
          </div>
          <div className='h-auto w-2/3 text-4xl text-center font-sans p-2 font-bold'>
            {data?.FullName}
          </div>
          <div className='h-auto w-2/3 text-center text-lg pb-5 '>
            For your generous donation to the <br />
            Tomorrow School Organization
          </div>
          <div className='h-auto w-2/3 text-center font-bold'>
            Date : {data?.updatedAt.slice(0,10)}
            <br />
            Time : {data?.updatedAt.slice(11,19)}
          </div>
          <div className='h-auto w-2/3 flex justify-center text-center items-center'>
            <img className='h-auto w-[11rem] pt-5' src={Img} alt="" />
          </div>
        </div>
      </div>
      <Button onClick={pdfGenerate}>Download</Button>
    </div>
  )
}

export default Success;