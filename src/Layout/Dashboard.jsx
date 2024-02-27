import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaCalendar,
  FaHome,
  FaWallet,
  FaShoppingBag,
  FaUser,
  FaUserAlt,
  FaOpenid,
  FaPlusSquare,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../providers/AuthProviders";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
          <ToastContainer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {isAdmin ? (
            <>
              <ul className="menu p-4 w-80 h-full bg-black text-base-content text-white">
                <li>
                  <Link to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/additem">
                    <FaPlusSquare></FaPlusSquare> Add Item
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageitem">
                    <FaOpenid></FaOpenid> Manage Item
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/history">
                    <FaWallet></FaWallet> Order History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/users">
                    <FaUserAlt></FaUserAlt> All Users
                  </Link>
                </li>

                <div className="divider"></div>

                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/shop">
                    <FaShoppingBag></FaShoppingBag> Shop{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart{" "}
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="menu p-4 w-80 h-full bg-black text-base-content text-white">
                <li>
                  <Link to="/dashboard/userhome">
                    <FaHome></FaHome> User Home{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                  </Link>
                </li>

                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/history">
                    <FaWallet></FaWallet> Order History
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
