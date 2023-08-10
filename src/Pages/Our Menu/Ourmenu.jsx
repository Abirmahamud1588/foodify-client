import React from "react";
import Cover from "../../Shared/Cover/Cover";
import bgimg from "../../assets/menu/banner3.jpg";
import bgimg2 from "../../assets/menu/dessert-bg.jpeg";
import bgimg3 from "../../assets/menu/pizza-bg.jpg";
import bgimg33 from "../../assets/menu/salad-bg.jpg";
import bgimg4 from "../../assets/menu/soup-bg.jpg";
import Difmenu from "./Difmenu";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import useMenu from "../../Hook/useMenu";
const Ourmenu = () => {
  const [menu] = useMenu();
  const salaad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const Desi = menu.filter((item) => item.category === "Desi");
  return (
    <div>
      <Cover
        bgimg={bgimg}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our Menu"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Fit?"}
      ></Sectiontitle>
      <Difmenu item={offered} title="offered"></Difmenu>
      <Cover
        bgimg={bgimg2}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our Dessert"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Sweet?"}
      ></Sectiontitle>
      <Difmenu item={dessert} title="dessert"></Difmenu>
      <Cover
        bgimg={bgimg3}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our Pizza"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get pizza?"}
      ></Sectiontitle>
      <Difmenu item={pizza} title="pizza"></Difmenu>
      <Cover
        bgimg={bgimg4}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our soup"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get soup?"}
      ></Sectiontitle>
      <Difmenu item={soup} title="soup"></Difmenu>
      <Cover
        bgimg={bgimg33}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our salaad"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get salaad?"}
      ></Sectiontitle>
      <Difmenu item={salaad} title="salad"></Difmenu>
      <Cover
        bgimg={bgimg2}
        coverdetails={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        }
        coverheading={"Our Desi"}
      ></Cover>
      <Sectiontitle
        heading={"Get It Now!"}
        subheading={"Want To Get Desi Item?"}
      ></Sectiontitle>
      <Difmenu item={Desi} title="Desi"></Difmenu>
    </div>
  );
};

export default Ourmenu;
