import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import Sectiontitle from "../../Componetnts/Sectiontitle";

const Adminhome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);

  return (
    <div className="w-3/4 mx-auto ">
      <Sectiontitle
        heading={`Hi, ${user.displayName}`}
        subheading={"welcome to Stats"}
      ></Sectiontitle>
      <div className=" flex  gap-4 stats shadow my-10    text-white">
        <div className="stat bg-black">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
        </div>

        <div className="stat bg-black">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-white"> Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>
        <div className="stat bg-black">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-white">Menu Items</div>
          <div className="stat-value">{stats.products}</div>
        </div>

        <div className="stat bg-black">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
