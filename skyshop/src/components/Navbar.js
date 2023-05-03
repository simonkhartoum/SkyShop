import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-home">
        <Link to="/">Home</Link>
      </div>
      <div className="Navbar-links">
        <Link to="/phones">Phones</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/accessories">Accessories</Link>
      </div>
      <div className="Navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="Navbar-cart">
        <Link to="/cart">Add to Cart</Link>
      </div>
      <div className="Navbar-admin">
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
