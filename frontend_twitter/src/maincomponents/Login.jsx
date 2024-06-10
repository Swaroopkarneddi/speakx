import React from "react";
import "./Login.css";
import XIcon from "@mui/icons-material/X";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const loginuser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setdata({});
        navigate("/");
      }
    } catch (error) {}
    // axios.get("/");
  };
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
        <form onSubmit={loginuser}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
