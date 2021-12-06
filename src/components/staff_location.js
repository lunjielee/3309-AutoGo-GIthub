import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffLocation() {
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
            <h1>Check which staff is working on each branch</h1>
            <div style={a_div_style}>
                <a href='/staff-manager-home' style={a_style}>Back to Home Page</a><br />
            </div>
            <br></br>


            <div class="select branch">
                <select name="branch" id="branch" onChange={(event) => { setBranchNo(event.target.value) }}>
                    <option value="1">branch 1</option>
                    <option value="2">branch 2</option>
                    <option value="3">branch 3</option>
                    <option value="4">branch 4 </option>
                </select>
            </div>


            <button onClick={submitSelection} type='button' class="btn btn-primary">View</button>
            <br></br>
            <input value='Name' readOnly></input>
            <input value='Position' readOnly></input>
            <input value='Location' readOnly></input>
            <br></br>
            {staffList.map((val) => {
                return <div>
                    <input value={val.name} readOnly></input>
                    <input value={val.position} readOnly></input>
                    <input value={val.location} readOnly></input>
                </div>
            })}
        </div>
    )
}