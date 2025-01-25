import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../../pages/home.jsx";
import Products from "../../pages/products.jsx";
import About from "../../pages/about.jsx";
import Signup from "../../pages/signup.jsx";
import Login from "../../pages/login.jsx";
import Logo from "../../src/assets/images/logo/mesarg-logo-favico.ico";
import "./header.css"

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
      <Router>
        <nav>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <ul>
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default header
