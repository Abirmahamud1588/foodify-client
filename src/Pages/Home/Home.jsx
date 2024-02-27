import React from "react";
import Banner from "./Banner";
import Catmenu from "./Catmenu";
import Herobg from "./Herobg";
import Popularmenu from "./Popularmenu";
import Fetaured from "./Fetaured";
import Review from "./Review";
import Newsletter from "./Newsletter";
import BestSellers from "./BestSellers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="max-w-screen-xl mx-auto">
        <Catmenu></Catmenu>
      </div>
      <Fetaured></Fetaured>
      <div className="max-w-screen-xl mx-auto">
        <BestSellers></BestSellers>

        <Review></Review>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
