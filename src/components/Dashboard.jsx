import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import man from "../assets/man2.jpg";
import { IoCalendarNumber } from "react-icons/io5";
import { GiPieChart } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineWaterfallChart } from "react-icons/md";
import { BarChart, Bar, YAxis, CartesianGrid } from "recharts";
import { SiPolestar } from "react-icons/si";
import { HiDotsHorizontal } from "react-icons/hi";

const Dashboard = () => {
  const [buttondata, setbuttondata] = useState("Full_Statics");

  const data = [
    { name: "group A", series1: 2, series2: 1, series3: 6 },
    { name: "group B", series1: 4, series2: 3, series3: 2 },
    { name: "group C", series1: 2, series2: 6, series3: 3 },
  ];
  return (
    <div className="dashboard">
      <div className="z1">
        <div style={{ display: "flex" }}>
          <h2>Analytics</h2>
          <div className="b1">
            <button
              className={buttondata === "Full_Statics" ? "c1" : "n1"}
              onClick={() => setbuttondata("Full_Statics")}
            >
              Full Statics
            </button>
            <button
              className={buttondata === "Result_Summery" ? "c1" : "n1"}
              onClick={() => setbuttondata("Result_Summery")}
            >
              Result Summery
            </button>
          </div>
        </div>
        <div className="ab3">
          <div className="ab1">
            <LuPlus />
          </div>
          <div className="ab2">
            <img className="man" src={man} alt="man" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="v1">
        <div className="d1">
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ width: "100px" }}>
              <h3>Team Payment</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <FaBell size={24} />
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "5%" }}>
            <IoCalendarNumber size={24} color="blue" />
            <h5>27 Aug Aproval</h5>
          </div>
          <div className="v2">
            <img className="man2" src={man} alt="man" />
            <img className="man2" src={man} alt="man" />
            <img className="man2" src={man} alt="man" />
            <div className="g1">25+</div>
          </div>
        </div>
        <div className="d1">
          <div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GiPieChart
                color="#6969da"
                size={24}
                style={{ marginTop: "6px" }}
              />
              <h3 style={{ marginLeft: "10px" }}>Savings</h3>
            </div>
            <div style={{ marginLeft: "25%" }}>
              <MdOutlineWaterfallChart color="green" size={108} />
            </div>
            <div style={{ marginLeft: "5%", marginTop: "-10px" }}>
              <h2>$5,564</h2>
            </div>
            <div className="d11">
              <p>
                <span style={{ color: "red" }}>-11%</span> Last Week
              </p>
              <div className="d3">
                <FaLongArrowAltRight color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="d222">
          <h3 style={{ textAlign: "center" }}>Income statistics</h3>
          <div>
            <div className="ed">8%</div>

            <BarChart
              width={270}
              height={150}
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" /> */}
              <YAxis />
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              <Bar dataKey="series1" fill="#8884d8" />
              <Bar dataKey="series2" fill="#82ca9d" />
              <Bar dataKey="series3" fill="#ffc658" />
            </BarChart>
          </div>
        </div>

        <div className="d23">
          <div className="d24">
            <div className="d25">
              <div>
                <h2
                  style={{
                    color: "white",
                    paddingLeft: "30px",
                    paddingTop: "10px",
                  }}
                >
                  $95.9
                  <span style={{ marginLeft: "80px" }}>
                    <SiPolestar size={32} color="white" />
                  </span>
                </h2>
                <p style={{ color: "white", paddingLeft: "30px" }}>Per Month</p>
              </div>
              <div>
                <h4
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    color: "white",
                  }}
                >
                  Choose Best Plan For You!
                </h4>
              </div>
            </div>
            <div className="d26">
              <div className="du">
                <button className="detail">Details</button>
                <button className="upgrde">Upgrade</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- */}
      <div>
        <h3 style={{marginLeft:'20px',marginTop:"10px"}}>Recently Payments</h3>
        <div className="d31">
          <div className="d30">
            <img className="vb" src={man} alt="man" />
            <div style={{ marginTop: "20px", marginLeft: "10px" }}>
              <h6>Emma Ryan Jr</h6>
              <p style={{ marginTop: "-10px" }}>Mar 09, 2023</p>
            </div>
            <h5 style={{marginLeft:"40px"}}>$4,823</h5>

            <button className="done">Done</button>

            <HiDotsHorizontal className="dot" size={24}/>
         </div>

         <div className="d30">
            <img className="vb" src={man} alt="man" />
            <div style={{ marginTop: "20px", marginLeft: "10px" }}>
              <h6>Emma Ryan Jr</h6>
              <p style={{ marginTop: "-10px" }}>Mar 09, 2023</p>
            </div>
            <h5 style={{marginLeft:"40px"}}>$4,823</h5>

            <button className="pending">Pending</button>

            <HiDotsHorizontal className="dot" size={24}/>
         </div>
        </div>
      </div>

      {/* --------------------------------------- */}

      <div className="d33">
        <h4 style={{marginLeft:'30px', paddingTop:'10px'}}>Transaction <span style={{marginLeft:"70%", fontSize:'14px'}}><input className="inp" type="text" value={"Search"}/></span></h4>
        <div style={{borderTop: '1px solid #000', margin: '10px 30px 0 30px'}}></div> 
        <table style={{width: "100%", borderCollapse: "separate", borderSpacing: "10px"}}>
  <thead>
    <tr>
      <th style={{padding:"10px"}}>#</th>
      <th style={{padding:"10px"}}>Receiver</th>
      <th style={{padding:"10px"}}>Type</th>
      <th style={{padding:"10px"}}>Status</th>
      <th style={{padding:"10px"}}>Date</th>
      <th style={{padding:"10px"}}>Amount</th>
      <th style={{padding:"10px"}}></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding:"10px"}}><div className="d34"></div></td>
      <td style={{padding:"10px",fontWeight:'bold'}}>
      <img className="vb1" src={man} alt="man" />
      Emma Ryan Jr
        </td>
      <td  style={{padding:"10px",fontWeight:'bold'}}>Salary</td>
      <td style={{padding:"10px"}}>
        <button className="pending1">
            Pending
            </button>
            </td>
      <td style={{padding:"10px",fontWeight:'bold'}}>Feb-09-2023</td>
      <td style={{padding:"10px",fontWeight:'bold'}}>$100.00</td>
      <td style={{padding:"10px",fontWeight:'bold'}}>
        <button className="det">
            Details
        </button>
      </td>
    </tr>
    <tr>
      <td style={{padding:"10px"}}><div className="d34"></div></td>
      <td style={{padding:"10px",fontWeight:'bold'}}>
      <img className="vb1" src={man} alt="man" />
        John Doe
        </td>
      <td  style={{padding:"10px",fontWeight:'bold'}}>Bonus</td>
      <td style={{padding:"10px"}}>
        <button className="done1">
            Done
            </button>
            </td>
      <td style={{padding:"10px",fontWeight:'bold'}}>March-09-2024</td>
      <td style={{padding:"10px",fontWeight:'bold'}}>$150.00</td>
      <td style={{padding:"10px",fontWeight:'bold'}}>
        <button className="det">
            Details
        </button>
      </td>
    </tr>

  </tbody>
</table>

      </div>
    </div>
  );
};

export default Dashboard;
