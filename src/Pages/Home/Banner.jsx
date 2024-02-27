import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-[#1E28320D] py-12 xl:px-28 px-4">
      <div className="py-15 max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img
            src={bannerImg}
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className=" bg-black text-white px-6 py-2 font-semibold flex gap-2 items-center rounded-sm">
            <a href="/shop">
              {" "}
              <FaShoppingBag className="inline-flex" /> Shop Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
