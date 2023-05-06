import React, { useState } from 'react';
import '../App.css';
function Navbar(props) {
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
          <a href="products">Products</a>
        </div>
      </div>
      <div className="rightSide">
        <div className={searchBoxClassName}>
          <input type="text" placeholder="Search..." />
          <button style={{backgroundColor:"rgb(15, 226, 155)",marginRight:"0px"}}>Search</button>
        </div>
        <a href="admin" style={{color:"rgb(15, 226, 155"}} >Admin</a>
        <a href="add to cart">Add To Cart</a>
        <button style={{backgroundColor:"rgb(15, 226, 155)",color:"black"}}  onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
}

export default Navbar;
