import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function AddAppointment() {
    const nav = useNavigate()

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
            <h2>Add Appointment page</h2>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-home') }} id='guest-add-appointment-btn-1' class="btn btn-primary" type="button">Back to Guest Home Page</button>
            </div>
            <div class="mt-3 w-25 m-auto">
                <form>
                    <div class="form-floating mb-3">
                        <input onChange={(event) => { setDate(event.target.value) }} name='appointmentDateInput' type="text" class="form-control" id="date"
                            placeholder="Type in the appointment date" required />
                        <label for="date" class="form-label">Date</label>
                    </div>
                    <div class="mb-3">
                        <label for="service" class="form-label">Service 1</label>
                        <select class="form-select" name="service" id="service" onChange={(event) => { setService1(event.target.value) }}>
                            <option value="car wash">car wash</option>
                            <option value="inspection">inspection</option>
                            <option value="maintenance">maintenance</option>
                            <option value="tire change">tire change</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="service" class="form-label">Service 2</label>
                        <select class="form-select" name="service" id="service" onChange={(event) => { setService2(event.target.value) }}>
                            <option value="none">none</option>
                            <option value="car wash">car wash</option>
                            <option value="inspection">inspection</option>
                            <option value="maintenance">maintenance</option>
                            <option value="tire change">tire change</option>

                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="service" class="form-label">Service 3</label>
                        <select class="form-select" name="service" id="service" onChange={(event) => { setService3(event.target.value) }}>
                            <option value="none">none</option>
                            <option value="car wash">car wash</option>
                            <option value="inspection">inspection</option>
                            <option value="maintenance">maintenance</option>
                            <option value="tire change">tire change</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="service" class="form-label">Service 4</label>
                        <select class="form-select" name="service" id="service" onChange={(event) => { setService4(event.target.value) }}>
                            <option value="none">none</option>
                            <option value="car wash">car wash</option>
                            <option value="inspection">inspection</option>
                            <option value="maintenance">maintenance</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="location" class="form-label">Date</label>
                        <select class="form-select" name="location" id="location" onChange={(event) => { setBranchNo(event.target.value) }}>
                            <option value="1">wonderland road 101</option>
                            <option value="2">western road 100</option>
                            <option value="3">northwest street 201</option>
                            <option value="4">saniar201</option>
                        </select>
                    </div>
                    <div class="form-floating mb-3">
                        <input onChange={(event) => { setLicensePlate(event.target.value) }} name='appointmentLicenseInput' type="text" class="form-control" id="licensePlate"
                            placeholder="Type in the appointment license plate" required />
                        <label for="licensePlate" class="form-label">License Plate</label>
                    </div>
                    <button onClick={submitAppointment} type='button' class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )
}