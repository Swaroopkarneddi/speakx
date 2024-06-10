import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebaroptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
