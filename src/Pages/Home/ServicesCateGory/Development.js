import React from 'react';
import Image1 from "../../../assets/images/Dev1.svg";
import Image2 from "../../../assets/images/Dev2.svg";
import Image3 from "../../../assets/images/Dev3.svg";
import Image4 from "../../../assets/images/Dev14.svg";
import Image5 from "../../../assets/images/Dev5.svg";
import Image6 from "../../../assets/images/Dev6.svg";
import Image7 from "../../../assets/images/Dev7.svg";
import Image8 from "../../../assets/images/Dev8.svg";
import Image9 from "../../../assets/images/Dev9.svg";
import Image10 from "../../../assets/images/Dev10.svg";
import Image11 from "../../../assets/images/Dev11.svg";
import Image12 from "../../../assets/images/Dev12.svg";
import Image13 from "../../../assets/images/Dev13.svg";
import Image14 from "../../../assets/images/Dev15.svg";
import Image15 from "../../../assets/images/Dev18.svg";
import Image16 from "../../../assets/images/Dev19.svg";

const Development = () => {
    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='text-center mb-8'>
                <p className='text-orange-600 mb-4'>SERVICES WE PROVIDE</p>
                <h1 className='font-bold text-2xl opacity-70'>Offering A Wide Range Of Professional Services</h1>
            </div>
            <div>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mr-0 md:mr-12 md:px-0 px-4'>
                        <div className="shadow-xl p-8 rounded-lg bg-white ">
                            <img className='mb-4 development-card-img container mx-auto' src={Image1} alt="" />
                            <p className='text-center'>Website Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image2} alt="" />
                            <p className='text-center'>Newspaper Website</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image3} alt="" />
                            <p className='text-center'>WordPress Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image4} alt="" />
                            <p className='text-center'>Web Design</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image5} alt="" />
                            <p className='text-center'>Cloud & Cyber Security</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image6} alt="" />
                            <p className='text-center'>Chat Bots</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image7} alt="" />
                            <p className='text-center'>iOS App Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image8} alt="" />
                            <p className='text-center'>Android App Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image9} alt="" />
                            <p className='text-center'>Food Delivery App</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image10} alt="" />
                            <p className='text-center'>Tracking App</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image11} alt="" />
                            <p className='text-center'>Blockchain Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image12} alt="" />
                            <p className='text-center'>Web Application</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image13} alt="" />
                            <p className='text-center'>Website Redesign</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image14} alt="" />
                            <p className='text-center'>Website maintenance</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image15} alt="" />
                            <p className='text-center'>UX/UI Development</p>
                        </div>
                        <div className="shadow-xl p-8 rounded-lg bg-white">
                            <img className='mb-4 development-card-img container mx-auto' src={Image16} alt="" />
                            <p className='text-center'>Facebook Applications</p>
                        </div>
                    </div>
                    <div>
                        <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/90189"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Development;