import { useState } from 'react';

function AddToCart() {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(`${product} has been added to the cart!`);
  }

  
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
    console.log(`${product} has been removed from the cart!`);
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product}>
              {product}
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}

      <h2>Products</h2>
      <ul>
        <li>
          Product 1
          <button onClick={() => addToCart('Product 1')}>Add to Cart</button>
        </li>
        <li>
          Product 2
          <button onClick={() => addToCart('Product 2')}>Add to Cart</button>
        </li>
        <li>
          Product 3
          <button onClick={() => addToCart('Product 3')}>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
}
export default AddToCart
