import React from "react";
import Cover from "../../Shared/Cover/Cover";
import bgimg from "../../assets/menu/banner3.jpg";
import bgimg2 from "/banner1.jpg";
import bgimg3 from "/banner2.jpg";
import bgimg33 from "/banner3.png";
import bgimg4 from "../../assets/menu/soup-bg.jpg";
import Difmenu from "./Difmenu";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import useMenu from "../../Hook/useMenu";
const Shop = () => {
  const [menu] = useMenu();
  const Dress = menu.filter((item) => item.category === "Dress");
  const Glasses = menu.filter((item) => item.category === "Glasses");
  const Hoodies = menu.filter((item) => item.category === "Hoodies");
  const Shoe = menu.filter((item) => item.category === "Shoe");
  const Bag = menu.filter((item) => item.category === "Bag");

  return (
    <div>
      <Cover bgimg={bgimg2} coverdetails={" "} coverheading={""}></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Dress?"}
      ></Sectiontitle>
      <Difmenu item={Dress} title="Dress"></Difmenu>
      <Cover bgimg={bgimg3} coverdetails={" "} coverheading={" "}></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Glass?"}
      ></Sectiontitle>
      <Difmenu item={Glasses} title="Glasses"></Difmenu>

      <Cover bgimg={bgimg2} coverdetails={" "} coverheading={""}></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Hoodie?"}
      ></Sectiontitle>
      <Difmenu item={Hoodies} title="Hoodies"></Difmenu>
      <Cover bgimg={bgimg3} coverdetails={""} coverheading={" "}></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Shoe?"}
      ></Sectiontitle>
      <Difmenu item={Shoe} title="Shoe"></Difmenu>
      <Cover bgimg={bgimg33} coverdetails={" "} coverheading={""}></Cover>

      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Bag?"}
      ></Sectiontitle>
      <Difmenu item={Bag} title="Bag"></Difmenu>
    </div>
  );
};

export default Shop;
