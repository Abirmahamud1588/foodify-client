import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Orderhistory = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch order history data from backend if user is authenticated
    if (user) {
      fetchOrderHistory();
    }
  }, [user]);

  const fetchOrderHistory = async () => {
    try {
      const response = await axiosSecure.get("/orders"); // Assuming this endpoint returns order history data
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching order history:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 bg-black text-center text-white py-3">
        Order History
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white shadow-md rounded-md p-4">
            <h1 className="font-bold text-lg mb-2">Order ID: {order._id}</h1>
            <h2 className="text-gray-700">Total: ${order.total}</h2>
            {/* Add more order details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orderhistory;
