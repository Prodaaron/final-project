import React, { useState, useEffect } from "react";
import Logo from "../../src/assets/images/logo/mesarg-logo-favico.ico";
import "./header.css"
import { NavLink } from "react-router-dom";

const header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Simulate checking login status (replace with real API or token check)
    useEffect(() => {
      const token = localStorage.getItem("authToken"); // Check token in localStorage
      if (token) {
        setIsLoggedIn(true); // User is logged in
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem("authToken"); // Clear token
      setIsLoggedIn(false); // Update state
    };
  
    const handleLogin = () => {
      localStorage.setItem("authToken", "sampleToken"); // Simulate setting a token
      setIsLoggedIn(true); // Update state
    };

  return (
    <div>
      
      <nav className="header-nav">
        <div className="header-logo-container">
          <img className="header-logo" src={Logo} alt="logo" />
        </div>
        <ul className="middle-header">
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
        </ul>

        {!isLoggedIn ? (
        <ul>
          <li>
            <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </li>
          <li>
            <button onClick={handleLogin}>Simulate Login</button>
          </li>
        </ul>
        ) : (
        <ul>
          <li>
          <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        )}
      </nav>
      
    </div>
  )
}

export default header
