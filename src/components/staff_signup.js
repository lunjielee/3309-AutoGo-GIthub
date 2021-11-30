import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function StaffSingup() {
    return(
        <div>staff signup page</div>,

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
                <label for="position" class="form-label">Position (optional)</label>
                <input class="form-control" id="position"/>
            </div>

            <div class="mb-3">
                <label for="branchNo" class="form-label">Branch Number</label>
                <input class="form-control" id="branchNo" required/>
            </div>

            <button type="submit" class="btn btn-primary">Signup As Staff</button>
        </form> 

    )
}