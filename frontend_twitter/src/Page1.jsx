import React from "react";
import Sidebar from "./maincomponents/Sidebar";
import Feed from "./maincomponents/Feed";
import Sugestions from "./maincomponents/Sugestions";
import "./Page1.css";
function Page1() {
  return (
    <div className="page1">
      <Sidebar />
      <Feed />
      <Sugestions />
    </div>
  );
}

export default Page1;
