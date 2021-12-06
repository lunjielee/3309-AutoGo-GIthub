import React, { useState } from "react";

export default function StaffHome() {
  const a_style = {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "10px",
  };

  const a_div_style = {
    margin: "20px",
  };

  return (
    <div className="staff">
      <h1>StaffHome page</h1>
      <br />
      <div style={a_div_style}>
        <a href="/staff-view-appointment" style={a_style}>view my appointments</a>
      </div>
      <div style={a_div_style}>
        <a href="" style={a_style}>my profile</a>
      </div>
      <div style={a_div_style}>
        <a href="/staff-location" style={a_style}>Staff Locations</a>
      </div>
    </div>
  );
}
