import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/about">
        About
      </NavLink>
      <NavLink exact={true} activeStyle={{ fontWeight: "bold" }} to="/">
        Homepage
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/discover">
        Discover
      </NavLink>
    </div>
  );
}

export default NavBar;
