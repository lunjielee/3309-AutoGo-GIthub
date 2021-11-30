import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestHome() {
    
    return (
        <div>Guest Home page<br/>
            <a href='/guest-view-appointment'>view my appointments</a><br/>
            <a href=''>book a appointment</a><br/>
            <a href=''>my profile</a><br/>
        </div>
    )

}