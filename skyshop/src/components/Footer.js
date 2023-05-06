import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
  
    <div className='Box'>
      <h1 style={{ color: "rgb(15, 226, 155)", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   fontSize:"28px" }}>
        SKYSHOP: Your one stop-shop!!
      </h1>
      <div className='Container'>
        <div className='Row'>
          <div className='column'>
            < heading className="heading">COMPANY</ heading >
            <p>About Us</p>
            <p>Sell with SkyShop</p>
            <p>Sky.Shop Blog</p>
            <p>Track Your Orders</p>
          </div>
          <div className='column'>
            < heading className="heading">Contact Us</ heading >
            <p>FAQ center</p>
            <p>hello@SkyShop</p>
            <p>1st Floor Adams Arcade</p>
            
          </div>
          <div className='column'>
            < heading className="heading">Shopping is Easy</ heading >
            <p>Same day delivery</p>
            <p>Payment online or on delivery</p>
            <p>Free Returns</p>
            
          </div>
          <div className='column'>
            < heading className="heading">Follow Us</ heading >
            <p>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </p>
            <p>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </p>
            <p>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </p>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer;

