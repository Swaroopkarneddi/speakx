import React from "react";
import "./Register.css";
import XIcon from "@mui/icons-material/X";

function Register() {
  return (
    <div className="register">
      <div className="login_logo">
        <XIcon className="login_logo_logo" />
      </div>
      <div className="login_login">
        <div className="login_text">
          Happening now
          <span>
            <br /> Join today.
          </span>
        </div>
        <form action="">
          <input type="name" placeholder=" enter your name" />
          <br />
          <input type="email" placeholder=" enter your email" />
          <br />
          <input type="password" placeholder=" enter your password" />
          <br />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
