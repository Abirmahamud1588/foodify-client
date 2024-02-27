import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Add this line to get access to the navigate function

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Login!", "You have been Logged In.", "success");
        // Redirect to the home page after successful login
        navigate("/");
      })
      .catch((error) => {
        // Handle login errors, if any
        console.error(error);
        Swal.fire("Error", "An error occurred during login.", "error");
      });
  };

  const handlevalidatecaptcha = (e) => {
    const uservalue = e.target.value;
    if (validateCaptcha(uservalue) == true) {
      setDisable(false);
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div>
      <div className=" max-w-screen-xl mx-auto ">
        <div className="p-20 ">
          <div className="card flex-shrink-0  w-2/4   mx-auto shadow-2xl bg-base-100 my-16">
            <form onSubmit={handleLogin} className="card-body">
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

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handlevalidatecaptcha}
                  type="text"
                  name="captcha"
                  placeholder="captcha"
                  className="input input-bordered"
                />

                <p>
                  New Here?{" "}
                  <Link className="text-2xl text-red-700 mt-8" to="/sign">
                    Registration
                  </Link>
                </p>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn bg-black text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
