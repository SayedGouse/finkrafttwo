import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { SiCircle } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Sidebar() {
  const Navigator = useNavigate();
  const logout = () => {
    Cookies.remove("email");
    Cookies.remove("token");
    Navigator("/");
  };
  return (
    <aside id="sidebar">
      <div className="abc">
        <div>
          <div className="m1">
            <SiCircle className="a1" size={24} />
            <h3 className="h3">Veritas</h3>
          </div>

          <ul className="sidebar-list">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to="/dashboard"
            >
              <li style={{ paddingLeft: "15%" }} className="sidebar-list-item">
                <BsGrid1X2Fill className="icon" /> Dashboard
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to="/users"
            >
              <li style={{ paddingLeft: "15%" }} className="sidebar-list-item">
                <FaUsers className="icon" /> User
              </li>
            </Link>
            <Link    to="/accounts" style={{ textDecoration: "none", color: "whitesmoke" }}>
              <li style={{ paddingLeft: "15%" }} className="sidebar-list-item">
                <BiSolidUserAccount className="icon" /> Accounts
              </li>
            </Link>
            <Link    to="/statics" style={{ textDecoration: "none", color: "whitesmoke" }}>
              <li style={{ paddingLeft: "15%" }} className="sidebar-list-item">
                <IoStatsChart className="icon" /> Statics
              </li>
            </Link>
          </ul>
        </div>
        <div>

      <button
        onClick={logout}
        
        className="logout"
        >
        <AiOutlineLogout className="icon" /> Logout
      </button>
          </div>
      </div>
    </aside>
  );
}

export default Sidebar;
