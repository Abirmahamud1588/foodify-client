import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hook/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handlelogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar max-w-screen-xl fixed bg-opacity-90 z-10 bg-slate-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <a className="btn btn-ghost normal-case text-xl">FoodLify</a>
      </div>
      <div className="navbar-center hidden lg:flex text-yellow-600  font-bold items-center ">
        <ul className="menu menu-horizontal space-x-4 px-1 text-yellow-600 items-center  font-bold ">
          <Link to="/menu" className="text-xl ">
            Our Menu
          </Link>

          <Link to="/order/salad" className="text-xl ">
            {" "}
            Order Food{" "}
          </Link>

          {
            // if user availabe
            user ? (
              <>
                <img
                  className="w-[50px] h-[50px] rounded"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <Link to="/dashboard/mycart" className="text-xl text-white">
                  <span className="flex items-center space-x-2">
                    <FaCartPlus></FaCartPlus>

                    <div className="badge badge-secondary">
                      +{cart?.length || 0}
                    </div>
                  </span>
                </Link>
                <button
                  onClick={handlelogout}
                  className="btn btn-warning  text-xl"
                >
                  Log Out
                </button>{" "}
              </>
            ) : (
              //if not availble
              <>
                <Link to="/login" className="text-xl ">
                  {" "}
                  Login{" "}
                </Link>
              </>
            )
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
