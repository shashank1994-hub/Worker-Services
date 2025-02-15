import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const isAdmin = true; 

  return (
    <nav className="navbar">
      <h5>Worker's</h5>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li> 
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/worker-list">Worker List</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        {isAdmin && <li><Link to="/admin">Admin</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;