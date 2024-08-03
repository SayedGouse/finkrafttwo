import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useEffect, useState } from "react";
import Users from "./components/Users.jsx";
import Account from "./components/Account.jsx";
import Statics from "./components/Statics.jsx";

function App() {
  
  const initialLoginStatus = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginStatus);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}  />} />
        <Route path="/signup" element={<Signup />} />
      

        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <div className="grid-container">
             
                <Sidebar
                
                />

                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/accounts" element={<Account />} />
                  <Route path="/statics" element={<Statics />} />
                </Routes>
              </div>
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
