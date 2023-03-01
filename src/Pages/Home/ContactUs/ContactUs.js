import React from 'react';
import EmailUs from '../Email/EmailUs';

const ContactUs = () => {

    return (
        <div>
            <div className=' py-10 mt-16'>
                <div className='mx-4 md:mx-36'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='shadow-xl p-4 rounded-xl  mr-0 md:mr-28'>
                            <div className='text-center mb-8'>
                                <h1 className='text-2xl opacity-60'>Contact With Us</h1>
                                <p className=' opacity-60'>We are here to help you. Please feel free to contact us with your queries.</p>
                            </div>
                            <div>
                                <p className='text-black opacity-50'>Please Enter Your Name</p>
                                <input type="text" placeholder="Your Name" className="input w-full border-black opacity-50 md:w-[800px] mb-2" />
                                <p className='text-black opacity-50'>PLease Enter Your Phone Number</p>
                                <input type="text" placeholder="Your Phone Number" className="input w-full border-black opacity-50 mb-2" />
                                <p className='text-black opacity-50 mb-2' >PLease Enter Your Email Address</p>
                                <input type="text" placeholder="Your Email Address" className="input w-full border-black opacity-50 mb-4" />
                                <div>
                                    <textarea className="textarea w-full border-black opacity-50" placeholder="Description"></textarea>
                                </div>
                                <button className='btn bg-red-400 border-none mt-4'>Send Message</button>
                            </div>
                        </div>
                        <div>
                            <iframe className='banner-animation' src="https://embed.lottiefiles.com/animation/95247"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <EmailUs></EmailUs>
            </div>
        </div>
    );
};

export default ContactUs;