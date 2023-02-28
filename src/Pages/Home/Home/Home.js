import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CompletedServices from '../CompletedServices/CompletedServices';
import ContactUs from '../ContactUs/ContactUs';
import EmailUs from '../Email/EmailUs';
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
            <ContactUs></ContactUs>
            <EmailUs></EmailUs>
        </div>
    );
};

export default Home;