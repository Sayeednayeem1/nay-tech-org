import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from "react-icons/ai";
import Img1 from '../../../assets/images/paperboat.png';

const Header = () => {

    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    }

    const headerItems = <>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li className="relative" onClick={toggleSubMenu}>
            <a href="#" className="cursor-pointer"><p>Services</p> <AiOutlineArrowDown></AiOutlineArrowDown></a>
            <ul className={`absolute left-0 bottom-0 mt-2  w-60 bg-white rounded-md shadow-lg ${showSubMenu ? 'block' : 'hidden'}`}>
                <li><Link to='/allServices'>All Services</Link></li>
                <li><Link to='/development'>Web/Mobile App Development</Link></li>
                <li><Link to='/businessManagement'>Business Management</Link></li>
                <li><Link to='/digitalMarketing'>Digital Marketing</Link></li>
            </ul>
        </li>
        <li> <Link to='/ourPartners'>Our Partners</Link></li>
        <li> <Link to='/contactUs'>Contact Us</Link></li>
    </>
    return (
        <div className='mx-4 md:mx-36'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {headerItems}
                        </ul>
                    </div>
                    <div className="avatar hidden md:block">
                        <div className="w-24 rounded-full">
                            <img src={Img1} alt=''/>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {headerItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/contactDev' className="btn btn-outline btn-secondary">Contact Developer</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;