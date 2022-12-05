import { Avatar } from "@mui/material";
import React from "react";
import "./NavBarIcons.css";

const NavBarIcons = ({ avatar, Icon, title }) => {
  return (
    <div className="navbaricons">
      {Icon && <Icon className="navbar__icon" />}
      {avatar && <Avatar className="navbar__icon" src={avatar} />}
      <h3 className="navbaricons__title">{title}</h3>
    </div>
  );
};

export default NavBarIcons;
