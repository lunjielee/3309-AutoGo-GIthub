import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffShowClientProfile() {

    const nav = useNavigate()

    const button_style = {
        marign: "10px"
    }

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    const [clientNo, setClientNo] = useState();
    const [clientList, setClientList] = useState([])

    const getClientList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_show_clientProfile`, {
            clientNo: clientNo

        }).then(response => {
            console.log(response.data);
            setClientList(response.data);
        })
    }

    return (
        <div>
            <h2>Your Personal Information</h2>
            <div class="mt-3 mb-3">
                <button onClick={() => { nav(-1) }} id='staff-view-btn-1' class="btn btn-primary" type="button">Back to Home Page</button>
            </div>
            <div class="form-floating mb-3 w-25 m-auto">
                <input onChange={(event) => { setClientNo(event.target.value) }} name="inputClientNo" type="text" class="form-control" id='clientNo'
                    placeholder='E.g. 1' required />
                <label for="branchNo" class="form-label">Client Number</label>
            </div>
            <div>
                <button onClick={getClientList} id='staff-view-btn-2' class="btn btn-primary" type="button" >Show Profile</button>
            </div>
            <div class="mt-3">
                <div class="row">
                    <div class="border border-primary col">Client Number</div>
                    <div class="border border-primary col">Name</div>
                    <div class="border border-primary col">Password</div>
                    <div class="border border-primary col">Address</div>
                    <div class="border border-primary col">Phone Number</div>
                </div>
                {clientList.map((val) => {
                    console.log(val)
                    return <div class="row">
                        <div class="border col">{val.clientNo}</div>
                        <div class="border col">{val.name}</div>
                        <div class="border col">{val.password} </div>
                        <div class="border col">{val.address}</div>
                        <div class="border col">{val.phone}</div>
                    </div>
                })}
            </div>
        </div>
    )
}