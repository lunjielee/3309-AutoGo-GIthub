import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestHome() {
    const nav = useNavigate()
    return (
        <div>
            <h1>Guest Home page</h1>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-view-appointment') }} id='guest-home-btn-1' class="btn btn-primary" type="button">View my appointments</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/add-appointment') }} id='guest-home-btn-2' class="btn btn-primary" type="button">Book a appointment</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('#') }} id='guest-home-btn-3' class="btn btn-primary" type="button">View my profile</button>
            </div>
            <div style={a_div_style}>
                <a href='/guest-find-item' style={a_style}>Find Locations</a>
            </div>
        </div>
    )

}