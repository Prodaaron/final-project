import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from '../pages/home.jsx';
import Products from '../pages/products.jsx';
import About from '../pages/about.jsx';
import './App.css';

function App() {

  return (
    <>

      
      <Router>
        
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
