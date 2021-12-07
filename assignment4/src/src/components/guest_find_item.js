import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestFindItem() {

    const nav = useNavigate()

    const API_DOMAIN = process.env.API_DOMAIN || 'localhost';

    const [itemNo, setItemNo] = useState("");
    const [itemlist, setItemList] = useState([]);

    const getItemList = () => {
        console.log(localStorage.currentUser);
        Axios.post(`http://${API_DOMAIN}:8081/api/guest_find_item`, {
            itemNo: itemNo

        }).then(response => {
            console.log(response.data);
            setItemList(response.data);
        })
    }

    return (
        <div>
            <h2>Find Accessory Locations</h2>
            <div class="mt-3">
                <button onClick={() => { nav('/guest-home') }} id='guest-find-item-btn-1' class="btn btn-primary" type="button">Back to Guest Home Page</button>
            </div>

            <div class="form-floating mb-3 mt-3 w-25 m-auto">
                <input onChange={(event) => { setItemNo(event.target.value) }} name='itemNameInput' type="text" class="form-control" id="item"
                    placeholder="Type in item name" required />
                <label for="itemName" class="form-label">Item Name</label>
            </div>
            <button onClick={getItemList} type='button' class="btn btn-primary">Show Item Locations</button><br />
            <div class="mt-3">
                <div class="row">
                    <div class="border border-primary col">Item</div>
                    <div class="border border-primary col">Price</div>
                    <div class="border border-primary col">Location</div>
                    <div class="border border-primary col">Inventory</div>
                </div>
                {itemlist.map((val) => {
                    return <div class="row">
                        <div class="border col">{val.item}</div>
                        <div class="border col">{val.price}</div>
                        <div class="border col">{val.location} </div>
                        <div class="border col">{val.inventory}</div>
                    </div>
                })}
            </div>
        </div>
    )
}