import React from "react";
import "./Profiles.css";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
function Profiles() {
  return (
    <div className="profiles">
      <div className="profile_avatar">
        <Avatar src="https://itsupplychain.com/wp-content/uploads/2019/10/Peter-Nilsson-VP-Strategic-Initiatives-MPO-566-x-400-900-x-636.jpg" />
      </div>
      <div className="profile_text">
        Elon musk <VerifiedIcon className="profile_verified" />{" "}
        <span>
          {" "}
          <br />@ elonmusk
        </span>
      </div>
      <div className="profile_follow">
        <button className="profile_follow_Button">follow</button>
      </div>
    </div>
  );
}

export default Profiles;
