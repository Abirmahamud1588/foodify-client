import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const { createuser, updateuserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleregistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    createuser(email, password).then((result) => {
      const Loggeduser = result.user;
      console.log(Loggeduser);
      const userSave = { email: email, name: name };
      updateuserProfile(name, photo).then(() => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userSave),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire("Welcome!", "You have been registered In.", "success");
              // Redirect to the home page after successful login
              navigate("/");
            }
          });
      });
    });
  };
  return (
    <div>
      <div>
        <div className="max-w-screen-xl mx-auto">
          <div className="p-20 ">
            <div className="card flex-shrink-0  w-2/4   mx-auto shadow-2xl bg-base-100 my-16">
              <form onSubmit={handleregistration} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn bg-black text-white"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
