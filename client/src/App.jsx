import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/header.jsx";
import Home from "../pages/home.jsx";
import Products from "../pages/products.jsx";
import About from "../pages/about.jsx";
import Signup from "../pages/signup.jsx";
import Login from "../pages/login.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;