import React from 'react';
import Sectiontitle from '../../Componetnts/Sectiontitle';
import sideimg from '../../assets/home/featured.jpg';
const Fetaured = () => {
    return (
        <div>

            <Sectiontitle  heading={'Featured It Of Us'} subheading={'Check It Now'}  ></Sectiontitle>

            <div className='md:flex items-center space-x-8 my-10 '>
                <div>
                    <img src={sideimg} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl text-yellow-700 my-10 font-semibold'>Where Can I Get It ?</h1>
                    <p className='text-xl text-yellow-400 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla earum deleniti veniam dignissimos molestiae porro ut dolorum, alias itaque dolorem repudiandae quisquam quaerat placeat totam sequi sunt atque quam natus.</p>
                </div>
            </div>

        </div>
    );
};

export default Fetaured;