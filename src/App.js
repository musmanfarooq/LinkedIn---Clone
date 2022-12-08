import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import RightSideBar from "./Components/RightSideBar";
import NewsFeed from "./Components/NewsFeed";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {!user ? (
        <LoginPage />
      ) : (
        <div>
          <Navbar />
          <div className="appbody">
            <RightSideBar />
            <NewsFeed />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
