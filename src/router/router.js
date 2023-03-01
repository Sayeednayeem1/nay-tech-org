import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/Home/About/About";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import OurPartners from "../Pages/Home/OurPartners/OurPartners";
import AllServices from "../Pages/Home/ServicesCateGory/AllServices";
import Development from "../Pages/Home/ServicesCateGory/Development";
import DigitalMarketing from "../Pages/Home/ServicesCateGory/DigitalMarketing";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/ourPartners',
                element: <OurPartners></OurPartners>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/development',
                element: <Development></Development>
            },
            {
                path: '/digitalMarketing',
                element: <DigitalMarketing></DigitalMarketing>
            }
        ]
    },
])