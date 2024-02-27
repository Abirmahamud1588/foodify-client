import React from "react";

const Sectiontitle = ({ heading, subheading }) => {
  return (
    <div className="mx-auto md:w-3/12  text-center">
      <p className="text-xl text-black-300 mb-3"> --- {subheading} ---</p>
      <h1 className="md:3/12 text-4xl text-black-600 py-4 border-y-2	">
        {heading}
      </h1>
    </div>
  );
};

export default Sectiontitle;
