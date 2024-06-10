import React from "react";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import "./Sidebar.css";

import SidebarOptions from "../components/SidebarOptions";

function Sidebar() {
  return (
    <div>
      <XIcon className="mainicon" />
      <SidebarOptions text="Home" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={HomeIcon} />
    </div>
  );
}

export default Sidebar;
