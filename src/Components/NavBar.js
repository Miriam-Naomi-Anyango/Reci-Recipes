import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "flex",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white",

};

function NavBar() {
  return (
    <div className="navigation">
      <div className="logo">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Reci
      </NavLink>
      </div>
    <div className="navigation-items">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/recipe/display"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Recipe
      </NavLink>


      <NavLink
        to="/help"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Help
      </NavLink>
    </div>
    </div>
  );
}

export default NavBar;