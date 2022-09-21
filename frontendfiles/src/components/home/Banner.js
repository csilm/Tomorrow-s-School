import React from 'react';
import img1 from '../../images/image2.png';
import img2 from '../../images/images-02.jpg';
import img3 from '../../images/images-03.jpg';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,

  //cssEase: "linear"
};
const Banner = () => {


  return (
    <>

      <div >
        <Carousel className='' autoPlay infiniteLoop showArrows={false}
          showStatus={false} showThumbs={false}>

          <div className='relative'>
            <div className='absolute right-72 top-72 translate-pl-42 translate-x-72'>
              <h2 className='text-white text-5xl font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id omnis iusto,
              </h2>
              <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae,</p>
              <Link to="/donate"><button className="rounded-lg mt-10 p-4 hover:text-white font-bold bg-[#fab811]">Donate Now</button></Link>
            </div>
            <img src={img1} />

          </div>
          <div className='relative'>
            <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
              <h2 className='text-black text-5xl font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id omnis iusto,
              </h2>
              <p className='text-black mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae,</p>
              <Link to="/donate"> <button className="rounded-lg mt-10 p-4 hover:text-white font-bold bg-[#fab811]">What we do</button></Link>
            </div>
            <img src={img3} />

          </div>
          <div className='relative'>
            <div className='absolute top-72 left-0 translate-y-42  mr-72'>
              <h2 className='text-white text-5xl font-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, id omnis iusto,
              </h2>
              <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae,</p>
              <button className="rounded-lg mt-10 p-4 hover:text-white font-bold bg-[#fab811]">Doante</button>
            </div>
            <img src={img2} />

          </div>

        </Carousel>

      </div>
    </>
  );
};

export default Banner;