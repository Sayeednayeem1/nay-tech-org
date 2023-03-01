import React, { useEffect } from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import BusinessManagement from './BusinessManagement';
import Development from './Development';
import DigitalMarketing from './DigitalMarketing';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllServices = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <div className=' py-10 mt-16'>
            <div className='mx-4 md:mx-36' data-aos='zoom-in'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='mr-0 md:mr-28'>
                        <p className='mb-4 text-3xl font-bold opacity-90'>Services</p>
                        <p className="mb-6">Nay Tech Org provides wide ranges of business solutions. Our services include mobile <br /> and web development, business management solutions, digital marketing solutions, affiliate <br /> marketing solutions, e-commerce solutions and advertising tech solutions. Through our highly <br /> experienced professionals, we strive to provide you with quality work while maintaining a high level <br /> of professionalism during the entire process</p>
                        <a className='font-bold border-none flex items-center' href="/"><p className='mr-4'>Learn More</p>  <HiArrowNarrowRight /></a>
                    </div>
                    <div>
                        <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/88930"></iframe>
                    </div>
                </div>
            </div>
            <div>
                <Development></Development>
                <BusinessManagement></BusinessManagement>
                <DigitalMarketing></DigitalMarketing>
            </div>
        </div>
    );
};

export default AllServices;