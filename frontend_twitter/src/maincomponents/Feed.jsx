import React, { useEffect } from "react";
import "./Feed.css";
import Headder from "../components/Headder";
import Post from "../components/Post";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@mui/material";
function Feed() {
  const [data, setdata] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // const { displayname, username, verified, text, image, avatar } = data;
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await axios.get("/feed");
        if (resp.data.error) {
          toast.error(resp.data.error);
        } else {
          setdata(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="feed">
      <Headder />
      <Button onClick={handleRefresh} className="feed_refresh">
        REFRESH
      </Button>
      {data.map((post, index) => (
        <Post
          key={index}
          displayName={post.displayname}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
