import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navlink">
      <NavLink activeClassName="active" exact={true} to="/">
        Homepage
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/discover">
        Discover
      </NavLink>
    </div>
  );
}

export default NavBar;
