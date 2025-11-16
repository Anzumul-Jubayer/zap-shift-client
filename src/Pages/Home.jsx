import React from 'react';
import Banner from '../Components/Home/Banner';
import HowItWorks from '../Components/Home/HowItWorks';
import OurServices from '../Components/Home/OurServices';
import Brands from '../Components/Home/Brands';
import ServiceFeatures from '../Components/Home/ServiceFeatures';
import SatisfactionSection from '../Components/Home/SatisfactionSection';
import Reviews from '../Components/Home/Review/Reviews';
import FAQ from '../Components/Home/FAQ';

const reviewsPromise=fetch('/reviews.json').then(res=>res.json())





const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <Brands/>
            <ServiceFeatures/>
            <SatisfactionSection/>
            <Reviews reviewsPromise={reviewsPromise} />
            <FAQ/>
        </div>
    );
};

export default Home;