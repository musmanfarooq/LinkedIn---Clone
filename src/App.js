import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import RightSideBar from "./Components/RightSideBar";
import NewsFeed from "./Components/NewsFeed";
import LoginPage from "./Pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        console.log("islogout");
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

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
