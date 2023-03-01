import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaAddressBook, FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { RxResume } from "react-icons/rx";

const ContactDev = () => {

    return (
        <div className='mx-4 md:mx-36 mt-12'>
            <div className='flex flex-col md:flex-row justify-evenly items-center'>
                <div className='shadow-xl p-10'>
                    <div className='flex items-center'>
                        <FaAddressBook className='text-xl'></FaAddressBook>
                        <h1 className='text-2xl font-bold'>Address</h1>
                    </div>
                    <hr className='border-2 border-secondary rounded-full mb-3' />
                    <p>Sylhet, Bangladesh</p>
                    <div className='flex items-center mt-2'>
                        <BiPhoneCall className='text-xl'></BiPhoneCall>
                        <p className='text-2xl font-bold'>Phone</p>
                    </div>
                    <hr className='border-2 border-secondary rounded-full mb-3' />
                    <p>+8801751589952</p>
                    <div className='flex items-center mt-2'>
                        <HiMail className='text-xl'></HiMail>
                        <h1 className='text-2xl font-bold'>Email</h1>
                    </div>
                    <hr className='border-2 border-secondary rounded-full mb-3' />
                    <p>sayeedn850@gmail.com</p>
                    <div className='flex items-center mt-4'>
                        <a target='_blank' rel='noreferrer' href="https://github.com/Sayeednayeem1" className='text-3xl  mr-4'> <BsGithub></BsGithub></a>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sayeed-nayeem/" className='text-3xl  mr-4'> <AiFillLinkedin></AiFillLinkedin></a>
                        <a target='_blank' rel='noreferrer' href="https://web.facebook.com/sayed.nayem.188/" className='text-3xl  mr-4'> <FaFacebookSquare></FaFacebookSquare></a>
                        <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1KKV1dAsGIhR7HisZgOYCbDbXS9v1-k-V/view?usp=sharing" className='text-3xl '> <RxResume></RxResume> </a>
                    </div>
                </div>
                <div>
                    <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/95247"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactDev;