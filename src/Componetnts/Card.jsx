import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../Hook/useCart";
import { FaCartPlus } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Card = ({ item }) => {
  const { image, price, name, des, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user) {
      const cartItem = {
        menuItem: _id,
        name,
        image,
        price,
        email: user.email,
        quantity: 1,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the number of carts
            Swal.fire("Product Added In The Cart", "success");
          }
        });
    } else {
      Swal.fire({
        title: "Not Logged In?",
        text: "You won't be able to add this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go To Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm mt-6">
        <div className="card-body items-center text-center">
          <img
            className="hover:scale-125 transition-transform duration-300"
            src={image}
          />

          <h2 className="card-title text-base font-semibold mb-2 mt-3">
            {name} <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </h2>
          <h3 className="text-2xl text-white bg-black absolute right-0 p-2 mx-3">
            $ {price}
          </h3>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-black text-white px-6 py-2 font-semibold flex gap-2 items-center rounded-sm"
            >
              <FaCartPlus></FaCartPlus>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
