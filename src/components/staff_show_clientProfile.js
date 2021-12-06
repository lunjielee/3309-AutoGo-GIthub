import React, { useState } from "react";
import Axios from 'axios';

export default function StaffShowClientProfile() {

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

    const [clientNo, setClientNo] = useState();
    const [clientList, setClientList] = useState([])

    const getClientList = ()=>{
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_show_clientProfile`, {
            clientNo: clientNo

        }).then(response => {
            console.log(response.data);
            setClientList(response.data);
        })
    }

    return(
        <div>
            <h1>Your Personal Information</h1>
            <div style={a_div_style}>
                <a href='/staff-home' style={a_style}>Back to Staff Home</a>
            </div>
            
            <input onChange={(event)=> {setClientNo(event.target.value)}} id='clientNo' placeholder="Client Number"></input><br/>

            <button onClick={getClientList}>Profile</button>

            <br/>
            <input value='Client Number'readOnly></input>
            <input value='Name' readOnly></input>
            <input value='Password' readOnly></input>
            <input value='Address' readOnly></input>
            <input value='Phone Number' readOnly></input>

            {clientList.map((val)=>{
                console.log(val)
                return <div>
                    <input value={val.clientNo} readOnly></input>
                    <input value={val.name} readOnly></input>
                    <input value={val.password} readOnly></input>
                    <input value={val.address} readOnly></input>
                    <input value={val.phone} readOnly></input>
                </div>
            })}
        </div>
    )
}