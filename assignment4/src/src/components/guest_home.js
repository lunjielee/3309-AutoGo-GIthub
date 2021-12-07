import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestHome() {
    const nav = useNavigate()
    return (
        <div>
            <h2>Hi! <small class="text-muted">{localStorage.getItem('currentUser')}</small> Guest Home page</h2>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-view-appointment') }} id='guest-home-btn-1' class="btn btn-primary" type="button">View My Appointments</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/add-appointment') }} id='guest-home-btn-2' class="btn btn-primary" type="button">Book a Appointment (Register Your Car First)</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-find-item') }} id='guest-home-btn-3' class="btn btn-primary" type="button">Search Accessory</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/staff-location') }} id='guest-home-btn-4' class="btn btn-primary" type="button">Staffs at Each Location</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-register-car') }} id='guest-home-btn-4' class="btn btn-primary" type="button">Register Your Car</button>
            </div>
        </div>
    )

}