import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";
import OurPartners from "../Pages/Home/OurPartners/OurPartners";


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
                path:'/about',
                element: <About></About>
            },
            {
                path: '/ourPartners',
                element: <OurPartners></OurPartners>
            }
        ]
    }
])