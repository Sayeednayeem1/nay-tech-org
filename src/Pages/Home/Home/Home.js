import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CompletedServices from '../CompletedServices/CompletedServices';
import OurPartners from '../OurPartners/OurPartners';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <CompletedServices></CompletedServices>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;