import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";

//invoice
//import logo from './logo.svg';
import './App.css';

//import components
import Home from './components/home';
import Login from './components/login';
import GuestHome from './components/guest_home'
import StaffHome from './components/staff_home'
import StaffSignup from './components/staff_signup'
import GuestSignup from './components/guest_signup'
import GuestFindItem from './components/guest_find_item'
import GuestViewAppointment from './components/guest_view_appointments';
import GuestShowBranchAppointment from './components/guest_show_branchAppointment';
import StaffViewAppointment from './components/staff_view_appointment';
import StaffViewBranchRevenue from './components/staff_view_branchRevenue';
import AddAppointment from './components/guest_add_appointment';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              AutoGo
            </Link>

            <div className="navbar-nav ms-auto">
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
            <Route path="/login" element={<Login />} />
            <Route path="/staff-signup" element={<StaffSignup />} />
            <Route path="/guest-signup" element={<GuestSignup />} />
            <Route path="/guest-home" element={<GuestHome />} />
            <Route path="/staff-home" element={<StaffHome />} />
            <Route path="/guest-view-appointment" element={<GuestViewAppointment />} />
            <Route path="/guest-find-item" element={<GuestFindItem/>}/>
            <Route path="/guest-show-branchAppointment" element={<GuestShowBranchAppointment />}/>
            <Route path="/staff-view-appointment" element={<StaffViewAppointment />} />
            <Route path="/staff-view-branchRevenue" element={<StaffViewBranchRevenue />}/>
            <Route path="/add-appointment" element={<AddAppointment />} />
          </Routes>
        </div>
        <footer className="py-3 my-4">

        </footer>
      </div>
    )
  };
}

export default App;
