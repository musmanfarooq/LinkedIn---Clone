import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NavBarIcons from "./NavBarIcons";
import { Home, Group, Work, Message, Notifications } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedin logo"
        />
        <div className="navbar__search">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="navbar__right">
        <NavBarIcons Icon={Home} title="Home" />
        <NavBarIcons Icon={Group} title="My Network" />
        <NavBarIcons Icon={Work} title="Jobs" />
        <NavBarIcons Icon={Message} title="Messaging" />
        <NavBarIcons Icon={Notifications} title="Notifications" />
        <NavBarIcons
          avatar="https://occ-0-1242-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABREqJW8jJAoSQksyGaNcnbGKith54H6eyxJn--GI-vumuX4-378QiUW_AarRAATIHPEtYpAJCcBU6vwAIRFUE0HevMe-lHD4mIH6.png?r=e31"
          title="me"
        />
      </div>
    </div>
  );
};
