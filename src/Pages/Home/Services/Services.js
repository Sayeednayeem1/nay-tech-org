import React from 'react';
import Image1 from "../../../assets/images/Image1.svg";
import Image2 from "../../../assets/images/Image2.svg";
import Image3 from "../../../assets/images/Image3.svg";
import Image4 from "../../../assets/images/Image4.svg";
import Image5 from "../../../assets/images/Image5.svg";
import Image6 from "../../../assets/images/Image6.svg";

const Services = () => {
    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mr-0 md:mr-20'>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image1} alt="" />
                        <p>Developer</p>
                    </div>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image2} alt="" />
                        <p>Business Management</p>
                    </div>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image3} alt="" />
                        <p>Digital marketing</p>
                    </div>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image4} alt="" />
                        <p>E-commerce Solution</p>
                    </div>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image5} alt="" />
                        <p>Affiliate Marketing Solution</p>
                    </div>
                    <div className="bg-orange-200 shadow-xl p-10 rounded-lg">
                        <img className='mb-4 this-test' src={Image6} alt="" />
                        <p>Ad Network Solution</p>
                    </div>
                </div>
                <div>
                    <p className='text-orange-600'>How can we help you?</p>
                    <h1>You name it, We will do it</h1>
                    <p className='responsive-lines'>Our versatile and super-talented tech team can provide solutions to your needs</p>
                    <button className='btn bg-orange-600 text-white font-bold border-none'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Services;