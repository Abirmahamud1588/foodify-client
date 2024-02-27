import React from "react";
import Menuitem from "../../Shared/Menuitem/Menuitem";
import { Link } from "react-router-dom";

const Difmenu = ({ item, title }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-4 gap-4 m-10">
        {item.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
      <div className="flex justify-center text-center mb-6 ">
        <Link to={`/order/${title}`}>
          <button className="btn  bg-black text-white px-6 py-2 font-semibold flex gap-2 items-center rounded-sm hover:bg-black hover:text-white mb-10 ">
            {" "}
            View Full Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Difmenu;
