import React from "react";

const Menuitem = ({ item }) => {
  const { image, price, name, des, category } = item;
  return (
    <div>
      <div className=" space-x-4 mb-5 items-center">
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="mx-auto w-full hover:scale-105 transition-all duration-300"
          />
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{name}</h4>

            <div className="flex justify-between">
              <p className="text-black/50">{category}</p>
              <p className="font-semibold">${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuitem;
