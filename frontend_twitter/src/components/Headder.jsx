import React from "react";
import "./Headder.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Avatar } from "@mui/material";

function Headder() {
  const [data, setdata] = useState({
    displayname: "swaroop",
    username: "swaroopkarneddi",
    verified: true,
    text: "",
    image: "",
    avatar:
      "https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg",
  });

  const addpost = async (e) => {
    e.preventDefault();

    const { displayname, username, verified, text, image, avatar } = data;
    try {
      const { data } = await axios.post("/newpost", {
        displayname,
        username,
        verified,
        text,
        image,
        avatar,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setdata({ ...data, text: "", image: "" });
        toast.success("post added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="tweetbox">
      {/* Tweetbox */}
      <form onSubmit={addpost}>
        <div className="tweetbox_input">
          <Avatar src="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1" />
          <input
            placeholder="what's happening ?"
            type="text"
            value={data.text}
            onChange={(e) => setdata({ ...data, text: e.target.value })}
          />
        </div>
        <input
          placeholder="upload url"
          type="text"
          className="url_input"
          value={data.image}
          onChange={(e) => setdata({ ...data, image: e.target.value })}
        />

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
