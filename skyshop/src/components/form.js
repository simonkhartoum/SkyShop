import React, { useState, useEffect } from 'react';
import  '../css/tablestyle.css'

function Form() {
  const [formData, setFormData] = useState({
    image: '',
    brand: '',
    name: '',
    price: '',
    details: '',
    category: '',
  });

  const [, setLastProductId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products?_sort=id&_order=desc&_limit=1')
      .then((response) => response.json())
      .then((data) => {
        setLastProductId(data[0]?.id || 0);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        const lastProduct = data[data.length - 1];
        const lastProductId = parseInt(lastProduct.id);
        const newProductId = lastProductId + 1;
        const newProduct = {...formData, id: newProductId.toString()};
  
        fetch('http://localhost:3000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            setFormData({
              image: '',
              brand: '',
              name: '',
              price: '',
              details: '',
              category: '',
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
        Details:
        <input
          type="text"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
      </label>
      </div>
      <br />
      <button style={{backgroundColor:"rgb(15, 226, 155)"}} type="submit">Submit</button>
    </form>
  );
}

export default Form;




