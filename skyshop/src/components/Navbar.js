import React, { useState } from 'react';
import '../App.css';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    body.classList.toggle('DarkMode');
  };

  const navbarClassName = isDarkMode ? 'Navbar DarkMode' : 'Navbar LightMode';
  const searchBoxClassName = isDarkMode ? 'SearchBox DarkMode' : 'SearchBox LightMode';

  return (
    <div className={navbarClassName}>
      <div className="leftSide">
        <div className="links">
          <a href="skyshop" style={{color:"rgb(13, 226, 155)"}}>SkyShop</a>
          <a href="phones">Phones</a>
          <a href="laptops">Laptops</a>
          <a href="accessories">Accessories</a>
        </div>
      </div>
      <div className="rightSide">
        <div className={searchBoxClassName}>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <a href="admin">Admin</a>
        <a href="add to cart">Add To Cart</a>
      </div>
    </div>
  );
}

export default Navbar;

