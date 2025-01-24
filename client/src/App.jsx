import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
