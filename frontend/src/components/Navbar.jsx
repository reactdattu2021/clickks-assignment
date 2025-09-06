import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/login" style={{ margin: "0 10px" }}>Login</NavLink>
      <NavLink to="/register" style={{ margin: "0 10px" }}>Register</NavLink>
      <NavLink to="/dashboard" style={{ margin: "0 10px" }}>Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
