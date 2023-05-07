import React, { useRef, useState } from 'react';
import '../App.css';
import Search from './Search';

import { Navigate } from 'react-router-dom';

function Navbar({props, products, setFilteredProducts}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.querySelector('body');
    body.classList.toggle('DarkMode');
  };

  const navbarClassName = isDarkMode ? 'Navbar DarkMode' : 'Navbar LightMode';
  const searchBoxClassName = isDarkMode ? 'SearchBox DarkMode' : 'SearchBox LightMode';


  const handleProductsClick = (event) => {
    event.preventDefault();
    props.onProductsClick();
  };
 
  // const handleSearchQueryChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSearchButtonClick = () => {
  //   const filtered = products.filter(products =>
  //     products.category.toLowerCase() === searchQuery.toLowerCase());
  //     setFilteredProducts(filtered);
  // }
 



  return (
    <div className={navbarClassName}>
      <div className="leftSide">
        <div className="links">
          <a href="skyshop" style={{color:"rgb(13, 226, 155)"}}>SkyShop</a>
          <a href="products">Products</a>
        </div>
      </div>
      <div className="rightSide">
        {/* <div className={searchBoxClassName}>
          <input 
          type="text" 
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search..."
           />
          <button onClick={handleSearchButtonClick}>Search</button>
        </div> */}
        
        <Search />
        <a href="admin" style={{color:"rgb(15, 226, 155"}} >Admin</a>
        <a href="cart">Cart</a>
        <button style={{backgroundColor:"rgb(15, 226, 155)",color:"black"}}  onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
}

export default Navbar;
