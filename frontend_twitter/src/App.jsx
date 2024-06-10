import "./App.css";
import Sidebar from "./maincomponents/Sidebar";
import Feed from "./maincomponents/Feed";
import Sugestions from "./maincomponents/Sugestions";

function App() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Feed />
        <Sugestions />
      </div>
    </>
  );
}

export default App;
