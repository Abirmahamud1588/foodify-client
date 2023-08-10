import React from 'react';

const Cover = ({bgimg , coverheading, coverdetails}) => {
    return (
        <div>
               <div
        className="hero  mb-10"
        style={{ backgroundImage: `url(${bgimg})` , backgroundSize:'cover' , backgroundPosition:'center' , padding:'100px'}}
      >
        <div className="hero-overlay bg-black bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content p-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-yellow-400 font-bold">{coverheading}</h1>
            <p className="mb-5 text-yellow-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              {coverdetails}
            </p>
          
          </div>
        </div>
      </div>
        </div>
    );
};

export default Cover;