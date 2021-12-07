import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestViewAppointment() {
    const [appointmentNo, setAppointmentNo] = useState("");
    const [resultList, setResultList] = useState([]);
    const [receiptList, setReceiptList] = useState([]);

    const nav = useNavigate()

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    const getResultList = () => {
        console.log(localStorage.currentUser);
        console.log(localStorage.password);
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_view_appointment`, {
            userName: localStorage.currentUser,
            password: localStorage.password
        }).then(response => {
            console.log(response.data);
            setResultList(response.data)
        })
    }

    const deleteAppointment = () => {
        // Using Axios to send post request to our backend
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_delete_appointment`, {
            appointmentNo: appointmentNo
        }).then(response => {
            console.log(response.data);
            // window.location.reload();
            getResultList();
        })
    }

    const viewReceipt = () => {
        // Using Axios to send post request to our backend
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_view_receipt`, {
            appointmentNo: appointmentNo
        }).then(response => {
            console.log(response.data);
            setReceiptList(response.data);
        })
    }

    return (
        <div>
            <h1>Guest View Appointment Page</h1>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-home') }} id='guest-view-btn-1' class="btn btn-primary" type="button">Back to Guest Home Page</button>
            </div>
            <div class="mt-3">
                <button onClick={getResultList} id='guest-view-btn-2' class="btn btn-primary" type="button">Show Appointments</button>
            </div>
            <div class="mt-3">
                <div>
                    <div class="row">
                        <div class="border border-primary col">AppointmentNo</div>
                        <div class="border border-primary col">Service Type</div>
                        <div class="border border-primary col">Service Description</div>
                        <div class="border border-primary col">Date</div>
                        <div class="border border-primary col">Location</div>
                    </div>
                    {resultList.map((val) => {
                        return <div class="row">
                            <div class="border col">{val.appointmentNo}</div>
                            <div class="border col">{val.serviceType}</div>
                            <div class="border col">{val.serviceDescription}</div>
                            <div class="border col">{val.date}</div>
                            <div class="border col">{val.location}</div>
                        </div>
                    })}
                </div>
            </div>
            <div class="mt-3">
                <div class="form-floating mb-3 w-25 m-auto">
                    <input onChange={(event) => { setAppointmentNo(event.target.value) }} name='appointmentNoInput' type="text" class="form-control" id="inputUserNameStaff"
                        placeholder="Type in the appointment number to view the payment" required />
                    <label for="inputUserName" class="form-label">Appointment Number</label>
                </div>
                <div class="mt-3">
                    <button onClick={viewReceipt} id='guest-view-btn-3' class="btn btn-primary">View Receipt</button>
                    <button onClick={deleteAppointment} id='guest-view-btn-4' class="btn btn-primary ms-3">Delete Appointment</button>
                </div>
                <div class="mt-3">
                    <div class="row">
                        <div class="border border-primary col">AppointmentNo</div>
                        <div class="border border-primary col">Client</div>
                        <div class="border border-primary col">Date</div>
                        <div class="border border-primary col">Location</div>
                        <div class="border border-primary col">Price</div>
                    </div>
                    {receiptList.map((val) => {
                        console.log(val)
                        return <div class="row">
                            <div class="border col">{val.appointmentNo}</div>
                            <div class="border col">{val.clientName}</div>
                            <div class="border col">{val.date} </div>
                            <div class="border col">{val.location}</div>
                            <div class="border col">{val.totalPayment}</div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}