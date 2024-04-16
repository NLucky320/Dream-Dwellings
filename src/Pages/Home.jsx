import React from 'react';
import Banner from '../components/Banner';
import Estates from '../components/Estates';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='mt-16 mx-2'>
            <Helmet>
              <title>Dream Dwellings | Home</title>  
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;