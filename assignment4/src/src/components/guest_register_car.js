import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestSingup() {
    //React hooks
    const[licensePlate, setLicensePlate]= useState("");
    const[model, setModel] = useState("");
    const[make, setMake] = useState("");
    const[color,setColor] = useState("");
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    let navigate = useNavigate();

    const carRegister = () => {
          // Using Axios to send post request to our backend
            Axios.post(`http://${API_DOMAIN}:8081/api/guest_register_car`, {
                licensePlate: licensePlate,
                model: model,
                make: make,
                color: color,
                clientNo: localStorage.getItem("clientNo")

            }).then(response => {
                console.log(response);
                alert("success")
                navigate(-1)
                window.location.reload();

            })
        
    }

    return (
        <div class="row align-items-center w-25 m-auto">
            <h2>
                Welcome <small class="text-muted">New Guest</small>
                <h1>Register Your Car</h1>
            </h2>
            <form>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setLicensePlate(event.target.value) }} name="licensePlate" type="text" class="form-control" id="licensePlate"
                        placeholder="License Plate" required />
                    <label for="licensePlate" class="form-label">License Plate</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setModel(event.target.value) }} name="model" type="text" class="form-control" id="model" 
                        placeholder="Model" required />
                    <label for="model" class="form-label">Model</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setMake(event.target.value) }} name="make" type="text" class="form-control" id="make"
                        placeholder="Make" required />
                    <label for="make" class="form-label">Make</label>
                </div>
                <div class="form-floating mb-3">
                    <input onChange={(event) => { setColor(event.target.value) }} name="color" type="text" class="form-control" id="color"
                        placeholder="Color" required />
                    <label for="color" class="form-label">Color</label>
                </div>
                <button onClick={carRegister} type='button' class="btn btn-primary">Sign Up Your Car</button>


                <br></br>
                <div class="form-floating mb-3">
                    <button onClick={() => { nav(-1) }} id='guest-find-item-btn-1' class="btn btn-primary" type="button">Back to Guest Home Page</button>
                </div>
                
                
            </form>
        </div>
    )
}