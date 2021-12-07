import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function AddAppointment() {

    const a_style = {
        backgroundColor: "black",
        color: "white",
        textDecoration: "none",
        padding: "10px",
        borderRadius: "10px",
    }

    const a_div_style = {
        margin: "20px",
    }

    //React hooks
    const [date, setDate] = useState("");
    const [branchNo, setBranchNo] = useState("1");
    const [licensePlate, setLicensePlate] = useState("");
    const [service1, setService1] = useState("car wash");
    const [service2, setService2] = useState("none");
    const [service3, setService3] = useState("none");
    const [service4, setService4] = useState("none");
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    //Login function
    const submitAppointment = () => {
        console.log(localStorage.clientNo);//testing
        if (date !== '' && branchNo !== '' && licensePlate !== '') {
            // Using Axios to send post request to our backend
            Axios.post(`http://${API_DOMAIN}:8081/api/add_appointment`, {
                date: date,
                branchNo: branchNo,
                clientNo: localStorage.getItem('clientNo'),
                branchNo: branchNo,
                licensePlate: licensePlate,
                service1: service1, //pass into serviceAppointment table
                service2: service2, //pass into serviceAppointment table
                service3: service3, //pass into serviceAppointment table
                service4: service4 //pass into serviceAppointment table
            }).then(response => {
                console.log(response)
                window.location.reload();
            })
        }
    }
    return (
        <div>
            <div>Add Appointment page</div>
            <div style={a_div_style}>
                <a href='/guest-home' style={a_style}>Back to Guest Home Page</a><br />
            </div>
            <br></br>
            <form>
                <div class="mb-3">
                    <label for="date" class="form-label">Date</label>
                    <input onChange={(event) => { setDate(event.target.value) }} class="form-control" id="date" required />
                </div>

                <div class="mb-3">
                    <label for="service" class="form-label">Service 1</label>
                    <select name="service" id="service" onChange={(event) => { setService1(event.target.value) }}>
                        <option value="car wash">car wash</option>
                        <option value="inspection">inspection</option>
                        <option value="maintenance">maintenance</option>
                        <option value="tire change">tire change</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="service" class="form-label">Service 2</label>
                    <select name="service" id="service" onChange={(event) => { setService2(event.target.value) }}>
                        <option value="none">none</option>
                        <option value="car wash">car wash</option>
                        <option value="inspection">inspection</option>
                        <option value="maintenance">maintenance</option>
                        <option value="tire change">tire change</option>

                    </select>
                </div>
                <div class="mb-3">
                    <label for="service" class="form-label">Service 3</label>
                    <select name="service" id="service" onChange={(event) => { setService3(event.target.value) }}>
                        <option value="none">none</option>
                        <option value="car wash">car wash</option>
                        <option value="inspection">inspection</option>
                        <option value="maintenance">maintenance</option>
                        <option value="tire change">tire change</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="service" class="form-label">Service 4</label>
                    <select name="service" id="service" onChange={(event) => { setService4(event.target.value) }}>
                        <option value="none">none</option>
                        <option value="car wash">car wash</option>
                        <option value="inspection">inspection</option>
                        <option value="maintenance">maintenance</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="location" class="form-label">Location</label>
                    <select name="location" id="location" onChange={(event) => { setBranchNo(event.target.value) }}>
                        <option value="1">wonderland road 101</option>
                        <option value="2">western road 100</option>
                        <option value="3">northwest street 201</option>
                        <option value="4">saniar201</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="licensePlate" class="form-label">License Plate</label>
                    <input onChange={(event) => { setLicensePlate(event.target.value) }} class="form-control" id="licensePlate" required />
                </div>

                <button onClick={submitAppointment} type='button' class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}