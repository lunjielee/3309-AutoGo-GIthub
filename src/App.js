import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

//import components
import Home from './components/home.js';
import GuestLogin from './components/guest_login.js'
import StaffLogin from './components/staff_login.js'
import Login from './components/login.js';
import GuestHome from './components/guest_home.js'
import StaffHome from './components/staff_home.js'
import StaffSignup from './components/staff_signup'
import GuestSignup from './components/guest_signup'
class App extends Component {
  render() {
    return (
      <div className="App" >
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              AutoGo
            </Link>
            {/* <div className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
            </div> */}
            <div className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                <Link to={"/staff-login"} className="nav-link">
                  Staff Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/guest-login"} className="nav-link">
                  Guest Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/staff-signup"} className="nav-link">
                  Staff Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/guest-signup"} className="nav-link">
                  Guest Signup
                </Link>
              </li>
            </div>
          </div>
        </nav>


        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/guest-login" element={<GuestLogin />} />
            <Route path="/staff-login" element={<StaffLogin />} /> */}
            <Route path="/login" element={<Login />} /> 
            <Route path="/staff-signup" element={<StaffSignup />} />
            <Route path="/guest-signup" element={<GuestSignup />} />
            <Route path="/guest-home" element={<GuestHome />} />
            <Route path="/staff-home" element={<StaffHome />} />
          </Routes>
        </div>
        <footer className="py-3 my-4">
          <p className="text-center text-muted">&copy; Copyright 2021 Lunjie Li</p>
        </footer>
      </div>
    )
  };
}

export default App;
