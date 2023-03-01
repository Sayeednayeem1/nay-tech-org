import React from 'react';
import Img1 from '../../../assets/images/paperboat.png';

const Footer = () => {
    return (
        <div className='mx-4 md:mx-36 mt-32'>
            <footer className="footer p-10  text-base-content shadow-2xl">
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={Img1} alt='' />
                        </div>
                    </div>
                    <p>Nay Tech Org.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;