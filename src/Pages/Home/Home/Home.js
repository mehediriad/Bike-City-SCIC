import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BikeGallery from '../BikeGallery/BikeGallery';
import FeaturedBike from '../FeaturedBike/FeaturedBike';
import MiddleBanner from '../MiddleBanner/MiddleBanner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
             <Header></Header>
            <Banner></Banner>
            <FeaturedBike></FeaturedBike>
            <MiddleBanner></MiddleBanner>
            <BikeGallery></BikeGallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;