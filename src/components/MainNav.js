import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/menu"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
     Menu
    </NavLink>
    <NavLink
      to="/order"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
     Order Now
    </NavLink>
  </div>
);

export default MainNav;
