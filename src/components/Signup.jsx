import React, { useState } from "react";
import oneImg from "../assets/one.png";
import oneImg2 from "../assets/two.png";
import oneImg3 from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Auth/BASE_URL";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Loader from "./Loader";

const Signup = () => {
  const navigate = useNavigate();
  const [status, setLoginStatus] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const data = {
    FullName: fName + " " + lName,
    Email: email,
    Address: address,
    PhoneNo: phoneNo,
    Password: password,
  };

  const formSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!fName) formErrors.fName = "This field is required";
    if (!lName) formErrors.lName = "This field is required";
    if (!phoneNo) formErrors.phoneNo = "This field is required";
    if (!address) formErrors.address = "This field is required";
    if (!email) formErrors.email = "This field is required";
    if (!password) formErrors.password = "This field is required";
    if (!confirmPassword) formErrors.confirmPassword = "This field is required";

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);

    axios
      .post(`${BASE_URL}/register`, data)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          alert("Thank You For Registration Please Login");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus("Invalid password or email");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showconfirmPassword);
  };

  return (
    <div className="maindiv">
      <div>
        <div className="row ondiv1 ">
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
                <Link to={"/"}>
                  <span className="p11 fw-bold">Login</span>
                </Link>
              </p>
              <form onSubmit={formSubmit} >
                <div className="deo1">
                  <p className="p12">Create an account!</p>
                  <h5>Sign Up Here</h5>

                  <div>
                    <label> First Name</label>
                    <p className="inpt1">
                      <input
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                        className="form-control"
                        type="text"
                        required
                      />
                    </p>
                    {errors.fName && <p style={{ color: 'red'  }}>{errors.fName}</p>}
                  </div>

                  <div>
                    <label>Last Name</label>
                    <p className="inpt1">
                      <input
                        value={lName}
                        onChange={(e) => setlName(e.target.value)}
                        className="form-control"
                        type="text"
                        required
                      />
                    </p>
                    {errors.lName && <p style={{color: 'red' }}>{errors.lName}</p>}
                  </div>

                  <div>
                    <label> Phone No</label>
                    <p className="inpt1">
                      <input
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        className="form-control"
                        type="text"
                        required
                      />
                    </p>
                    {errors.phoneNo && <p style={{color: 'red' }}>{errors.phoneNo}</p>}
                  </div>

                  <div>
                    <label>Address</label>
                    <p className="inpt1">
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        type="text"
                        required
                      />
                    </p>
                    {errors.address && <p style={{ color: 'red'  }}>{errors.address}</p>}
                  </div>

                  <div>
                    <label> Email</label>
                    <p className="inpt1">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="email"
                        required
                      />
                    </p>
                    {errors.email && <p style={{ color: 'red'  }}>{errors.email}</p>}
                  </div>

                  <div className='mt-2 mb-3 inpt1' style={{ position: 'relative' }}>
                  <label> Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control'
              
                  required
                />
                <div className='pass' onClick={togglePassword}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
               
              </div>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              <div className='mt-2 mb-3 inpt1' style={{ position: 'relative' }}>
              <label> Confirm Password</label>
                <input
                  type={showconfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='form-control'
             
                  required
                />
                <div className='pass' onClick={toggleConfirmPassword}>
                  {showconfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
                
              </div>

              {errors.confirmPassword && <p style={{ color: 'red'}}>{errors.confirmPassword}</p>}

                  <button className="s1">
                    {loading ? <Loader/> : "Signup"}
                </button>
                </div>
              </form>
              <p style={{marginLeft:'20%'}}>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
