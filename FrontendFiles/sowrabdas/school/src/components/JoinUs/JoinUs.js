import React from 'react';
import donateImg1 from '../../images/images-01-min.jpg';
import donateHoverImg from '../../images/Capture1.png';
const JoinUs = () => {
    return (
        <>
            <div className='gap-20 grid grid-cols-2 container'>
                <div>
                    {
                        onmouseleave ?
                        <img src={donateHoverImg} className="" alt="" />:
                            <img src={donateImg1} className="" alt="" /> 
                    }
                    {/*<img src={donateImg1} className="block hover:hidden" alt="" />*/}
                    

                </div>
                <div className=' flex items-center '>
                    <div>
                        <p class=' text-4xl font-bold'>Donate</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="rounded-lg mt-10 p-4 hover:text-white font-bold bg-[#fab811]">Donate Now</button>

                    </div>

                </div>
            </div>


            <div className='gap-20 grid grid-cols-2 ml-10'>
                <div className=' flex items-center '>
                    <div>
                        <p class=' text-4xl font-bold'>Donate Your Birthday</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7">Pledge your birthday</button>

                    </div>
                </div>
                <div>
                    <img src={donateImg1} alt="" />

                </div>
            </div>


            <div className='gap-20 grid grid-cols-2 container'>
                <div>
                    <img src={donateImg1} alt="" />

                </div>
                <div className=' flex items-center'>
                    <div>
                        <p class=' text-4xl font-bold'>Donate Your Birthday</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7">Start Campaign</button>

                    </div>

                </div>

            </div>


            <div className='gap-20 grid grid-cols-2 ml-10'>
                <div className=' flex items-center '>
                    <div>
                        <p class=' text-4xl font-bold'>Sponsar <br /> a project</p>
                        <p className='mt-8 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minima obcaecati quam consequuntur, nam iure tenetur vitae totam
                            <span className='font-bold'>velit debitis aut magnam! Quod, labore nobis! Possimus nam velit nobis quae explicabo a illo molestiae ratione officia,</span>
                            cumque dolor vel, amet excepturi consequatur aperiam labore, ad doloribus? Mollitia minus ab eaque.</p>
                        <button className="border-2 rounded-md font-bold mt-8 border-black p-4 pl-7 pr-7 hover:[bg-[#fab811] text-white]">Contact us for more info</button>

                        
                    </div>
                </div>
                <div>
                    <img src={donateImg1} alt="" />

                </div>
            </div>



            <div className='gap-20 grid grid-cols-2 container'>
                <div>
                    <img src={donateImg1} alt="" />
                </div>
                <div className=' flex items-center'>
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