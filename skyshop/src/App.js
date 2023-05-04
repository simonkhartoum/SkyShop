
import React from 'react';
import './App.css';
import sam from './sam.png';
import apl from './apl.png';
import hp from './hp.png';
import dell from './dell.png';
import oraimo from './oraimo.png';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';



const ImageStyle= { 
  padding: "30px",
  width: "160px",
}
const MageStyle= { 
  padding: "30px",
  width: "100px",
}

function App() {
  const [showFeaturedProducts, setShowFeaturedProducts] = useState(false);

  const handleProductsClick = () => {
    setShowFeaturedProducts(true);
  };

  return (
   <>
    <div className="App">
       <Navbar onProductsClick={handleProductsClick}/> 
       {showFeaturedProducts && <FeaturedProducts />}
      <header className="App-header">"
        <img src={hp} alt="shop" style={MageStyle}/>
        <img src={apl} alt="shop" style={MageStyle}/>
        <img src={sam} alt="shop" style={ImageStyle}/>
        <img src="https://skygarden.azureedge.net/media/original_images/Hisense.png" alt="shop" style={ImageStyle}/>
        <img src={dell} alt="shop" style={MageStyle}/>
        <img src="https://skygarden.azureedge.net/media/original_images/Hotpoint_2.png" alt="shop" style={ImageStyle}/>
        <img src="https://skygarden.azureedge.net/media/original_images/lg_1.png" alt="shop" style={ImageStyle}/>
        <img src={oraimo} alt="shop" style={ImageStyle}/>

      </header>
    </div>

      <div className='pcards'>
          <div className='pcard'>
              <div className='card___content'>
                <p>
                <mark>SkyShop is a Kenyan-owned and operated online retail site.</mark> 
                <p>We endeavor to make online shopping simple and convenient.</p>
                Within Nairobi, delivery takes 24 hours, while outside Nairobi, delivery takes 2-3 days. 
                <p> In Nairobi, payment on delivery is accepted.</p>
                <p>Payments are safe convenient for everyone </p>
                </p>
            
              </div>
          </div>
          <div className='pcard'>
              <div className='card___content'>
                <p>
                Get great discounts on Smartphones from leading brands such as Xiaomi, Oppo, Vivo, Samsung, and more.
                <p>Tablets , feature phones, and mobile accessories are all available in one place. </p>
                <p>If the product supplied is damaged or different from the one you ordered, we have a 48-hour return policy. </p>
                </p>
             <p></p>
             <p></p>
              </div>

          </div>
          <div className='pcard'>
              <div className='card___content'>
                <p>
                Shop for Televisions, Home Theater Speakers, 
                and Audio from brands like Samsung, Haier, LG, Vision Plus, Sony, and more on SkyShop.
                </p>
                <p>
                Get high-quality Fridges, Cookers, Air fryers, 
                Washing machines and so much more that come with a warranty.
                </p>
                <p>All these on your number one online shop THE SkyShop</p>
                <header style={{fontSize: "40px"}}>Lets fly</header>
              </div>
          </div>
       </div>  
       <Footer/>
    </>
  );
}

export default App;
