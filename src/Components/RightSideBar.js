import { Avatar } from "@mui/material";
import React from "react";
import "./RightSideBar.css";

function RightSideBar() {
  const recentItems = (topic) => (
    <div className="sidebar__recentIems">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/D4D16AQGxvfuC89PGJQ/profile-displaybackgroundimage-shrink_200_800/0/1667506363389?e=1675900800&v=beta&t=MKI3qMwuzXksfHNyusdRc5TIuVx9al7eF3WNYhTCE24"
          alt="background"
        />
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/D4D03AQF3faGk7y4ZAA/profile-displayphoto-shrink_100_100/0/1667490640662?e=1675900800&v=beta&t=dj4d2z2-p4H8cybkKvtqBCifyJQgzIdNnH_8OgKcT2s"
          className="sidebar__avatar"
        />
        <h2>Usman Farooq</h2>
        <h4>React Js Developer</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statnumber">37</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your post</p>
          <p className="sidebar__statnumber">60</p>
        </div>
      </div>
      <div className="siderbar__bottom">
        <p>Recent</p>
        {recentItems("React Js")}
        {recentItems("JavaScript")}
        {recentItems("TypeScript")}
        {recentItems("Next Js")}
        {recentItems("Vue Js")}
      </div>
    </div>
  );
}

export default RightSideBar;
