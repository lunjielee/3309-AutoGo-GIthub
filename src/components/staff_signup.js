import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffSingup() {
    //React hooks
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [position, setPosition] = useState("");
    const [branchNo, setBranchNo] = useState("");
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    //For navigate between pages
    let navigate = useNavigate();

    //Login function
    const staffSignup = () => {
        if (username !== '' && password !== '' && branchNo !== '') {
            console.log('staff-signup usr ' + username)
            console.log('staff-signup pws ' + password)
            // Using Axios to send post request to our backend
            Axios.post(`http://${API_DOMAIN}:8081/api/staff_signup`, {
                signupType: 'staff',
                username: username,
                password: password,
                position: position,
                branchNo: branchNo
            }).then(response => {
                console.log('Inside')
                console.log(response)
                localStorage.setItem("currentUser", username)
                navigate('/login')
                window.location.reload();
            })
        }
    }
    return (
        <div>staff signup page</div>,

        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input onChange={(event) => { setUsername(event.target.value) }} class="form-control" id="username" required />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input onChange={(event) => { setPassword(event.target.value) }} type="password" class="form-control" id="password" required />
            </div>

            <div class="mb-3">
                <label for="position" class="form-label">Position (optional)</label>
                <input onChange={(event) => { setPosition(event.target.value) }} class="form-control" id="position" placeholder="E.g. manager" />
            </div>

            <div class="mb-3">
                <label for="branchNo" class="form-label">Branch Number</label>
                <input onChange={(event) => { setBranchNo(event.target.value) }} class="form-control" id="branchNo" required />
            </div>

            <button onClick={staffSignup} type='button' class="btn btn-primary">Signup As Staff</button>
        </form>

    )
}