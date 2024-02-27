import React, { useEffect, useState } from "react";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import Menuitem from "../../Shared/Menuitem/Menuitem";

const Popularmenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const populatitem = data.filter(
          (item) => item.status === "Best Selers"
        );
        setMenu(populatitem);
      });
  }, []);
  return (
    <div>
      <section className="my-16">
        <Sectiontitle
          heading={"Popular Now"}
          subheading={"Come and grab it"}
        ></Sectiontitle>
      </section>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {menu.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </div>
  );
};

export default Popularmenu;
