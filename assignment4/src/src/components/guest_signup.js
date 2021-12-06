import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestSingup() {
    //React hooks
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    //For navigate between pages
    let navigate = useNavigate();

    //Login function
    const guestSignup = () => {
        if (username !== '' && password !== '' && phone !== '') {
            console.log('guest-signup usr ' + username)
            console.log('guest-signup pws ' + password)
            // Using Axios to send post request to our backend
            Axios.post(`http://${API_DOMAIN}:8081/api/guest_signup`, {
                signupType: 'guest',
                username: username,
                password: password,
                address: address,
                phone: phone
            }).then(response => {
                console.log(response);
                localStorage.setItem("currentUser", username)
                navigate('/login')
                window.location.reload();
            })
        }
    }
    return (
        <div class="row align-items-center w-25 m-auto">
            <h2>
                Welcome <small class="text-muted">New Guest</small>
            </h2>
            <form>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setUsername(event.target.value) }} name="inputUserName" type="text" class="form-control" id="username_guest"
                        placeholder="User name" required />
                    <label for="username" class="form-label">Username</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setPassword(event.target.value) }} name="inputPassword" type="password" class="form-control" id="password_guest"
                        placeholder="Password" required />
                    <label for="password" class="form-label">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setAddress(event.target.value) }} name="inputAddress" type="password" class="form-control" id="address_guest"
                        placeholder="1 Infinite Loop" />
                    <label for="address" class="form-label">Address (Optional)</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setPhone(event.target.value) }} name="inputPhone" type="password" class="form-control" id="phone_guest"
                        placeholder="1234567890" required />
                    <label for="phone" class="form-label">Phone</label>
                </div>
                <button onClick={guestSignup} type='button' class="btn btn-primary">Sign Up as Guest</button>
            </form>
        </div>
    )
}
