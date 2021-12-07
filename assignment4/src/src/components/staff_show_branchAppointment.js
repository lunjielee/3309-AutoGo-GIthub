import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


export default function StaffShowBranchAppointment() {

    const nav = useNavigate()

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    const [branchNo, setBranchNo] = useState();
    const [carlist, setCarList] = useState([]);


    const getCarList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_show_branchAppointment`, {
            branchNo: branchNo

        }).then(response => {
            console.log(response.data);
            setCarList(response.data);
        })
    }

    return (
        <div>
            <h2>Show Branch Appointment</h2>
            <div class="mt-3 mb-3">
                <button onClick={() => { nav(-1) }} id='staff-view-btn-1' class="btn btn-primary" type="button">Back to Home Page</button>
            </div>
            <div class="form-floating mb-3 w-25 m-auto">
                <input onChange={(event) => { setBranchNo(event.target.value) }} name="inputBranchNo" type="text" class="form-control" id='branchNo'
                    placeholder='E.g. 1' required />
                <label for="branchNo" class="form-label">Branch No</label>
            </div>
            <div>
                <button id='staff-view-btn-2' class="btn btn-primary" type="button" onClick={getCarList}>Show Car List</button>
            </div>
            <div class="mt-3">
                <div class="row">
                    <div class="border border-primary col">License Plate</div>
                    <div class="border border-primary col">Color</div>
                    <div class="border border-primary col">Model</div>
                    <div class="border border-primary col">Make</div>
                    <div class="border border-primary col">Branch Number</div>
                </div>
                {carlist.map((val) => {
                    console.log(val)
                    return <div class="row">
                        <div class="border col">{val.licensePlate}</div>
                        <div class="border col">{val.color}</div>
                        <div class="border col">{val.model} </div>
                        <div class="border col">{val.make}</div>
                        <div class="border col">{val.branchNo}</div>
                    </div>
                })}
            </div>
        </div>
    )
}