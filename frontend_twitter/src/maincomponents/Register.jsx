import React from "react";
import "./Register.css";
import XIcon from "@mui/icons-material/X";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const registeruser = async (e) => {
    e.preventDefault();
    const { name, email, password, username } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setdata({});
        toast.success("registration sucess");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={registeruser}>
          <input
            type="name"
            placeholder=" enter your name"
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />
          <br />
          <input
            type="name"
            placeholder=" enter your user name"
            value={data.username}
            onChange={(e) => setdata({ ...data, username: e.target.value })}
          />
          <br />
          <input
            type="email"
            placeholder=" enter your email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder=" enter your password"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
          <br />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
