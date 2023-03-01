import React from 'react';

const About = () => {
    return (
        <div className=' py-10 mt-16'>
            <div className='mx-4 md:mx-36'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='mr-0 md:mr-28'>
                        <p className='mb-4'>About Company</p>
                        <h1 className='mb-4 font-bold text-2xl text-black '>We believe, one idea begets others, but one great idea stays stronger above all.</h1>
                        <p className="mb-6">We provide AI-powered marketing-tech solutions. 360-degree solutions to simplify your business <br /> experience. Our solutions are purpose-driven, performance-oriented, and advised by respected <br /> industry experts. We stand out by launching the correct technology with proper communication <br /> integration.</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Product Engineering</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> IT Consultancy</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Automated Software</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Digital Services</p>
                    </div>
                    <div>
                        <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/88930" title='coding image'></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;