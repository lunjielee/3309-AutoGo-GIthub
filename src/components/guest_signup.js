import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function GuestSingup() {

    return(
        <div>guest signup page</div>,

        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input class="form-control" id="username" required/>
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required/>
            </div>

            <div class="mb-3">
                <label for="address" class="form-label">Address (optional)</label>
                <input class="form-control" id="address"/>
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input class="form-control" id="phone" required/>
            </div>

            <button type="submit" class="btn btn-primary">Signup As Guest</button>
        </form> 
    )
    
}