import React, { useState } from "react";

export default function StaffManagerHome() {
  const a_style = {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "10px",
    fontSize:"bold"
  };

  const a_div_style = {
    margin: "20px",
  }


    return (
        <div>Manager Home page<br />

            <div style={a_div_style}>
                <a href='/staff-view-branchRevenue' style={a_style}>View Branch Reveneue</a>
            </div>
            <div style={a_div_style}>
                <a href='/staff-show-branchAppointment' style={a_style}>Show Branch Appointments</a>
            </div>
            <div style={a_div_style}>
                <a href='/staff-show-clientProfile' style={a_style}>Client Information</a>
            </div>
            <div style={a_div_style}>
                <a href='/staff-location' style={a_style} >staffs at each location</a>
            </div>

        </div>
    )
}
