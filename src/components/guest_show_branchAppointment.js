import React, { useState } from "react";
import Axios from 'axios';


export default function GuestShowBranchAppointment() {

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

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    const [branchNo, setBranchNo] = useState();
    const [carlist, setCarList] = useState([]);


    const getCarList = ()=>{
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_show_branchAppointment`, {
            branchNo: branchNo

        }).then(response => {
            console.log(response.data);
            setCarList(response.data);
        })
    }

    return(
        <div>
            <h1>Show Branch Appointment Of Each Car</h1>
            <div style={a_div_style}>
                <a href='/guest-home' style={a_style}>Back to Staff Home</a>
            </div>
            <input onChange={(event)=> {setBranchNo(event.target.value)}} id='branchNo' placeholder='Branch No'></input><br/>

            <button onClick={getCarList}>Show Car List</button>

            <br></br>
            <input value='License Plate'readOnly></input>
            <input value='Color' readOnly></input>
            <input value='Model' readOnly></input>
            <input value='Make' readOnly></input>
            <input value='Branch Number' readOnly></input>

            {carlist.map((val)=>{
                console.log(val)
                return <div>
                    <input value={val.licensePlate} readOnly></input>
                    <input value={val.color} readOnly></input>
                    <input value={val.model} readOnly></input>
                    <input value={val.make} readOnly></input>
                    <input value={val.branchNo} readOnly></input>
                </div>
            })}
        </div>
    )
}