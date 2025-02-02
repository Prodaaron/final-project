import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/header.jsx";
import Home from "../pages/home.jsx";
import Products from "../pages/products.jsx";
import About from "../pages/about.jsx";
import AdminDashboard from "../pages/adminDashboard.jsx";
import Signup from "../pages/signup.jsx";
import Login from "../pages/login.jsx";
import Footer from "../components/footer/footer.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  // When the app mounts or when isLoggedIn changes, update auth state and role
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <Router>
      {/* Pass role as a prop to Header */}
      <Header isLoggedIn={isLoggedIn} role={role} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;