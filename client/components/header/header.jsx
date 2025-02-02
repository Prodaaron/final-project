import React, { useState, useEffect } from "react";
import Logo from "../../src/assets/images/logo/mesarg-logo-favico.ico";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, role, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // If you want to log the role change, you can use an effect:
  useEffect(() => {
    console.log("Header received role:", role);
  }, [role]);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest("#hamburger") &&
        !event.target.closest("#menu")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuOnLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="header-nav">
      <div className="header-logo-container">
        <NavLink to="/" onClick={closeMenuOnLinkClick}>
          <img className="header-logo" src={Logo} alt="logo" />
        </NavLink>
      </div>

      {/* Hamburger menu button */}
      <div id="hamburger" className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Menu */}
      <div id="menu" className={`mid-right-header ${isMenuOpen ? "open" : ""}`}>
        <ul className="middle-header">
          <li>
            <NavLink to="/" onClick={closeMenuOnLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenuOnLinkClick}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenuOnLinkClick}>
              About
            </NavLink>
          </li>
          {/* Render the Admin Dashboard link if role === "admin" */}
          {role === "admin" && (
            <li>
              <NavLink to="/admin-dashboard" onClick={closeMenuOnLinkClick}>
                Admin Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* Authentication Links */}
        <ul className="right-header">
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/signup" onClick={closeMenuOnLinkClick}>
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={closeMenuOnLinkClick}>
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;