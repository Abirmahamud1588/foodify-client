import React from 'react';
import Banner from './Banner';
import Catmenu from './Catmenu';
import Herobg from './Herobg';
import Popularmenu from './Popularmenu';
import Fetaured from './Fetaured';
import Review from './Review';

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Catmenu></Catmenu>
          <Herobg></Herobg>
          <Popularmenu></Popularmenu>
          <Review></Review>
          <Fetaured></Fetaured>
        </div>
    );
};

export default Home;