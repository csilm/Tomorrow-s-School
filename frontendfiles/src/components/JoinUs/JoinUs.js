import React from 'react';
import donateImg1 from '../../images/images-01-min.jpg';
import donateHoverImg from '../../images/Capture1.png';
import birthHoverImg from '../../images/Capture7.png';
import birthImg from '../../images/images-02-min.png';
import fundraisingImg from '../../images/images-03-min.png';
import fundraisingHoverImg from '../../images/images-18.jpg';
import doSomethingImg from '../../images/images-10.jpg';
import doSomethingHoverImg from '../../images/images-18.jpg';


const JoinUs = () => {
    
    return (
        <>
            <div className=' grid grid-cols-2 border-2'>
                <div className='group'>
                   
                        <img src={donateImg1} className="group-hover:hidden" alt="" />
                        <img src={donateHoverImg} className="hidden group-hover:block" alt="" />
                 
                    

                </div>
                <div className='text-left flex items-center ml-20 mr-10'>
                    <div>
                        <p class=' text-4xl font-bold'>Donate</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="rounded-lg mt-10 p-4 hover:text-white font-bold bg-[#fab811]">Donate Now</button>

                    </div>

                </div>
            </div>


            <div className=' grid grid-cols-2'>
                <div className=' flex items-center text-left'>
                    <div className='ml-20 mr-10'>
                        <p class=' text-4xl font-bold'>Donate Your Birthday</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7">Pledge your birthday</button>

                    </div>
                </div>
                <div className='group'>
                   
                   <img src={birthImg} className="group-hover:hidden" alt="" />
                   <img src={birthHoverImg} className="hidden group-hover:block" alt="" />
             

           </div>
            </div>


            <div className='grid grid-cols-2'>
                <div className='group'>
                <img src={fundraisingImg} className="group-hover:hidden" alt="" />
                <img src={fundraisingHoverImg} className="hidden group-hover:block" alt="" />

                </div>

                <div className='text-left flex items-center ml-20 mr-10'>
                    <div>
                        <p class=' text-4xl font-bold'>Donate Your Birthday</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7">Start Campaign</button>

                    </div>

                </div>

            </div>


            <div className='grid grid-cols-2'>
                <div className='text-left flex items-center ml-20 mr-10'>
                    <div>
                        <p class=' text-4xl font-bold'>Sponsar <br /> a project</p>
                        <p className='mt-8 text-xl'>You can choose to sponsor a whole project or parts of a bigger initiative like the build of a new and improved water resource or the construction of the school sanitary facilities. The costs vary depending on the project and start from 5,000 €. Once you've made your gift, we'll pair it with an appropriate project (or projects).</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7 hover:bg-[#fab811] hover:text-white hover:border-0">Contact us for more info</button>

                    </div>
                </div>
                <div>
                <img src={doSomethingImg} className="group-hover:hidden" alt="" />
                   <img src={doSomethingHoverImg} className="hidden group-hover:block" alt="" />

                </div>
            </div>



            <div className='grid grid-cols-2'>
                <div>
                    <img src={donateImg1} alt="" />
                </div>
                <div className='text-left flex items-center ml-20 mr-10'>
                    <div>
                        <p class=' text-4xl font-bold'>Donate Your Birthday</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7">Start Campaign</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default JoinUs;