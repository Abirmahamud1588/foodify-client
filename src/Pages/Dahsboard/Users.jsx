import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../Hook/useAxiosSecure";
const Users = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handlemakeadmin = (user) => {
    fetch(`https://newrestaurant-ten.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            // Other options like autoClose, hideProgressBar, etc.
          });
        }
      });
  };

  // const handledeleteuser = (user) => {};
  return (
    <div>
      <div className="w-full ml-16 mt-16 h-full ">
        <div className="flex justify-evenly bg-slate-500 py-4  items-center w-full">
          <h1 className="text-2xl text-white font-medium">
            Total users: {users.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th className="text-xl">SN</th>
                <th className="text-xl">Name</th>
                <th className="text-xl"> Email</th>
                <th className="text-xl">Role</th>
                <th className="text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users.map((user, index) => (
                <tr key={user._id} user={user}>
                  <td>
                    <h3>{index + 1}</h3>
                  </td>

                  <td>
                    <span className="badge badge-success badge-md">
                      {user.name}
                    </span>
                  </td>
                  <td className="text-center">{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <>
                        <button
                          onClick={() => handlemakeadmin(user)}
                          className="btn bg-orange-900 text-white hover:text-yellow-700 btn-md"
                        >
                          <FaUserAlt></FaUserAlt>
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      // onClick={() => handledeleteuser(user)}
                      className="btn bg-slate-900 text-white hover:text-red-700 btn-md"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
