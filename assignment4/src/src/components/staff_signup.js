import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function StaffSingup() {
  //React hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [branchNo, setBranchNo] = useState("");
  const API_DOMAIN = process.env.API_DOMAIN || "localhost";

  //For navigate between pages
  let navigate = useNavigate();

  //Login function
  const staffSignup = () => {
    if (username !== "" && password !== "" && branchNo !== "") {
      console.log("staff-signup usr " + username);
      console.log("staff-signup pws " + password);
      // Using Axios to send post request to our backend
      Axios.post(`http://${API_DOMAIN}:8081/api/staff_signup`, {
        signupType: "staff",
        username: username,
        password: password,
        position: position,
        branchNo: branchNo,
      }).then((response) => {
        console.log("Inside");
        console.log(response);
        localStorage.setItem("currentUser", username);
        navigate("/login");
        window.location.reload();
      });
    }
  };
  return (
    <div class="row align-items-center w-25 m-auto">
      <h2>
        Welcome <small class="text-muted">New Staff</small>
      </h2>
      <form>
        <div class="form-floating mb-3">
          <input onChange={(event) => { setUsername(event.target.value) }} name="inputUserName" type="text" class="form-control" id="username_staff"
            placeholder="User name" required />
          <label for="username" class="form-label">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input onChange={(event) => { setPassword(event.target.value) }} name="inputPassword" type="password" class="form-control" id="password_staff"
            placeholder="Password" required />
          <label for="password" class="form-label">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input onChange={(event) => { setPosition(event.target.value) }} name="inputPosition" type="password" class="form-control" id="position_staff"
            placeholder="E.g. manager" />
          <label for="position" class="form-label">Position (Optional)</label>
        </div>
        <div class="form-floating mb-3">
          <input onChange={(event) => { setBranchNo(event.target.value); }} name="inputBranchNo" type="password" class="form-control" id="branchNo_staff"
            placeholder="E.g. 1" required />
          <label for="branchNo" class="form-label"> Branch Number </label>
        </div>
        <button onClick={staffSignup} type="button" class="btn btn-primary">Sign Up as Staff</button>
      </form>
    </div>
  )
}
