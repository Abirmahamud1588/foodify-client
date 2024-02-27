import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Myhistory = () => {
  const [payments, setPayments] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Fetch payment history data from backend
    const fetchPaymentHistory = async () => {
      try {
        const response = await axiosSecure.get("/payments"); // Assuming this endpoint returns payment history data
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };

    // Fetch menu items from backend
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/menu"); // Fetch menu items from the backend
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchPaymentHistory();
    fetchMenuItems();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 bg-black text-center text-white py-3">
        Payment History
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {payments.map((payment) => (
          <div key={payment._id} className="bg-white shadow-md rounded-md p-4">
            <h1 className="font-bold text-lg mb-2">Date: {payment.date}</h1>
            <h2 className="text-gray-700">
              <span className="font-semibold">Amount:</span> ${payment.price}
            </h2>
            <h3 className="text-gray-700">
              <span className="font-semibold">Payment Method:</span>{" "}
              {payment.transactionId}
            </h3>
            <h3 className="text-gray-700">
              {" "}
              <span className="font-semibold">Menu Items:</span>
            </h3>
            <ul>
              {menuItems.map((menuItem) => {
                // Check if the menuItem is included in the payment's menu items
                if (payment.menuItems.includes(menuItem._id)) {
                  return <li key={menuItem._id}>{menuItem.name} </li>;
                }
                return null;
              })}
            </ul>
            <h3>
              {" "}
              <span className="font-semibold">Total Item:</span>{" "}
              {payment.cartItems.length}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myhistory;
