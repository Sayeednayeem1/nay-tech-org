import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='mr-0 md:mr-28'>
                    <p className='text-orange-600 mb-6'>Paving the way through disruptive technologies</p>
                    <h1 className='text-3xl mb-6'>Revolutionizing Your <br /> <span className='text-orange-600'>Business Growth</span></h1>
                    <p className='mb-6 line-number'>Our cutting-edge technology is designed to empower companies to unlock their full potential and <br/> stay ahead of the curve. We are revolutionizing the tech-business ecosystem.</p>
                    <button className='btn bg-orange-600 text-white font-bold border-none mr-2'>Service we provide</button>
                    <button className='btn bg-orange-600 text-white font-bold border-none'>Learn More</button>
                </div>
                <div>
                    <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/135693"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;