import React from 'react';
import { BsFillCalendarCheckFill, BsFillBriefcaseFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";

const CompletedServices = () => {
    return (
        <div className='bg-blue-500'>
            <div className='mx-4 md:mx-36 mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-10'>
                    <div className=''>
                        <BsFillCalendarCheckFill className='text-4xl mx-auto text-white' />
                        <h1 className='text-center mt-2 text-white text-2xl font-bold'>120+</h1>
                        <p className='text-center text-white mt-2'>Project completed</p>
                    </div>
                    <div className=''>
                        <GiHamburgerMenu className='text-4xl mx-auto text-white' />
                        <h1 className='text-center mt-2 text-white text-2xl font-bold'>789+</h1>
                        <p className='text-center text-white mt-2'>5 Star Ratings</p>
                    </div>
                    <div className=''>
                        <TbBrandReactNative className='text-4xl mx-auto text-white' />
                        <h1 className='text-center mt-2 text-white text-2xl font-bold'>30+</h1>
                        <p className='text-center text-white mt-2'>Expert Consultants</p>
                    </div>
                    <div className=''>
                        <BsFillBriefcaseFill className='text-4xl mx-auto text-white' />
                        <h1 className='text-center mt-2 text-white text-2xl font-bold'>7+</h1>
                        <p className='text-center text-white mt-2'>Events Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedServices;