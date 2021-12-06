import React, { useState } from "react";
import Axios from 'axios';

export default function StaffViewBranchRevenue() {

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

    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [dateList, setDateList] = useState([]);


    const getDateList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/staff_view_branchRevenue`, {
            dateFrom: dateFrom,
            dateTo: dateTo

        }).then(response => {
            console.log(response.data);
            setDateList(response.data);
        })
    }

    return (
        <div>
            <h1>Staff View Branch Monthly Revenue Page</h1>
            <div style={a_div_style}>
                <a href='/staff-manager-home' style={a_style}>Back to Manager Home Page</a><br />
            </div>

            <input onChange={(event) => { setDateFrom(event.target.value) }} id='dateFrom' placeholder='Date From'></input><br />
            <input onChange={(event => { setDateTo(event.target.value) })} id='dateTo' placeholder='Date To'></input><br />

            <button onClick={getDateList}>Show Branch</button>
            <div>Follow this format: 2021-08-20 10:00:00</div>
            <br></br>
            <input value='Branch Number' readOnly></input>
            <input value='Location' readOnly></input>
            <input value='Monthly Revenue' readOnly></input>
            <br/>
            {dateList.map((val) => {
                console.log(val)

                return <div>
                    <input value={val.branchNo} readOnly></input>
                    <input value={val.location} readOnly></input>
                    <input value={val.totalPayment} readOnly></input>
                </div>
            })}
        </div>
    )
}
