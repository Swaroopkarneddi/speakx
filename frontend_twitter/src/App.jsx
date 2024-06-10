import { useState } from "react";

import "./App.css";
import Sidebar from "./maincomponents/Sidebar";
import Feed from "./maincomponents/Feed";

function App() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export default App;
