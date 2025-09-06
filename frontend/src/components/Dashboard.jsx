import React, { useContext } from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import Hero from "./Hero";
import Customer from "../pages/Customer";
import Photographer from "../pages/Photographer";
import AboutCompany from "../pages/AboutCompany";
import ContactUs from "../pages/ContactUs";

import "./dashboard.css";

function Dashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">KlickUs</div>
        <ul className="nav-links">
          <li><Link to="/dashboard/customer">Customer</Link></li>
          <li><Link to="/dashboard/photographer">Photographer</Link></li>
          <li><Link to="/dashboard/about">About Company</Link></li>
          <li><Link to="/dashboard/contact">Contact Us</Link></li>
        </ul>
        <button className="auth-btn" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="page-content">
        <Routes>
          <Route index element={<Hero/>} />
          <Route path="customer" element={<Customer />} />
          <Route path="photographer" element={<Photographer />} />
          <Route path="about" element={<AboutCompany />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
