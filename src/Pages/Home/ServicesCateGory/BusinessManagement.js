import React from 'react';
import Image1 from '../../../assets/images/BusinessManagement/Image1.svg';
import Image2 from '../../../assets/images/BusinessManagement/Image2.svg';
import Image3 from '../../../assets/images/BusinessManagement/Image3.svg';
import Image4 from '../../../assets/images/BusinessManagement/Image4.svg';

const BusinessManagement = () => {
    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='text-center mb-8'>
                <p className='text-orange-600 mb-4'>Business Management</p>
                <h1 className='font-bold text-2xl opacity-70'>Offering A Wide Range Of Professional Services</h1>
            </div>
            <div className='mx-4 md:mx-0'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='mr-0 md:mr-28'>
                        <div className='grid grid-cols-1 gap-2'>
                            <div className='flex flex-col md:flex-row items-center'>
                                <div className='shadow-xl p-4 mr-0 md:mr-2 bg-white mb-2 md:mb-0 rounded-xl h-60 md:h-36 w-80'>
                                    <img className='digital-mark-image container mx-auto mb-2' src={Image1} alt="" />
                                    <p className='text-center'>ERP Software</p>
                                </div>
                                <div className='shadow-xl px-6 py-8 bg-white rounded-xl'>
                                    <p className=''>ERP systems support all aspects of financial management, human resources, supply chain management, and manufacturing with your core accounting function.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <div className='shadow-xl p-4 mr-0 md:mr-2 bg-white mb-2 md:mb-0 rounded-xl h-60 md:h-36 w-80'>
                                    <img className='digital-mark-image container mx-auto mb-2' src={Image2} alt="" />
                                    <p className='text-center'>ERP Software</p>
                                </div>
                                <div className='shadow-xl px-6 py-8 bg-white rounded-xl'>
                                    <p className=''>ERP systems support all aspects of financial management, human resources, supply chain management, and manufacturing with your core accounting function.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <div className='shadow-xl p-4 mr-0 md:mr-2 bg-white mb-2 md:mb-0 rounded-xl h-60 md:h-36 w-80'>
                                    <img className='digital-mark-image container mx-auto mb-2' src={Image3} alt="" />
                                    <p className='text-center'>ERP Software</p>
                                </div>
                                <div className='shadow-xl px-6 py-8 bg-white rounded-xl'>
                                    <p className=''>ERP systems support all aspects of financial management, human resources, supply chain management, and manufacturing with your core accounting function.</p>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <div className='shadow-xl p-4 mr-0 md:mr-2 bg-white mb-2 md:mb-0 rounded-xl h-60 md:h-36 w-80'>
                                    <img className='digital-mark-image container mx-auto mb-2' src={Image4} alt="" />
                                    <p className='text-center'>ERP Software</p>
                                </div>
                                <div className='shadow-xl px-6 py-8 bg-white rounded-xl'>
                                    <p className=''>ERP systems support all aspects of financial management, human resources, supply chain management, and manufacturing with your core accounting function.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/109119"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessManagement;