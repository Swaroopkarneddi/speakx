import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./maincomponents/Sidebar";
import Feed from "./maincomponents/Feed";
import Sugestions from "./maincomponents/Sugestions";
import Login from "./maincomponents/Login";
import Register from "./maincomponents/Register";
import axios from "axios";

import { Toaster } from "react-hot-toast";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <div className="main">
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />

        <Login />
        {/* <Register /> */}
        {/* <Sidebar />
        <Feed />
        <Sugestions /> */}
      </div>
    </>
  );
}

export default App;
