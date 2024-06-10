import React from "react";
import XIcon from "@mui/icons-material/X";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import XIcon from "@mui/icons-material/X";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./Sidebar.css";

import SidebarOptions from "../components/SidebarOptions";

function Sidebar() {
  return (
    <div className="sidebar">
      <XIcon className="mainicon" />
      <SidebarOptions text="Home" Icon={HomeIcon} active />
      <SidebarOptions text="Explore" Icon={SearchIcon} />
      <SidebarOptions text="Notification" Icon={NotificationsIcon} />
      <SidebarOptions text="Messages" Icon={MailOutlineIcon} />
      <SidebarOptions text="Community" Icon={PeopleOutlineIcon} />
      <SidebarOptions text="Premium" Icon={XIcon} />
      <SidebarOptions text="Profile" Icon={PermIdentityIcon} />
      <SidebarOptions text="Boookmarks" Icon={BookmarkBorderIcon} />
    </div>
  );
}

export default Sidebar;
