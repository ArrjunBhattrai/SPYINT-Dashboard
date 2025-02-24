import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Menu Icon */}
      <div
        className="menu-container"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setTimeout(() => setIsOpen(false), 200)} // Small delay to allow movement
      >
        <FaBars className="menu-icon" />
        {isOpen && (
          <ul
            className="dropdown"
            onMouseEnter={() => setIsOpen(true)} // Keep open when hovering over dropdown
            onMouseLeave={() => setTimeout(() => setIsOpen(false), 200)} // Allow smooth transition
          >
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/case">Case Management</Link></li>
            <li><Link to="/report">Report A Profile</Link></li>
          </ul>
        )}
      </div>

      {/* Center: Logo */}
      <div className="logo-container">
        <img src="logo.jpg" alt="Logo" className="logo" />
      </div>

      {/* Right: Notification & User Icons */}
      <div className="right-icons">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </header>
  );
}

export default Header;