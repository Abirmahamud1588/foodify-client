import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendar, FaHome, FaWallet } from "react-icons/fa";
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
              <ul className="menu p-4 w-80 h-full bg-slate-500 text-base-content text-white">
                <li>
                  <Link to="/dashboard/adminhome">
                    <FaHome></FaHome> Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/additem">
                    <FaHome></FaHome> Add Item
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageitem">
                    <FaHome></FaHome> Manage Item
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaCalendar></FaCalendar> Reservation
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaWallet></FaWallet> Payment History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/users">
                    <FaShoppingCart></FaShoppingCart> All Users
                  </Link>
                </li>
                <div className="divider"></div>

                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/menu">
                    <FaCalendar></FaCalendar> Menu{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/order/salad">
                    <FaWallet></FaWallet> Payment History{" "}
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
              <ul className="menu p-4 w-80 h-full bg-slate-500 text-base-content text-white">
                <li>
                  <Link to="/dashboard/userhome">
                    <FaHome></FaHome> User Home{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaCalendar></FaCalendar> Reservation{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaWallet></FaWallet> Payment History
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                  </Link>
                </li>
                <div className="divider"></div>

                <li>
                  <Link to="/">
                    <FaHome></FaHome> Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/menu">
                    {" "}
                    <FaCalendar></FaCalendar> Menu{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/order/salad">
                    {" "}
                    <FaWallet></FaWallet> Payment History{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link>
                    {" "}
                    <FaShoppingCart></FaShoppingCart> My Cart{" "}
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
