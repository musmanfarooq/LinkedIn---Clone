import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import RightSideBar from "./Components/RightSideBar";
import NewsFeed from "./Components/NewsFeed";
import LoginPage from "./Pages/LoginPage";

function App() {
  // const user = useSelector(selectUser);
  const user = null;

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
