import React from "react";

const Cover = ({ bgimg, coverheading, coverdetails }) => {
  return (
    <div>
      <div
        className="hero  mb-10"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "190px 100px",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content p-16">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              {coverheading}
            </h1>
            <p className="mb-5 text-white">{coverdetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
