import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import img from "/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hook/useMenu";
import Card from "../../Componetnts/Card";
import Tabpanel from "./Tabpanel";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["Dress", "Glasses", "Hoodies", "Shoe", "Bag"];
  const { category } = useParams();
  const intedinit = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(intedinit);
  const [menu] = useMenu();

  const Dress = menu.filter((item) => item.category === "Dress");
  const Glasses = menu.filter((item) => item.category === "Glasses");
  const Hoodies = menu.filter((item) => item.category === "Hoodies");
  const Shoe = menu.filter((item) => item.category === "Shoe");
  const Bag = menu.filter((item) => item.category === "Bag");

  return (
    <div>
      <Cover bgimg={img} coverdetails={""} coverheading={" "}></Cover>
      <div className="max-w-screen-xl mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Dress</Tab>
            <Tab>Glass</Tab>
            <Tab>Hoodies</Tab>
            <Tab>Shoe</Tab>
            <Tab>Bag</Tab>
          </TabList>
          <TabPanel>
            <Tabpanel item={Dress}></Tabpanel>
          </TabPanel>

          <TabPanel>
            <Tabpanel item={Glasses}></Tabpanel>
          </TabPanel>

          <TabPanel>
            <Tabpanel item={Hoodies}></Tabpanel>
          </TabPanel>

          <TabPanel>
            <Tabpanel item={Shoe}></Tabpanel>
          </TabPanel>

          <TabPanel>
            <Tabpanel item={Bag}></Tabpanel>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
