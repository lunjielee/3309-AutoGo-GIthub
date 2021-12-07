import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffViewAppointment() {

    const nav = useNavigate()

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';
    const [resultList, setResultList] = useState([]);

    const getResultList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_view_appointment`, {
            userName: localStorage.currentUser,
            password: localStorage.password
        }).then(response => {
            setResultList(response.data)
        })
    }

    return (
        <div>
            <h2>Staff View Appointment Page</h2>
            <div class="mt-3">
                <button onClick={() => { nav(-1) }} id='staff-view-btn-1' class="btn btn-primary" type="button">Back to Home Page</button>
            </div>
            <div class="mt-3">
                <button onClick={getResultList} id='staff-view-btn-2' class="btn btn-primary" type="button">Show Appointments</button>
            </div>
            <div class="mt-3">
                <div>
                    <div class="row">
                        <div class="border border-primary col">AppointmentNo</div>
                        <div class="border border-primary col">Service Type</div>
                        <div class="border border-primary col">Service Description</div>
                        <div class="border border-primary col">Date</div>
                        <div class="border border-primary col">License Plate</div>
                    </div>
                    {resultList.map((val) => {
                        return <div class="row">
                            <div class="border col">{val.appointmentNo}</div>
                            <div class="border col">{val.serviceType}</div>
                            <div class="border col">{val.serviceDescription}</div>
                            <div class="border col">{val.date}</div>
                            <div class="border col">{val.licensePlate}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}