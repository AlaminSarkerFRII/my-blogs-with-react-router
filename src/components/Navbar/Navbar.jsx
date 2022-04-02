import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 w-full h-20">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="text-3xl px-2 sm:justify-center space-x-4 font-bold hover:text-indigo-400">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/videos"
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
