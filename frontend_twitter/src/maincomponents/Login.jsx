import React from "react";
import "./Login.css";
import XIcon from "@mui/icons-material/X";
function Login() {
  return (
    <div className="login">
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
          <input type="email" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
