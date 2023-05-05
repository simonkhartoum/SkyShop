import React, { useState, useEffect } from 'react';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(' http://localhost:8000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  
  };

  return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.details}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
