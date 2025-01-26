import React, { useState, useEffect } from "react";
import Logo from "../../src/assets/images/logo/mesarg-logo-favico.ico";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state

  // Simulate checking login status (replace with real API or token check)
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Check token in localStorage
    if (token) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  // Close menu when clicking outside of it or on a NavLink
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        !event.target.closest("#hamburger") && 
        !event.target.closest("#menu")
      ) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup on unmount
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setIsLoggedIn(false); // Update state
  };

  const handleLogin = () => {
    localStorage.setItem("authToken", "sampleToken"); // Simulate setting a token
    setIsLoggedIn(true); // Update state
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Function to close the menu when a NavLink is clicked
  const closeMenuOnLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a page is clicked
  };

  return (
    <div>
      <nav className="header-nav">
        <div className="header-logo-container">
          <NavLink to="/">
            <img className="header-logo" src={Logo} alt="logo" />
          </NavLink>
        </div>

        <div id="hamburger" className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div id="menu" className={`mid-right-header ${isMenuOpen ? 'open' : ''}`}>
          <ul className="middle-header">
            <li>
              <NavLink to="/" activeClassName="active" onClick={closeMenuOnLinkClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active" onClick={closeMenuOnLinkClick}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={closeMenuOnLinkClick}>About</NavLink>
            </li>
          </ul>

          {!isLoggedIn ? (
            <ul className="right-header">
              <li>
                <NavLink to="/signup" activeClassName="active" onClick={closeMenuOnLinkClick}>Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName="active" onClick={closeMenuOnLinkClick}>Login</NavLink>
              </li>
              <li>
                <button onClick={handleLogin}>Simulate Login</button>
              </li>
            </ul>
          ) : (
            <ul className="right-header">
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;