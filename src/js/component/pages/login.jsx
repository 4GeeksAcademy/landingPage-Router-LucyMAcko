import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () =>{
    const navigate = useNavigate();
    return (
        <div className="container" id="login">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><strong>Email address</strong></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div>
                <label for="inputPassword5" class="form-label"><strong>Password</strong></label>
                <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"></input>
                <div id="passwordHelpBlock" class="form-text">
                ℹ️ Your password must be 5-7 characters long, must contain an ⬆️ letter, a number, a hieroglyph, a hair from a firstborn child and the blood of a 🦄
                </div>
            </div>
            <div className="text-center mt-5">
            <button type="button" className="btn btn-light" onClick={() => navigate("/home")}>Log In</button>
            </div>            
        </div>

    )
}

export default LogIn

