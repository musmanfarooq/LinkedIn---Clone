import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import RightSideBar from "./Components/RightSideBar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="appbody">
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
