import React from "react";
import "./Feed.css";
import Headder from "../components/Headder";
import Post from "../components/Post";
function Feed() {
  return (
    <div className="feed">
      <Headder />

      <Post
        displayName="swaroop"
        username="swaroopkarneddi"
        verified={true}
        text="it is working"
        avatar="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1"
        image="https://giffiles.alphacoders.com/220/220228.gif"
      />
      <Post
        displayName="swaroop"
        username="swaroopkarneddi"
        verified={true}
        text="it is working"
        avatar="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1"
        image="https://giffiles.alphacoders.com/220/220228.gif"
      />
      <Post
        displayName="swaroop"
        username="swaroopkarneddi"
        verified={true}
        text="it is working"
        avatar="https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1"
        image="https://giffiles.alphacoders.com/220/220228.gif"
      />
    </div>
  );
}

export default Feed;
