import React from 'react';

const MiddlePart = () => {
    return (
        <>
        <div className='mt-10 flex gap-10 text-left container mx-auto'>
            <div>
                <iframe width="550" height="350" src="https://www.youtube.com/embed/_Id9yqJUNNw" title="The Tomorrow School - Our Story" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div>
                <p className='text-5xl font-bold mb-4'>The Tomorrow School e.V.
                    What we do</p>
                <p>is a German non-profit organization with the purpose of improving the education environment of children in Ethiopia.
                    <br />
                    To empower the children to pursue their dreams, we want to give them a headstart on the basis of their education built on four initial programs.
                    Read more about each of our programs.</p>
            </div>
            </div>
            <div className='bg-[#fab811] text-left p-10 mt-4 w-4/5'>
                <div className='flex justify-around items-center'>
                    <p className='text-4xl text-[#2e353e] font-bold'>How can <br /> you help?</p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Make <br />a donation </p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Donate <br />
                    your birthday
                    </p>
                    <p className='text-3xl border-l-8 border-white-500 p-2'>Sponcer <br />a project</p>
                </div>  
            </div>
            </>
    );
};

export default MiddlePart;