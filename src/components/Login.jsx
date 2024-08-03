import React, { useState } from "react";
import oneImg from "../assets/one.png";
import oneImg2 from "../assets/two.png";
import oneImg3 from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BASE_URL } from "../Auth/BASE_URL";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import Loader from "./Loader";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [status, setLoginStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const formSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) formErrors.email = "This field is required";
    if (!password) formErrors.password = "This field is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      console.log("Data", email, password);
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        Password: password,
      });
      console.log("Response Status Code:", response);

      if (response.status === 200) {
        const user = response.data;
        Cookies.set("email", user.Email);
        Cookies.set("token", user.Token);
        setIsLoggedIn("true"); 
        navigate("/dashboard");

      } else {
        setLoginStatus("Invalid password or email");
      }
    } catch (err) {
      console.log(err);
      setLoginStatus("Invalid password or email");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="maindiv">
      <div>
        <div className="row ondiv ">
          <div className="col-lg-6 onep">
            <div className="one">
              <img className="img1" src={oneImg} alt="pg" />
            </div>
            <div className="onee">
              <img className="img1" src={oneImg3} alt="pg" />
            </div>
          </div>

          <div className="col-lg-6 twop">
            <div className="two">
              <img className="img1" src={oneImg2} alt="pg" />
            </div>
            <div className="twoee">
              <p className="p1">
                To join ClaimColony?
                <Link to={"/signup"}>
                  <span className="p11 fw-bold">Sign up here</span>
                </Link>
              </p>

              <div className="deo">
                <p className="p12">Already have an account</p>
                <h5>Sign In Here</h5>
                <form onSubmit={formSubmit}>
                  <div>
                    <label> User Name</label>
                    <p className="inpt">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </p>
                  </div>

                  <div className="mt-2 mb-3 inpt1" style={{ position: "relative" }}>
                  <label>Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      required
                    />
                    <div className="pass" onClick={togglePassword}>
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    {errors.password && (
                      <p style={{ color: "red" }}>{errors.password}</p>
                    )}
                  </div>

                <button className="s1">
                  {loading ? <Loader/> : " Login"}
                 </button>
                </form>
                <p style={{marginLeft:'20%'}}>{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
