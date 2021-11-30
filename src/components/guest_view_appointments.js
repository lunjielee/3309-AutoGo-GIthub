import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestViewAppointment(){

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';
    const [resultList, setResultList] = useState([]);

    const getResultList = () => {
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_view_appointment`, {
                    userName:localStorage.currentUserPhone,
                    phone:localStorage.currentUserPhone
                }).then(response => {
                    setResultList(response.data)
                })
    }

    return(
        <div>
            <h1>Guest View Appointment Page</h1>
            <a href='/guest-home'>Back to Home Page</a><br/>
            <button onClick={getResultList}>Show Appointments</button>

            {resultList.map((val) => {
                console.log(val)

                return <div>
                        <input value={val.appointmentNo} readOnly></input>
                        <input value={val.serviceType} readOnly></input>
                        <input value={val.serviceDescription} readOnly></input>
                        <input value={val.date|DataView} readOnly></input>
                        <input value={val.location} readOnly></input>
                </div>
                
            })}
        </div>
    )
}