import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const OurPartners = () => {
    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='mr-0 md:mr-28'>
                    <h1 className='text-5xl mb-6'>Partners</h1>
                    <p className='mb-6'>Our industrial collaborators constitute an essential component of our information technology firm.<br/> They are some of the most forward-thinking and well-respected businesses in the industry, which <br/> enables us to provide our clients with the very finest goods and services that are currently on the <br/> market.</p>
                    <button className=' text-white font-bold border-none flex items-center'><p className='mr-4'>Learn More</p> <HiArrowNarrowRight /> </button>
                </div>
                <div>
                    <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/98636"></iframe>
                </div>
            </div>
            <div>
                <p>Our Partners</p>
                <h1>Some of our great partners</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default OurPartners;