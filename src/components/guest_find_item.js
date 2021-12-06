import React, { useState } from "react";
import Axios from 'axios';

export default function GuestFindItem() {

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

    const [itemNo, setItemNo]=useState("");
    const [itemlist,setItemList]=useState([]);

    const getItemList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_find_item`, {
            itemNo: itemNo
        }).then(response => {
            console.log(response.data)
            setItemList(response.data);
        })
    }

    return (
        <div>
            <h1>Find Accessory Locations</h1>
            <div style={a_div_style}>
                <a href='/guest-home' style={a_style}>Back to Guest Home Page</a>
            </div>

            <br/>
            <label for='item'>Enter item name: </label><br/>
            <input onChange={(event)=>{setItemNo(event.target.value)}} id='item' placeholder='Type in item name'/>
            <button onClick={getItemList}>Show Item Locations</button><br />
            <br></br>
            <input value='Item' readOnly></input>
            <input value='Price' readOnly></input>
            <input value='location' readOnly></input>
            <input value='inventory' readOnly></input>
            <br />

            {itemlist.map((val) => {
                return <div>
                    <input value={val.item} readOnly></input>
                    <input value={val.price} readOnly></input>
                    <input value={val.location} readOnly></input>
                    <input value={val.inventory} readOnly></input>
                </div>
            })}
        </div>
    )
}