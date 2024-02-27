import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Ourmenu from "../Pages/Our Shop/Shop";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Sign from "../Pages/Sign/Sign";
import Privateroute from "./Privateroute";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/Dahsboard/Mycart";
import Users from "../Pages/Dahsboard/Users";
import Additem from "../Pages/Dahsboard/additem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dahsboard/ManageItems";
import Payment from "../Pages/Dahsboard/Payment";
import Adminhome from "../Pages/Dahsboard/Adminhome";
import Userhome from "../Pages/Dahsboard/Userhome";
import Shop from "../Pages/Our Shop/Shop";
import Myhistory from "../Pages/Dahsboard/Myhistory";
import Orderhistory from "../Pages/Dahsboard/Orderhistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <Sign></Sign>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
    children: [
      {
        path: "mycart",
        element: <Mycart></Mycart>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <Adminhome></Adminhome>
          </AdminRoute>
        ),
      },
      {
        path: "userhome",
        element: <Userhome></Userhome>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <Additem></Additem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "history",
        element: <Myhistory></Myhistory>,
      },
      {
        path: "orderhistory",
        element: <Orderhistory></Orderhistory>,
      },
    ],
  },
]);
