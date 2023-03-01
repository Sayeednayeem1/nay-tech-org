import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EmailUs = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <div>
            <div className=' py-10 mt-16 bg-red-400' data-aos='fade-left'>
                <div className='mx-4 md:mx-36'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='mr-0 md:mr-28'>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid h-20 card">
                                    <div>
                                        <h1 className='text-2xl text-white font-bold'>Subscribe to our Newsletter</h1>
                                        <p className='text-white'>Stay up to date with the latest news, announcements, job posts, and articles.</p>
                                    </div>
                                </div>
                                <div className="divider text-white">OR</div>
                                <div className="grid h-20 card">
                                    <a className=' text-white font-bold border-none flex items-center shadow-2xl w-28 h-10' href="mailto:sayeedn850@gmail.com"><p className='mr-4'>Email Us</p>  <HiArrowNarrowRight /></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                                <button className='btn bg-red-400 border-none ml-2 shadow-xl'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailUs;