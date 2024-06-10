import React from "react";
import "./SidebarOptions.css";
function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebaroptions">
      <Icon className="sidebaroptions_icon" />
      <h2 className="sidebaroptions_text">{text}</h2>
    </div>
  );
}

export default SidebarOptions;
