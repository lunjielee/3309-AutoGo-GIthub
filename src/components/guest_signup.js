import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestSingup() {
        //React hooks
        const [username,setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [address, setAddress] = useState("");
        const [phone, setPhone] = useState("");
        const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

        //For navigate between pages
        let navigate = useNavigate();

        //Login function
        const guestSignup = () => {
            if (username !== '' && password!=='' && phone !=='') {
                console.log('guest-signup usr '+username)
                console.log('guest-signup pws '+password)
                // Using Axios to send post request to our backend
                Axios.post(`http://${API_DOMAIN}:8081/api/guest_signup`, {
                    signupType: 'guest',
                    username: username,
                    password: password,
                    address:address,
                    phone:phone
                }).then(response => {
                    localStorage.setItem("currentUser", username)
                    navigate('/guest-home')
                    window.location.reload();
                })
            }
        }
    return(
        <div>guest signup page</div>,


        <div className="signup_con">

        <form className="signup_form">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input onChange={(event) => { setUsername(event.target.value) }} class="form-control" id="username" required/>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input onChange={(event) => { setPassword(event.target.value) }} type="password" class="form-control" id="password" required/>
            </div>

            <div class="mb-3">
                <label for="address" class="form-label">Address (optional)</label>
                <input onChange={(event) => { setAddress(event.target.value) }} class="form-control" id="address"/>
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input onChange={(event) => { setPhone(event.target.value) }} class="form-control" id="phone" required/>
            </div>

            <button onClick={guestSignup} type="submit" class="btn btn-primary">Signup As Guest</button>
        </form> 
        </div>
    
    )
    
}