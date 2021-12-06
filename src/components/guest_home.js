import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestHome() {
    const nav = useNavigate()
    return (
        <div>
            <h1>Guest Home page</h1>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-view-appointment') }} id='guest-home-btn-1' class="btn btn-primary" type="button">View My Appointments</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/add-appointment') }} id='guest-home-btn-2' class="btn btn-primary" type="button">Book a Appointment</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('#') }} id='guest-home-btn-3' class="btn btn-primary" type="button">View My Profile</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-find-item') }} id='guest-home-btn-4' class="btn btn-primary" type="button">Find Accessory Locations</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-show-branchAppointment') }} id='guest-home-btn-5' class="btn btn-primary" type="button">Show Branch Appointments</button>
            </div>
        </div>
    )

}