import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffLocation() {
    const nav = useNavigate()
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


    const [branchNo, setBranchNo] = useState(1);
    const [staffList, setStaffList] = useState([]);

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';
    //const [resultList, setResultList] = useState([]);


    const submitSelection = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_location`, {
            branchNo: branchNo

        }).then(response => {
            //setResultList(response.data)
            console.log("back")
            console.log(response)
            setStaffList(response.data)

        })
    }

    return (
        <div>
            <h2>Check which staff is working on each branch</h2>
            <div class="mt-3">
                <button onClick={() => { nav(-1) }} id='guest-add-appointment-btn-1' class="btn btn-primary" type="button">Back to Home Page</button>
            </div>
            <div class="mb-3 w-25 m-auto">
                <label for="service" class="form-label">Branch No</label>
                <select class="form-select" name="branch" id="branch" onChange={(event) => { setBranchNo(event.target.value) }}>
                    <option value="1">Branch 1</option>
                    <option value="2">Branch 2</option>
                    <option value="3">Branch 3</option>
                    <option value="4">Branch 4</option>
                </select>
            </div>
            <button onClick={submitSelection} type='button' class="btn btn-primary">Submit</button>
            <div class="mt-3">
                <div class="row">
                    <div class="border border-primary col">Name</div>
                    <div class="border border-primary col">Position</div>
                    <div class="border border-primary col">Location</div>
                </div>
                {staffList.map((val) => {
                    console.log(val)
                    return <div class="row">
                        <div class="border col">{val.name}</div>
                        <div class="border col">{val.position}</div>
                        <div class="border col">{val.location} </div>
                    </div>
                })}
            </div>
        </div>
    )
}