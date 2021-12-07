import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestSingup() {
    //React hooks
    const [licensePlate, setLicensePlate] = useState("");
    const [model, setModel] = useState("");
    const [make, setMake] = useState("");
    const [color, setColor] = useState("");
    const [carList, setCarList] = useState([]);
    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    let nav = useNavigate();

    const carRegister = () => {
        // Using Axios to send post request to our backend
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_register_car`, {
            licensePlate: licensePlate,
            model: model,
            make: make,
            color: color,
            clientNo: localStorage.getItem("clientNo")
        }).then(response => {
            console.log(response.data);
            alert("success")
        })

    }
    const getAllCar = () => {
        // Using Axios to send post request to our backend
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_get_all_car`, {
            clientNo: localStorage.getItem("clientNo")
        }).then(response => {
            console.log(response.data);
            setCarList(response.data);
        })

    }

    return (
        <div class="row">
            <div class="mt-3 mb-3">
                <button onClick={() => { nav(-1) }} id='guest-reg-btn-1' class="btn btn-primary" type="button">Back to Guest Home Page</button>
            </div>
            <div class="align-items-center w-25 m-auto">
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
                            placeholder="Make" />
                        <label for="make" class="form-label">Make</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input onChange={(event) => { setColor(event.target.value) }} name="color" type="text" class="form-control" id="color"
                            placeholder="Color" />
                        <label for="color" class="form-label">Color</label>
                    </div>
                    <button onClick={carRegister} type='button' class="btn btn-primary">Sign Up Your Car</button>
                </form>
            </div>
            <div>
                <div class="mt-3">
                    <button onClick={getAllCar} type='button' class="btn btn-primary">Show All Cars Registered</button>
                </div>
                <div class="mt-3">
                    <div class="row">
                        <div class="border border-primary col">License Plate</div>
                        <div class="border border-primary col">Model</div>
                        <div class="border border-primary col">Make</div>
                        <div class="border border-primary col">Color</div>
                    </div>
                    {carList.map((val) => {
                        console.log(val)
                        return <div class="row">
                            <div class="border col">{val.licensePLate}</div>
                            <div class="border col">{val.model}</div>
                            <div class="border col">{val.make} </div>
                            <div class="border col">{val.color}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}