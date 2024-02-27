import React from "react";
import Sectiontitle from "../../Componetnts/Sectiontitle";
import { FaEdit, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../Hook/useMenu";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/menu/${item._id}`, {
          // Corrected URL and method name
          method: "DELETE", // Corrected method name
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        console.log(result);
      }
    });
  };
  return (
    <div className="w-3/4 mx-auto mt-20 ">
      <Sectiontitle
        heading="Manage All Items"
        subheading="Hurry up"
      ></Sectiontitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-6">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>

                <td>{item.price}</td>

                <td>
                  <button className="btn btn-primary btn-md">
                    <FaRegEdit>details</FaRegEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
