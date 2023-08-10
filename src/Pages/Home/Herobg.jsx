import React from 'react';
import bgimg from '../../assets/home/chef-service.jpg';

const Herobg = () => {
  return (
    <div>
      <div
        className="hero "
        style={{ backgroundImage: `url(${bgimg})` , backgroundSize:'cover' , backgroundPosition:'center' , padding:'100px'}}
      >
        <div className="hero-overlay bg-white bg-opacity-100"></div>
        <div className="hero-content text-center text-neutral-content p-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-yellow-400 font-bold">Hello there</h1>
            <p className="mb-5 text-yellow-600">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobg;
