import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import logo2 from "/Logo (2).png";
import logo from "/Logo.png";

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
    <div className="navbar w-full flex  lg:flex md:flex-row  flex-col justify-center  bg-opacity-100  bg-white text-black ">
      <div className="navbar-start w-full mx-auto ml-10">
        <div className="">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
        </div>
        <a href="/" className="w-[200px]">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center  text-black-600   items-center mr-0 md:mr-20  uppercase">
        <ul className="menu menu-horizontal space-x-4 px-1 text-black-600 items-center   ">
          <Link to="/shop" className="text-xl ">
            Our Shop
          </Link>

          <Link to="/order/Dress" className="text-xl ">
            {" "}
            Order{" "}
          </Link>

          {
            // if user availabe
            user ? (
              <>
                <div className="flex-none gap-2">
                  <div className="form-control"></div>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <img
                        className="w-[50px] h-[50px] rounded-full  border border-black"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-black rounded-box w-52"
                    >
                      <Link className="ml-2" to="/dashboard">
                        Dahsboard
                      </Link>

                      <li>
                        <a onClick={handlelogout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to="/dashboard/mycart" className="text-xl text-white">
                  <span className="flex items-center space-x-2 text-black">
                    <FaCartPlus></FaCartPlus>

                    <div className="badge badge-secondary ">
                      +{cart?.length || 0}
                    </div>
                  </span>
                </Link>
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
    </div>
  );
};

export default Header;
