import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hook/useMenu";
import Card from "../../Componetnts/Card";
import Tabpanel from "./Tabpanel";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = [
    "salad",
    "dessert",
    "drinks",
    "pizza",
    "soup",
    "Desi",
    "offered",
  ];
  const { category } = useParams();
  const intedinit = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intedinit);
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
        bgimg={img}
        coverdetails={"You can Buy Your favourite Order!"}
        coverheading={"Order Now"}
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salaad</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>Desi</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <Tabpanel item={salaad}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={dessert}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={drinks}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={pizza}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={soup}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={Desi}></Tabpanel>
        </TabPanel>

        <TabPanel>
          <Tabpanel item={offered}></Tabpanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
