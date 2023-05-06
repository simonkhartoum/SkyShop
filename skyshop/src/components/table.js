import React from 'react';
import productsData from '../db.json';
import TableRow from './prod';
import  '../css/tablestyle.css'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData.products,
    };
  }
  handleUpdatePrice = (productId, newPrice) => {
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(response => response.json())
    .then(data => {
      // Update the product with the new price value in the state
      const updatedProducts = this.state.products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            price: newPrice
          };
        }
        return product;
      });
      this.setState({ products: updatedProducts });
      console.log(`Product with id ${productId} updated with new price ${newPrice}`);
    })
    .catch(error => console.error(`Failed to update product with id ${productId}:`, error));
  };
  
  

  handleDelete = (productId) => {
    // Filter out the product with the given id
    const updatedProducts = this.state.products.filter(
      (product) => product.id !== productId
    );
  
    // Update the state with the new products array
    this.setState({ products: updatedProducts });
  
    // Update the db.json file by deleting the product with the given id
    fetch(`http://localhost:3000/products/${productId}`, {
      method: 'DELETE',
    }).then(() => {
      console.log(`Product with id ${productId} deleted from db.json`);
    });
  };
 render() 
        {
    return (
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Brand</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Details</th>
            <th scope="col">Category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => (
           <TableRow
           key={product.id}
           id={product.id}
           image={product.image}
           brand={product.brand}
           name={product.name}
           price={product.price}
           details={product.details}
           category={product.category}
           ondelete={this.handleDelete}
           updating={this.handleUpdatePrice}
           />
          ))}
        </tbody>
      </table>
    );
          }
}

export default Table;
