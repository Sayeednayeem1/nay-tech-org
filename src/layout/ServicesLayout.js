import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Test from '../Pages/Shared/Test/Test';

const ServicesLayout = () => {
    return (
        <div>
            <Test></Test>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ServicesLayout;