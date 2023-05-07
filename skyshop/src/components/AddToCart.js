// import { useState } from 'react';

// function AddToCart() {
//   const [cart, setCart] = useState([]);
//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     console.log(`${product} has been added to the cart!`);
//   }
//   // Function to remove a product from the cart
//   const removeFromCart = (product) => {
//     const updatedCart = cart.filter((item) => item !== product);
//     setCart(updatedCart);
//     console.log(`${product} has been removed from the cart!`);
//   }

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length > 0 ? (
//         <ul>
//           {cart.map((product) => (
//             <li key={product}>
//               {product}
//               <button onClick={() => removeFromCart(product)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty</p>
//       )}

//       <h2>Products</h2>
//       <ul>
//         <li>
//           Product 1
//           <button onClick={() => addToCart('Product 1')}>Add to Cart</button>
//         </li>
//         <li>
//           Product 2
//           <button onClick={() => addToCart('Product 2')}>Add to Cart</button>
//         </li>
//         <li>
//           Product 3
//           <button onClick={() => addToCart('Product 3')}>Add to Cart</button>
//         </li>
//       </ul>
//     </div>
//   );
// }


// export default AddToCart




import React, { useState } from 'react';


const AddToCart = ({ product, handleRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = () => {
    setCartItems([...cartItems, product]);
  };
  const handleDeleteFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <div className='cart'>
        {cartItems.length > 0 && (
          <div>
            <h2>Cart</h2>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-item'>
                <img src={item.image} alt='' />
                <h3>{item.brand}</h3>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.details}</p>
                <button onClick={() => handleDeleteFromCart(item.id)}>Delete from Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AddToCart;