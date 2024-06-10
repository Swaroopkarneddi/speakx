import React from "react";
import "./Headder.css";
import { Avatar } from "@mui/material";

function Headder() {
  return (
    <div className="tweetbox">
      {/* Tweetbox */}
      <form>
        <div className="tweetbox_input">
          <Avatar src="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1" />
          <input placeholder="what's happening ?" type="text" />
        </div>

        {/* <input
          className="tweetbox_inputimage"1
          placeholder="enter image url"
          type="text"
        /> */}
        {/* <Button className="tweetbox_tweetbutton">Tweet</Button> */}
        <button className="tweetbox_tweetbutton">tweet</button>
      </form>
    </div>
  );
}

export default Headder;
