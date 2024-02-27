import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Sectiontitle from "../../Componetnts/Sectiontitle";

const Userhome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: userStats = {} } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/user-stats");
      return res.data;
    },
  });
  console.log(userStats);

  return (
    <div className="w-full m-4">
      <Sectiontitle
        heading={`Hi, ${user.displayName}`}
        subheading={"Your Stats"}
      ></Sectiontitle>
      <div className=" flex  gap-4 stats shadow my-10 ml-4   text-white">
        <div className="stat bg-black">
          <div className="stat-title text-white">Total Spent</div>
          <div className="stat-value">${userStats.totalSpent}</div>
        </div>

        <div className="stat bg-black">
          <div className="stat-title text-white">Total Products Bought</div>
          <div className="stat-value">{userStats.totalProductsBought}</div>
        </div>
      </div>
    </div>
  );
};

export default Userhome;
