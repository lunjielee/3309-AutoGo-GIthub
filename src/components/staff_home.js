import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffHome() {
  const nav = useNavigate()
  const a_style = {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "10px",
  };

  const a_div_style = {
    margin: "20px",
  }


  return (
    <div>
      <h1>StaffHome page</h1>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-view-appointment') }} id='staff-home-btn-1' class="btn btn-primary" type="button">View My Appointments</button>
      </div>
      <div class="mt-3">
        <button onClick={() => { nav('#') }} id='guest-home-btn-2' class="btn btn-primary" type="button">View My Profile</button>
      </div>
      <div class="mt-3">
        <button onClick={() => { nav('/staff-view-branchRevenue') }} id='guest-home-btn-3' class="btn btn-primary" type="button">View Branch Revenue</button>
      </div>
    </div >
  )

}
