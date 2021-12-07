import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffViewBranchRevenue() {
    const nav = useNavigate()
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
            <h2>View Branch Monthly Revenue Page</h2>
            <div class="mt-3">
                <button onClick={() => { nav(-1) }} id='staff-view-btn-1' class="btn btn-primary" type="button">Back to Home Page</button>
            </div>
            <div class="input-group mb-3 mt-3 w-50 m-auto">
                <input onChange={(event) => { setDateFrom(event.target.value) }} id='dateFrom' type="text" class="form-control" placeholder="E.g. 2021-08-01 00:00:00" aria-label="Date From"></input>
                <span class="input-group-text">To</span>
                <input onChange={(event => { setDateTo(event.target.value) })} id='dateTo' type="text" class="form-control" placeholder="E.g. 2021-08-31 00:00:00" aria-label="Date To"></input>
            </div>
            <button onClick={getDateList} id='staff-view-btn-2' class="btn btn-primary" type="button">Show Branch with Above Range</button>
            <div class="mt-3">
                <div>
                    <div class="row">
                        <div class="border border-primary col">Branch Number</div>
                        <div class="border border-primary col">Location</div>
                        <div class="border border-primary col">Monthly Revenue</div>
                    </div>
                    {dateList.map((val) => {
                        return <div class="row">
                            <div class="border col">{val.branchNo}</div>
                            <div class="border col">{val.location}</div>
                            <div class="border col">{val.totalPayment}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
