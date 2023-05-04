import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
  
    <div className='Box'>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   fontSize:"28px" }}>
        SKYSHOP: Your one stop-shop!!
      </h1>
      <div className='Container'>
        <div className='Row'>
          <div className='column'>
            < heading className="heading">COMPANY</ heading >
            <a href="#">About Us</a>
            <a href="#">Sell with SkyShop</a>
            <a href="#">Sky.Shop Blog</a>
            <a href="#">Track Your Orders</a>
          </div>
          <div className='column'>
            < heading className="heading">Contact Us</ heading >
            <a href="#">FAQ center</a>
            <a href="#">hello@SkyShop</a>
            <a href="#">1st Floor Adams Arcade</a>
            
          </div>
          <div className='column'>
            < heading className="heading">Shopping is Easy</ heading >
            <a href="#">Same day delivery</a>
            <a href="#">Payment online or on delivery</a>
            <a href="#">Free Returns</a>
            
          </div>
          <div className='column'>
            < heading className="heading">Follow Us</ heading >
            <a href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </a>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;

