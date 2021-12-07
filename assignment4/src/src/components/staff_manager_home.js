import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffManagerHome() {
    const nav = useNavigate()

    return (
        <div>
            <h2>Hi! <small class="text-muted">{localStorage.getItem('currentUser')}</small> Welcome to Manager Home page</h2>
            <div class="mt-3">
                <button onClick={() => { nav('/staff-view-branchRevenue') }} id='staff-home-btn-1' class="btn btn-primary" type="button">View Branch Revenue</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/staff-show-branchAppointment') }} id='staff-home-btn-2' class="btn btn-primary" type="button">Show Branch Appointments</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/staff-show-clientProfile') }} id='staff-home-btn-3' class="btn btn-primary" type="button">Client Information</button>
            </div>
            <div class="mt-3">
                <button onClick={() => { nav('/staff-location') }} id='staff-home-btn-4' class="btn btn-primary" type="button">Staff at Each Location</button>
            </div>
        </div>
    )
}
