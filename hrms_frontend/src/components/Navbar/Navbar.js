import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell, FaCog, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* LEFT SECTION */}
      <div className="navbar-left">
        <div className="logo-section">
          <div className="logo-circle">HR</div>
          <h2 className="portal-title">HR Portal</h2>
        </div>

        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Employees
          </Link>
          <Link
            to="/attendance"
            className={location.pathname === "/attendance" ? "active-link" : ""}
          >
            Attendance
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-right">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text"  />
        </div>

        <FaBell className="icon-btn" />
        <FaCog className="icon-btn" />
        <FaUserCircle className="profile-icon" />
      </div>
    </nav>
  );
}

export default Navbar;