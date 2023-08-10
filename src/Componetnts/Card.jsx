import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../Hook/useCart";

const Card = ({ item }) => {
  const { image, price, name, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user) {
      const cartItem = { menuItem: _id, name, image, price, email: user.email };
      fetch("https://foodlify-eta.vercel.app/carts", {
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
            Swal.fire("Food Added In The Cart", "success");
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
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <div className="card-body items-center text-center">
          <img src={image} />

          <h2 className="card-title text-2xl text-yellow-700">{name}!</h2>
          <p className="text-xl text-orange-400 ">{recipe}</p>
          <h3 className="text-2xl text-yellow-700 bg-slate-900 absolute right-0 p-2 mx-3">
            {price}
          </h3>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4 border-orange-400
"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
