import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./maincomponents/Sidebar";
import Feed from "./maincomponents/Feed";
import Sugestions from "./maincomponents/Sugestions";
import Login from "./maincomponents/Login";
import Register from "./maincomponents/Register";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";

import { Toaster } from "react-hot-toast";
import Page1 from "./Page1";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <div className="main">
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Sidebar />
            <Feed />
            <Sugestions /> */}
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
