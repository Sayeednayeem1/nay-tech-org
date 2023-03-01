import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import Img1 from '../../../assets/images/Citizen-Sports.png';
import Img2 from '../../../assets/images/easy-dhaka.png';
import Img3 from '../../../assets/images/Esquire-Electronics.png';
import Img4 from '../../../assets/images/Focallure-Bangladesh-Small-png.png';
import Img5 from '../../../assets/images/geekmart.png';
import Img6 from '../../../assets/images/ihw-.png';
import Img7 from '../../../assets/images/lotto.png';
import Img8 from '../../../assets/images/mz2ewytyscyszqd2wvws.png';
import Img9 from '../../../assets/images/Organic-Online.png';
import Img10 from '../../../assets/images/ovrtesx0lzhzeheynlit.png';
import Img11 from '../../../assets/images/paperboat.png';
import Img12 from '../../../assets/images/PinkFlashBD1.png';

const OurPartners = () => {
    return (
        <div className='mx-2 md:mx-36 mt-12'>
            <div className='flex mt-14 flex-col md:flex-row items-center'>
                <div className='mr-0 md:mr-28'>
                    <h1 className='text-5xl mb-6'>Partners</h1>
                    <p className='mb-6'>Our industrial collaborators constitute an essential component of our information technology firm.<br /> They are some of the most forward-thinking and well-respected businesses in the industry, which <br /> enables us to provide our clients with the very finest goods and services that are currently on the <br /> market.</p>
                    <button className=' text-white font-bold border-none flex items-center'><p className='mr-4'>Learn More</p> <HiArrowNarrowRight /> </button>
                </div>
                <div>
                    <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/98636"></iframe>
                </div>
            </div>
            <div className='mt-12'>
                <p className='text-center text-orange-600'>OUR PARTNERS</p>
                <h1 className='text-center text-2xl font-bold mt-2'>Some of our great partners</h1>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-2 mt-14'>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img1} alt="" />
                    </div><div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img2} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img3} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img4} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img5} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img6} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img7} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img8} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img9} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img10} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img11} alt="" />
                    </div>
                    <div className='bg-white p-2 rounded-lg shadow-xl'>
                        <img src={Img12} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;