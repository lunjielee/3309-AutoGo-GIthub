import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffLogin() {
    //React hooks
    const [currentUser, setCurrentUser] = useState("");
    const [password, setPassword] = useState("");
    const [authKey, setAuthKey] = useState("Not authorized");//what's this for?
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    //For navigate between pages
    let navigate = useNavigate();

    //Login function
    const staffLogin = () => {
        if (currentUser !== "" && password!=="") {
            // Using Axios to send post request to our backend
            Axios.post(`http://${API_DOMAIN}:8081/api/staff_login`, {
                loginType: 'staff',
                usr: currentUser,
                pwd: password
            }).then(response => {
                setAuthKey(response.data)
                if (currentUser !== "" && response.data !== "") {
                    localStorage.setItem("currentUser", currentUser)
                    navigate('/staff-home')
                    window.location.reload();
                } else {
                    alert(authKey);
                }
            })
        }
    }
    return (
        <div className="container">
            <div class="row justify-content-md-center mt-3 mb-3">
                <div class="col">
                    <div class="page-header">
                        <h1>
                            Welcome to <small class="text-muted">Staff Page</small>
                        </h1>
                    </div>
                </div>
                <div class="col mt-3">
                    <h3 class="text-center">
                        Staff Portal
                    </h3>
                    <form class="form-horizontal" >
                        <div class="form-floating mb-3">
                            <input onChange={(event) => { setCurrentUser(event.target.value) }} name="inputUserName" type="text" class="form-control" id="inputUserName"
                                placeholder="User name" required />
                            <label for="inputUserName" class="form-label">User Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onChange={(event) => { setPassword(event.target.value) }} name="inputPassword" type="password" class="form-control" id="inputPassword"
                                placeholder="Password" required />
                            <label for="inputPassword" class="form-label">Password</label>
                        </div>
                        <div class="position-relative">
                            <div class="position-absolute top-0 end-0">
                                <button onClick={staffLogin} class="btn btn-primary" type="button">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}