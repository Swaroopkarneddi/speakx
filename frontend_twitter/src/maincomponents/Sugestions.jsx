import React from "react";
import "./Sugestions.css";
import Profiles from "../components/Profiles";
function Sugestions() {
  return (
    <div className="sugestions">
      <div className="sugestions_search">
        <form>
          <input type="text" className="sugestions_search_input" />
        </form>
      </div>
      <div className="sugestions_profiles">
        <Profiles />
        <Profiles />
        <Profiles />
        <Profiles />
      </div>
    </div>
  );
}

export default Sugestions;
