import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import RightSideBar from "./Components/RightSideBar";
import NewsFeed from "./Components/NewsFeed";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="appbody">
        <RightSideBar />
        <NewsFeed/>
      </div>
    </div>
  );
}

export default App;
